<script>
  import Clock from "./components/clock.svelte";
  import "./styles.css";

  let name = "World";

  let d = new Date();
  d.toLocaleString("en-US", { timeZone: "America/New_York" });
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <Clock />
  <Clock tz={7} />
</main>
