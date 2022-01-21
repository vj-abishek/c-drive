<script>
  export let name;
  export let blob;
  export let type;
</script>

<div class="files-container">
  <div class="content">
    {#if type.includes("image")}
      <img
        src={blob}
        style="width:100%; height: 100%; object-fit: cover"
        alt={name}
      />
    {:else}
      <div class="width: 100%; height: 100%; background-color: gray" />
    {/if}
  </div>
  <div class="title">
    <div>
      <img class="img" src="images/files2.png" alt="" />
    </div>
    <div style="padding-left: 10px" class="name">{name}</div>
  </div>
</div>

<style>
  .files-container {
    width: 280px;
    height: 280px;
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 6px;
    margin: 15px;
    display: flex;
    flex-direction: column;
  }

  .content {
    width: 100%;
    background-color: #ebebeb;
    height: 240px;
  }

  .title {
    display: flex;
    padding: 10px;
  }

  .img {
    width: 20px;
    height: 20px;
  }

  .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
