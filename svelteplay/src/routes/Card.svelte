<script lang="ts">
    interface Product {
        id: string
    }

    export let products: Product[]
</script>

{#each products as product}
    {product.id}
{/each}
