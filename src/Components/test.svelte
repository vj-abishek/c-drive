<script>
  import { useParams } from "svelte-navigator";

  const params = useParams();

  $: console.log($params);
</script>

<h3>Welcome user {$params.id}! bleep bloop...</h3>
