<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>
<div class="flex flex-col">
    <h1 class="text-6xl m-auto">
        You will login here.
    </h1>
</div>

<form action="POST">
    <label for="email">
        <span>Email</span>
        <input type="text">
    </label>
</form>