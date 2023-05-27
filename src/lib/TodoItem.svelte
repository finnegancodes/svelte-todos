<script>
  import { slide } from "svelte/transition";
  import { todos } from "../stores";
  import IconButton from "./IconButton.svelte";

  export let id;
  export let task;
  export let isDone;

  let firstLoad = true;

  const deleteTodo = () => {
    todos.remove(id);
  };

  $: if (!firstLoad) {
    todos.update(id, isDone);
  } else {
    firstLoad = false;
  }
</script>

<li in:slide out:slide class="todo-item bottom-divider">
  <input type="checkbox" bind:checked={isDone} />
  <p class="task" class:done={isDone}>{task}</p>
  <IconButton
    type="button"
    icon="delete"
    label="Delete todo"
    color="secondary"
    on:click={deleteTodo}
  />
</li>

<style>
  .todo-item {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .task {
    flex: 1;
  }

  .done {
    text-decoration: line-through;
    color: var(--secondary);
  }
</style>
