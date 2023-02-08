<script lang="ts">
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";
    export let form: ActionData;
</script>

<form
    method="POST"
    use:enhance={() => {
	return async ({ update }) => {
	    update({ reset: false });
	}
    }}
>
    <input name="username" type="text" placeholder="your name here" />
    <button>submit</button>
</form>
