<script lang="ts">
	import type { drawFn, Point } from "src/types";
	import { getContext, onDestroy, onMount, setContext } from "svelte";
	import { canvasDims } from "$lib/stores/canvasStore"
    let canvasElement: HTMLCanvasElement;
    let draws: drawFn[] = [];
    let frame: number;

    console.log("Canvas.svelte: Initialized");
    setContext("canvas", {
        addDrawFn: (fn: drawFn) => {
            draws.push(fn);
        },
        removeDrawFn: (fn: drawFn) => {
            draws = draws.filter((f) => f !== fn);
        },
    })

    

    onMount(() => {
        console.log("Canvas.svelte: Mounted");

        let ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
        
        frame = requestAnimationFrame(() => draw(ctx));
            
    });
    onDestroy(() => {
        if(frame){
            cancelAnimationFrame(frame);
        }

    });

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.canvas.width = window.innerWidth;
        $canvasDims.x = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        $canvasDims.y = window.innerHeight;
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        draws.forEach(element => {
            element(ctx);
        
    });
    frame = requestAnimationFrame(() => draw(ctx));


}

</script>

<canvas bind:this={canvasElement}/>
<slot />