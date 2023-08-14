<script lang="ts">
    import type { PageData } from './$types';
    import { FileDropzone } from '@skeletonlabs/skeleton';
    
    export let data: PageData;
</script>

<div class="flex h-full">
	<div class="m-auto">
		<FileDropzone name="files" />
	</div>
</div>