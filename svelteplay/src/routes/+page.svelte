<script lang="ts">
  import Card from "./Card.svelte";

  let products = [
    {
      id: "a",
    },
    {
      id: "b",
    },
  ];
</script>

<Card {products} />
