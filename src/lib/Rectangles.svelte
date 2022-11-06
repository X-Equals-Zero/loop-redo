<script lang="ts">
	import type { drawContext } from "src/types";
	import { getContext, onMount } from "svelte";

    
    console.log("Rectangles.svelte: Initialized");
    let canvasContext: drawContext = getContext("canvas");
    onMount(() => {
        console.log("Rectangles.svelte: Mounted");
        
        canvasContext.addDrawFn(draw);

    });

    let x = 0;
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.save();
        ctx.moveTo(0, 0);
        ctx.beginPath();
        ctx.lineTo(500, x);
        ctx.lineTo(50, 500);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
        x += 0.01;

    }
</script>
