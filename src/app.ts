import GameView from "./GameView";
import RenderEngine from "./RenderEngine";
import Snake from "./Snake";
import Apple from "./Apple";

class Game {
    private _gameView: GameView;
    private _gameLoop: NodeJS.Timer | null;
    private _startButton: HTMLButtonElement = document.getElementById("startButton") as HTMLButtonElement;
    private _stopButton: HTMLButtonElement = document.getElementById("stopButton") as HTMLButtonElement;
    private _renderEngine: RenderEngine;

    constructor() {
        this._gameView = new GameView(10, 20, 20);
        this._startButton.addEventListener("click", this.startGame.bind(this));
        this._stopButton.addEventListener("click", this.stopGame.bind(this));
        this._gameLoop = null;
        this._renderEngine = new RenderEngine(this._gameView.context);
    }

    startGame = () => {
        this.gameLoop();
        this._gameLoop = setInterval(this.gameLoop, 1000);
    }

    stopGame = () => {
        this._gameLoop && clearInterval(this._gameLoop);
    }
    gameLoop = () => {
        this._gameView.context.clearRect(0, 0, this._gameView.canvas.width, this._gameView.canvas.height);
        let snake = new Snake(3, "#FFA500", "#00FF00", this._gameView.gridSquareSize, this._gameView.gridSquareSize, this._gameView.gridSquareSize * 2, this._gameView.gridSquareSize * 2);
        let apple = new Apple(this._gameView.gridSquareSize * 5, this._gameView.gridSquareSize * 5, this._gameView.gridSquareSize, this._gameView.gridSquareSize, "#FF0000");
        this._renderEngine.addRenderable(snake);
        this._renderEngine.addRenderable(apple);
        this._renderEngine.render();
        console.log("game loop");
    }
}

new Game();
