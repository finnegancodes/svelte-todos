<script>
  import { showAll, todos } from "../stores";

  $: todosEmpty = $todos.length < 1;
  $: displayToggle = $showAll ? "Hide Completed" : "Show All"

  const toggleShowAll = () => {
    $showAll = !$showAll
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<footer>
  <a class:disabled={todosEmpty} on:click={toggleShowAll}>
    <small>{displayToggle}</small>
  </a>
  <a class:disabled={todosEmpty} on:click={todos.removeCompleted}>
    <small>Delete Completed</small>
  </a>
</footer>

<style>
  footer {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    color: var(--accent);
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .disabled {
    color: var(--secondary);
    pointer-events: none;
  }

  small {
    font-size: .75rem;
  }
</style>
