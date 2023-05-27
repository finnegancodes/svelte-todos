<script>
  import TodoItem from "./TodoItem.svelte";
  import { showAll, todos } from "../stores";

  $: filteredTodos = $showAll ? $todos : $todos.filter((item) => !item.isDone);
</script>

<ul class="tasks">
  {#each filteredTodos as todo (todo.id)}
    <TodoItem {...todo} />
  {/each}
</ul>

<style>
  .tasks {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
