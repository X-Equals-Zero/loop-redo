<script lang="ts">
import { canvasDims } from '$lib/stores/canvasStore';
import { Canvas } from '@threlte/core'
	import Scene3d from './Scene3d.svelte';




  // end 3d stuff
</script>
<Canvas size={{width: $canvasDims.x, height: $canvasDims.y}}>
    <Scene3d />
      
</Canvas>