class GameView {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _gridSquareSize: number;
    private _gridXSquares: number;
    private _gridYSquares: number;

    constructor(gridSquareSize: number, gridXSquares: number, gridYSquares: number) {
        this._canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
        this._gridSquareSize = gridSquareSize;
        this._gridXSquares = gridXSquares;
        this._gridYSquares = gridYSquares;

        //setup canvas
        this._canvas.width = this._gridSquareSize * this._gridXSquares;
        this._canvas.height = this._gridSquareSize * this._gridYSquares;
    }

    get width(): number {
        return this._canvas.width;
    }

    get height(): number {
        return this._canvas.height;
    }

    get gridSquareSize(): number {
        return this._gridSquareSize;
    }

    set gridSquareSize(value: number) {
        this._gridSquareSize = value;
    }

    get gridXSquares(): number {
        return this._gridXSquares;
    }

    set gridXSquares(value: number) {
        this._gridXSquares = value;
    }

    get gridYSquares(): number {
        return this._gridYSquares;
    }

    set gridYSquares(value: number) {
        this._gridYSquares = value;
    }


    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }

    set context(value: CanvasRenderingContext2D) {
        this._context = value;
    }
}

export default GameView;
