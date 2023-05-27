<script>
  import { todos } from "../stores";
  import IconButton from "./IconButton.svelte";
  import { v4 as uuidv4 } from "uuid";

  let task = "";

  const addTask = () => {
    if (!task) return;

    todos.add({
      id: uuidv4(),
      task,
      isDone: false,
    });

    task = "";
  };
</script>

<form class="bottom-divider" action="#" on:submit|preventDefault>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    type="text"
    placeholder="What needs to be done?"
    maxlength="128"
    autofocus
    bind:value={task}
  />
  <div class="submit-button">
    <IconButton type="submit" icon="add" label="Add todo" on:click={addTask} />
  </div>
</form>

<style>
  form {
    display: flex;
    align-items: center;
  }

  input[type="text"] {
    padding: 1rem;
    border: none;
    background: none;
    flex: 1;
  }

  input[type="text"]:focus-visible {
    outline: none;
  }

  .submit-button {
    margin-inline-end: 0.75rem;
  }
</style>
