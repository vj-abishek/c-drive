import { v4 as uuidv4 } from "uuid";
import { db } from './db'

export const createFolder = async (location = '/', folderName = 'unnamed') => {

    // handle homepage
    if (location === '/') {
        const isAlreadyPresent = await db.drive.where('location').equals('/').count()

        if (isAlreadyPresent === 0) {
            const folder = {
                id: uuidv4(),
                location,
                folders: [folderName],
            }

            const id = await db.drive.add(folder)
            console.log(id)
            window.location.reload()
            return
        }

        const oldData = await db.drive.where('location').equals('/').toArray()

        const folder = {
            folders: [...oldData[0].folders, folderName],
        }

        await db.drive.update(oldData[0].id, folder)
        window.location.reload()

        return

    }
}

export const uploadFile = async (file, blob, isHome) => {

    if (!file) return;


    if (isHome) {
        const isAlreadyPresent = await db.drive.where('location').equals('/').count()

        const name = file.name;
        const type = file.type;
        console.log(isAlreadyPresent)


        if (isAlreadyPresent === 0) {

            const fileData = [{
                name,
                type,
                blob,
            }]

            const folder = {
                id: uuidv4(),
                location: '/',
                folders: [],
                'home': fileData,
            }

            const id = await db.drive.add(folder)
            console.log(id)
            window.location.reload()
            return
        }

        const oldData = await db.drive.where('location').equals('/').toArray()

        const fileData = {
            name,
            type,
            blob,
        }

        const files = oldData[0]?.home?.length ? [...oldData[0].home, fileData] : [fileData]

        await db.drive.update(oldData[0].id, {
            'home': files,
        })
        window.location.reload()

    }
}