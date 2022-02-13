<article class="card">
  <header class="card-header">
    <slot name="header"></slot>
  </header>

  <div class="card-content">
    <slot></slot>
  </div>
</article>

<style>
  .card {
    border-radius: 7px;
    overflow: hidden;
  }

  .card-header {
    background-color: var(--wlt-primary-color);
    color: white;
    padding: 14px 20px;
  }

  .card-header :global(.card-title),
  .card-header :global(.card-description) {
    margin: 0;
  }

  .card-header :global(.card-description) {
    font-size: 12px;
  }

  .card-content {
    background-color: var(--wlt-background-color);
    color: white;
  }
</style>
