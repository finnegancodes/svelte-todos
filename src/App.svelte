<script>
  import { onMount } from "svelte";
  import Paper from "./lib/Paper.svelte";
  import TaskField from "./lib/TaskField.svelte";
  import TodoList from "./lib/TodoList.svelte";
  import Toolbar from "./lib/Toolbar.svelte";
  import { showAll, todos } from "./stores";

  onMount(() => {
    const unsub1 = todos.subscribe((_) => {
      todos.save();
    });
    
    const unsub2 = showAll.subscribe((_) => {
      showAll.save();
    })

    return () => {
      unsub1();
      unsub2();
    };
  })

</script>

<header>
  <h1>Svelte Todos</h1>
</header>
<main>
  <Paper>
    <TaskField />
    <TodoList />
    <Toolbar />
  </Paper>
</main>

<style>
  header {
    padding: 1rem;
    margin-block-start: 1rem;
    text-align: center;
  }

  main {
    padding: 1rem 0;
    max-width: 30rem;
    margin: 0 auto;
  }
</style>

