<script>
  import Button from "../Button.svelte";
  import Folder from "./Folder.svelte";
  import Files from "../Files/index.svelte";
  import { createFolder, uploadFile } from "../../Services/drive.js";
  import { onMount } from "svelte";

  import { liveQuery } from "dexie";
  import { db } from "../../Services/db.js";

  let input = null,
    drive = null;

  function handleClick() {
    input?.click();
  }

  async function handleFolder() {
    const folder = prompt("Enter folder name");
    const location = window.location.pathname;

    createFolder(location, folder);
  }

  drive = liveQuery(async () => {
    const data = await db.drive
      .where("location")
      .equals(window.location.pathname)
      .toArray();

    console.log("called");

    return {
      folders: data[0].folders,
      files: data[0].home,
      data,
    };
  });

  onMount(() => {
    input?.addEventListener("change", (e) => {
      const file = e.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = () => {
        const arrayBuffer = fileReader.result;
        const blob = new Blob([arrayBuffer], { type: file.type });

        const location = window.location.pathname;
        let isHome = false;

        if (location === "/") {
          isHome = true;
        }

        uploadFile(file, blob, isHome);
      };
      fileReader.readAsArrayBuffer(file);
    });
  });
</script>

<div>
  <input bind:this={input} id="file" type="file" hidden />

  <section>
    <header>
      <h2>Folders</h2>
      <Button value="Create Folder" onclick={handleFolder} />
    </header>

    <div class="folder">
      {#if $drive?.folders}
        {#each $drive.folders || [] as dr}
          <Folder title={dr} />
        {/each}
      {/if}
    </div>
  </section>

  <section>
    <header>
      <h2 style="padding-top: 20px">Files</h2>
      <Button value="Upload File" onclick={handleClick} />
    </header>

    <div class="folder">
      {#if $drive?.files}
        {#each $drive.files || [] as file}
          <Files
            name={file.name}
            type={file.type}
            blob={window.URL.createObjectURL(file.blob)}
          />
        {/each}
      {/if}
    </div>
  </section>
</div>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 5px 20px;
  }

  .folder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
