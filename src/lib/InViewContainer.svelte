<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let once = false;
  export let top = 0;
  export let bottom = 0;

  const dispatch = createEventDispatcher();
  const containerId = `__InViewContainer-${Math.random()}__`;
  let observing = true;

  $: dispatch('InViewUpdate', { inView: observing });

  /// current in experimental support, no support for IE (only Edge)
  /// see more in: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
  /**
   * @param {Element} container
   */
  function intersection_verify(container) {
    // bottom left top right
    const rootMargin = `${-bottom}px 0px ${-top}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        observing = entries[0].isIntersecting;
        if (observing && once) {
          observer.unobserve(container);
        }
      },
      {
        rootMargin
      }
    );

    observer.observe(container);
    return () => observer.unobserve(container);
  }

  /// Fallback in case the browser not have the IntersectionObserver
  /**
   * @param {Element} container
   */
  function bounding_verify(container) {
    const c = container.getBoundingClientRect();
    observing = c.top + top < window.innerHeight && c.bottom - bottom > 0;

    if (observing && once) {
      // @ts-ignore
      window.removeEventListener('scroll', verify);
    }

    // @ts-ignore
    window.addEventListener('scroll', bounding_verify);
    // @ts-ignore
    return () => window.removeEventListener('scroll', bounding_verify);
  }

  onMount(() => {
    // for some reason the 'bind:this={box}' on div stops working after npm run build... so... workaround time >:|
    const container = document.getElementById(containerId);

    if (IntersectionObserver) {
      // @ts-ignore
      return intersection_verify(container);
    } else {
      // @ts-ignore
      return bounding_verify(container);
    }
  });
</script>

<div id={containerId}>
  {#if observing}
    <slot name="InView" />
  {:else}
    <slot name="OutOfView" />
  {/if}
</div>
