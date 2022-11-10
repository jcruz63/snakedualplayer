class RenderEngine {
    private _context: CanvasRenderingContext2D;
    private _renderables:  Array <Renderable>;
    constructor(context: CanvasRenderingContext2D) {
        this._context = context;
        this._renderables = [];
    }

    public addRenderable(renderable: Renderable) {
        this._renderables.push(renderable);
    }

    public render() {
        this._renderables.forEach(renderable => {
            renderable.render(this._context);
        });
    }
}

export default RenderEngine;
