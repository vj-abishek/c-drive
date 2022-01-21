<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Routes/index.svelte";
</script>

<Router>
  <main>
    <Route path="/">
      <Home />
    </Route>

    <Route path="/:id/*uuid">
      <Home />
    </Route>
  </main>
</Router>

<style>
  main {
    width: clamp(16rem, 95vw, 85rem);
    margin: 0 auto;
  }
</style>
