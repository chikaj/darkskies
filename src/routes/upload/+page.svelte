<script lang="ts">
    import type { PageData } from './$types';
    import { FileDropzone } from '@skeletonlabs/skeleton';
    
    export let data: PageData;
</script>

<div class="flex flex-col h-full">
	<div class="flex m-auto h-1/4 w-1/4">
		<FileDropzone name="files" />
	</div>
</div>