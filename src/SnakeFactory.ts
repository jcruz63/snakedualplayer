import gameView from "./GameView";
import Snake from "./Snake";

class SnakeFactory {
    private _gameView: gameView;
    private _startingCoords: {x: number, y: number}[];
    private static _counter = 0;
    constructor(gameView: gameView) {
        this._gameView = gameView;
        this._startingCoords = [{x: 5, y: 5}, {x: 200, y: 200}]
    }

    createSnake = () => {
        SnakeFactory._counter++;
        return new Snake(3, "#FFA500", "#00FF00", this._gameView.gridSquareSize, this._gameView.gridSquareSize, this._startingCoords[0].x, this._startingCoords[0].y)
    }
}

export default SnakeFactory;