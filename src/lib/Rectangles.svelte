<script lang="ts">
	import type { drawContext } from "src/types";
	import { getContext, onMount } from "svelte";

    
    console.log("Rectangles.svelte: Initialized");
    let canvasContext: drawContext = getContext("canvas");
    onMount(() => {
        console.log("Rectangles.svelte: Mounted");
        
        canvasContext.addDrawFn(draw);

    });

    const skewedRectangle = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, skew: number) => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width + skew, y + height);
        ctx.lineTo(x + skew, y + height);
        ctx.closePath();
        ctx.stroke();
    }

    let x = 0;
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.save();
        skewedRectangle(ctx, x, ctx.canvas.height / 2, 100, 100, 50);
        ctx.restore();
        x < ctx.canvas.width ? x += 15 : x = 0;

    }
</script>
