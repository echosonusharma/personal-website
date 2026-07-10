<script>
  import { page } from '$app/stores';
</script>

<div class="error-page">
  <p class="error-code">{$page.status}</p>
  <p class="error-msg">{$page.error?.message ?? 'something went wrong'}</p>
  <a href="/" class="post-back">← home</a>
</div>

<style>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    gap: 12px;
    text-align: center;
  }
  .error-code {
    font-size: 72px;
    font-weight: 700;
    color: var(--fg-bright);
    line-height: 1;
    letter-spacing: -0.04em;
  }
  .error-msg {
    color: var(--fg-dim);
    font-size: 13px;
    margin-bottom: 8px;
  }
</style>
