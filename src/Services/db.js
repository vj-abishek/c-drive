import Dexie from '../../node_modules/dexie/dist/dexie';

export const db = new Dexie('c-drive');
db.version(1).stores({
    drive: 'id, location ',
});
