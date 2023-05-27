<div class="paper">
  <slot></slot>
</div>

<style>
  .paper {
    box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.2);
    border-radius: 4px;
  }

  @media (max-width: 32rem) {
    .paper {
      border-radius: 0;
    }
  }
</style>