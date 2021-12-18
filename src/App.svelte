<script>
  import Clock from "./components/clock.svelte";
  import { getAllTimezones } from "./api";
  import "./styles.css";

  (async () => {
    const timezones = await getAllTimezones();

    console.log({ timezones });
  })();
</script>

<main>
  <h1>Hello</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <Clock />
  <Clock tz={7} />
</main>
