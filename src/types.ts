export type drawFn = (ctx: CanvasRenderingContext2D) => void;
export type drawContext = {
    addDrawFn:(fn: drawFn) => void;
    removeDrawFn:(fn: drawFn) => void;
}
export type Point = {
    x: number,
    y: number,
}