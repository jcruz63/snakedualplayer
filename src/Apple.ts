class Apple implements Renderable {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
    }

    render(context: CanvasRenderingContext2D): void {
        context.fillStyle = this._color;
        context.fillRect(this._x, this._y, this._width, this._height);
    }

    respawn(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}

export default Apple;
