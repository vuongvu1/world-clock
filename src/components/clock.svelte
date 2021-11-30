<script>
  import { onMount } from "svelte";
  export let tz = 0;

  let hr_rotation = 0;
  let min_rotation = 0;
  let sec_rotation = 0;
  let sec_combined = 0;

  onMount(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hr = date.getHours() + tz;
      const min = date.getMinutes();
      const sec = date.getSeconds();
      hr_rotation = 30 * hr + min / 2;
      min_rotation = 6 * min;
      if ((sec_rotation + 6) % 360 === 0) {
        sec_combined += 360;
      }
      sec_rotation = sec_combined + 6 * sec;
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<section class="clock">
  <div class="hour h12">12</div>
  <div class="hour h3">3</div>
  <div class="hour h6">6</div>
  <div class="hour h9">9</div>
  {#each [1, 2, 4, 5, 7, 8, 10, 11] as oddHour}
    <div class="hour odd" style="--odd-rotation: {oddHour * 30}deg" />
  {/each}
  <div class="center" />
  <div id="hour" style="--hr-rotation: {hr_rotation}deg" />
  <div id="minute" style="--min-rotation: {min_rotation}deg" />
  <div id="second" style="--sec-rotation: {sec_rotation}deg" />
</section>

<style>
  .clock {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 50%;
    position: relative;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .hour {
    position: absolute;
    font-weight: bold;
  }
  .odd {
    transform-origin: bottom;
    border-top: 10px solid black;
    height: 41%;
    width: 4px;
    top: 8px;
    left: 49%;
    opacity: 0.8;
    opacity: 0.8;
    transform: rotate(var(--odd-rotation));
  }
  .h12 {
    top: 4px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .h3 {
    top: 50%;
    right: 4px;
    transform: translate(0, -50%);
  }
  .h6 {
    left: 50%;
    bottom: 4px;
    transform: translate(-50%, 0);
  }
  .h9 {
    top: 50%;
    left: 4px;
    transform: translate(0, -50%);
  }
  #hour,
  #minute,
  #second {
    position: absolute;
    background: black;
    border-radius: 10px;
    transform-origin: bottom;
    transition: 0.3s all;
  }

  #hour {
    width: 1.8%;
    height: 25%;
    top: 25%;
    left: 48.85%;
    opacity: 0.8;
    transform: rotate(var(--hr-rotation));
  }

  #minute {
    width: 1.6%;
    height: 30%;
    top: 19%;
    left: 48.9%;
    opacity: 0.8;
    transform: rotate(var(--min-rotation));
  }

  #second {
    width: 1%;
    height: 40%;
    top: 9%;
    left: 49.25%;
    opacity: 0.8;
    transform: rotate(var(--sec-rotation));
  }
</style>
