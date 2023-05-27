<script>
  import { createEventDispatcher } from "svelte";

  export let type;
  export let icon;
  export let label = "";
  export let color = "primary";

  const dispatch = createEventDispatcher();
</script>

<button
  {type}
  class={`button ${color}`}
  aria-label={label}
  on:click={() => dispatch("click")}
>
  <span class="material-symbols-outlined">
    {icon}
  </span>
</button>

<style>
  .button {
    width: 2rem;
    height: 2rem;
    border: none;
    background: none;
    padding: 0.25rem;
    cursor: pointer;
  }

  .primary {
    color: var(--primary);
  }

  .secondary {
    color: var(--secondary);
  }
</style>
