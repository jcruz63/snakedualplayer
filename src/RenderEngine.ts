class RenderEngine {
    private _context: CanvasRenderingContext2D;
    private _renderables:  Array <Renderable>;
    constructor(context: CanvasRenderingContext2D) {
        this._context = context;
    }
}