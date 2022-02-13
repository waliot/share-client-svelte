<script>
  import { createEventDispatcher } from "svelte"

  const eventDispatcher = createEventDispatcher()
</script>

<div class="zoom-change-buttons-container">
  <button class="zoom-button zoom-in-button" on:click={() => eventDispatcher("zoomChange", { type: "IN" })}>+</button>
  <button class="zoom-button zoom-out-button" on:click={() => eventDispatcher("zoomChange", { type: "OUT" })}>-</button>
</div>

<style>
  .zoom-change-buttons-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    margin-bottom: 14px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }

  .zoom-button {
    color: white;
    background-color: var(--wlt-background-color);
    border: none;
    border-radius: 50%;
    line-height: 1;
    width: 38px;
    height: 38px;
    cursor: pointer;
    transition: background-color linear 200ms;
  }

  .zoom-button:hover {
    background-color: var(--wlt-primary-color);
  }
</style>
