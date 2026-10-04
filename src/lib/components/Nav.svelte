<script lang="ts">
  const links = [
    { href: '/#about', label: 'about', icon: 'M6 2h4v4H6z M3 14v-3h10v3' },
    { href: '/#talk', label: 'talk', icon: 'M2 3h12v8H7l-3 3v-3H2z' },
    { href: '/#things-ive-built', label: "things i've built", icon: 'M6 4L2 8l4 4 M10 4l4 4-4 4' },
    { href: '/#blog', label: 'blog', icon: 'M3 2h10v12H3z M5.5 5.5h5 M5.5 8h5 M5.5 10.5h3' }
  ];
</script>

<nav>
  <div class="inner">
    <a class="nav-brand" href="/"><span>~/</span>sonu-sharma</a>
    <ul class="nav-links">
      {#each links as { href, label, icon }}
        <li>
          <a {href} aria-label={label} title={label}>
            <svg class="nav-icon" viewBox="0 0 16 16" aria-hidden="true"><path d={icon} /></svg>
            <span class="nav-label">{label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
