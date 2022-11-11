import gameView from "./GameView";


class Apple implements Renderable {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _color: string;
    private _gameView: gameView;

    constructor(x: number, y: number, width: number, height: number, color: string, gameView: gameView) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._color = color;
        this._gameView = gameView;
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

    appleSpawner = () => { // .6 * 20 = 12 * 10 = 120
        this._x = Math.floor(Math.random() * this._gameView.gridXSquares) * this._gameView.gridSquareSize;
        this._y = Math.floor(Math.random() * this._gameView.gridYSquares) * this._gameView.gridSquareSize;
    }

}
export default Apple;
