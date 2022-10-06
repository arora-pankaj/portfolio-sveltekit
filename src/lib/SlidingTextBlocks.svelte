<script>
  import { onMount, onDestroy } from 'svelte';

  export let slidingInternal = 150;
  export let textBlocks = [''];
  const blocks = textBlocks.map((textBlock) => textBlock + ' ');
  const blocksLength = blocks.length;
  $: sliderTextLength = blocks[blockIndex].length;

  let blockIndex = 0;
  let sliderIndex = 0;
  let forward = true;

  const updateText = () => {
    if (forward) {
      if (sliderIndex === sliderTextLength - 1) {
        forward = false;
      } else {
        sliderIndex++;
      }
    } else {
      if (sliderIndex === 0) {
        forward = true;
        blockIndex = (blockIndex + 1) % blocksLength;
      } else {
        sliderIndex--;
      }
    }
  };

  /**
   * @type {string | number | NodeJS.Timer | undefined}
   */
  let intervalId;
  onMount(() => {
    intervalId = setInterval(updateText, slidingInternal);
  });
  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div>{blocks[blockIndex].substring(0, sliderIndex)}|</div>
