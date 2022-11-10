interface Renderable {
    render(context: CanvasRenderingContext2D): void;
    get y(): number;
    set y(value: number);
    set x(value: number);
    get x(): number;
    get width(): number;
    get height(): number;
}
