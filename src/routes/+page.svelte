<script lang="ts">
    import Canvas2d from '$lib/Canvas2d.svelte';
	import Canvas3d from '$lib/Canvas3d.svelte';
	import Rectangles from '$lib/Rectangles.svelte';



</script>



<h1>Welcome to SvelteKit</h1>
<div id="canvas2d">
    <Canvas2d>
        <Rectangles />
    </Canvas2d>


    <div id="canvas3d">
      <Canvas3d />
      </div>
</div>

<style>
    #canvas2d {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    #canvas3d {
        position: absolute;
        display: block;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>