<script>
  export let title;
</script>

<div class="flex-container">
  <div class="flx">
    <div>
      <svg
        x="0px"
        y="0px"
        focusable="false"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
        fill="#5f6368"
        ><g
          ><path
            d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
          /><path d="M0 0h24v24H0z" fill="none" /></g
        ></svg
      >
    </div>
    <div class="title">{title}</div>
  </div>
</div>

<style>
  .flex-container {
    width: 300px;
    margin: 10px;
    background-color: #fff;
    border: 1px solid #dadce0;
    overflow: hidden;
    border-radius: 6px;
  }

  .flx {
    display: flex;
    flex: 0 0 48px;
    height: 24px;
    padding: 12px 16px;
  }

  .title {
    padding-left: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
