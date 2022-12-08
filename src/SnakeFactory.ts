import gameView from "./GameView";
import Snake from "./Snake";

class SnakeFactory {
    private _gameView: gameView;
    private static _counter = 0;
    private static _startingLength = 3;
    private readonly _startingData: {x: number, y: number, headColor: string, bodyColor: string,}[];
    private readonly _maxNumberSnakes: number;


    constructor(gameView: gameView) {
        this._gameView = gameView;
        let xHalf = this._gameView.width / 2;
        let yHalf = this._gameView.height / 2;

        this._startingData = [
            {
                headColor: "#FF0000",
                bodyColor: "#FFA500",
                x: xHalf / 2,
                y: yHalf / 2
            },
            {
                headColor: "#0000FF",
                bodyColor: "#00FFFF",
                x: xHalf + xHalf / 2,
                y: yHalf / 2
            },
            {
                headColor: "#00FF00",
                bodyColor: "#FFFF00",
                x: xHalf / 2,
                y: yHalf + yHalf / 2
            },
            {
                headColor: "#FF00FF",
                bodyColor: "#800080",
                x: xHalf + xHalf / 2,
                y: yHalf + yHalf / 2
            }
        ]
        this._maxNumberSnakes = this._startingData.length;
    }

    getStartingData = () => {
        return this._startingData[SnakeFactory._counter];
    }




    createSnake = (): Snake | null => {
        if (SnakeFactory._counter < this._maxNumberSnakes) {
            let startingData = this.getStartingData();
            let snake = new Snake(SnakeFactory._startingLength, startingData.headColor, startingData.bodyColor, this._gameView.gridSquareSize, this._gameView.gridSquareSize, startingData.x, startingData.y);
            SnakeFactory._counter++;
            return snake;
        }
        return null;
    }

}

export default SnakeFactory;