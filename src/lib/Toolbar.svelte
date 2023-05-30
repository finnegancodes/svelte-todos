<script>
  import { showAll, todos } from "../stores";

  let dialog;

  $: todosEmpty = $todos.length < 1;
  $: displayToggle = $showAll ? "Hide Completed" : "Show All"

  const toggleShowAll = () => {
    $showAll = !$showAll
  }

  const openDialog = () => {
    dialog?.showModal();
  }

  const closeDialog = () => {
    dialog?.close();
  }

  const deleteCompleted = () => {
    dialog?.close();
    todos.removeCompleted();
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<footer>
  <a class:disabled={todosEmpty} on:click={toggleShowAll}>
    <small>{displayToggle}</small>
  </a>
  <a class:disabled={todosEmpty} on:click={openDialog}>
    <small>Delete Completed</small>
  </a>
  <dialog bind:this={dialog} class="delete-dialog">
    <h1>Delete all completed todos?</h1>
    <p>This cannot be undone.</p>
    <div class="actions">
      <button on:click={closeDialog}>Cancel</button>
      <button on:click={deleteCompleted}>Delete</button>
    </div>
  </dialog>
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

  .delete-dialog {
    text-align: center;
    padding: 1.5rem;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.5);
  }

  .delete-dialog::backdrop {
    background-color: hsla(0, 0%, 0%, 0.5);
  }

  .delete-dialog h1 {
    font-size: 1.5rem;
    margin-block-end: .25rem;
  }

  .actions {
    margin-block-start: 1rem;
    display: flex;
    justify-content: center;
    gap: .5rem;
  }
</style>
