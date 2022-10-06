<script>
  import InViewContainer from './InViewContainer.svelte';
</script>

<InViewContainer>
  <div class="text-block" slot="InView">
    <slot />
    <InViewContainer>
      <div class="block-after" slot="InView" />
    </InViewContainer>
  </div>
</InViewContainer>

<style>
  .text-block {
    display: block;
    color: transparent;
    animation: text-appear 0.01s linear 0.5s 1 forwards normal;
    position: relative;
  }

  .text-block .block-after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background: #222;
    animation: block-disappear 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 forwards normal;
  }

  @keyframes text-appear {
    0% {
      color: transparent;
    }
    100% {
      color: var(--text-color);
    }
  }

  @keyframes block-disappear {
    0% {
      left: 0;
      width: 0%;
    }
    50% {
      left: 0%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }
</style>
