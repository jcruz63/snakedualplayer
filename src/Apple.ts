import gameView from "./GameView";


class Apple implements Renderable {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _color: string;
    private _gameView: gameView;

    constructor(width: number, height: number, color: string, gameView: gameView, x: number, y: number) {
        this._gameView = gameView;
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

    get width(): number {
        return this._width;
    }

    checkCollision(obj: Renderable): string | undefined {
        return undefined;
    }

}
export default Apple;
