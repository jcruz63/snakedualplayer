import GameView from "./GameView";
import RenderEngine from "./RenderEngine";
import Snake from "./Snake";
import Apple from "./Apple";
import Controller from "./Controller";
import apple from "./Apple";

class Game {
    private _gameView: GameView;
    private _gameLoop: NodeJS.Timer | null;
    private _startButton: HTMLButtonElement = document.getElementById("startButton") as HTMLButtonElement;
    private _stopButton: HTMLButtonElement = document.getElementById("stopButton") as HTMLButtonElement;
    private _renderEngine: RenderEngine;
    private _snake: Snake;
    private _apple: Apple;
    private _p1: Controller;
    private _p2: Controller;
    private _fps: number = 10;
    private _timer: number = 0;

    constructor() {
        this._gameView = new GameView(10, 20, 20);
        this._startButton.addEventListener("click", this.startGame.bind(this));
        this._stopButton.addEventListener("click", this.stopGame.bind(this));
        this._gameLoop = null;
        this._renderEngine = new RenderEngine(this._gameView.context);
        this._snake = new Snake(3, "#FFA500", "#00FF00", this._gameView.gridSquareSize, this._gameView.gridSquareSize, this._gameView.gridSquareSize * 4, this._gameView.gridSquareSize * 4);
        this._apple = new Apple(this._gameView.gridSquareSize * 5, this._gameView.gridSquareSize * 5, this._gameView.gridSquareSize, this._gameView.gridSquareSize, "#FF0000", this._gameView);
        this._p1 = new Controller('w', 's', 'a', 'd', this._snake, this._gameView.gridSquareSize);
        this._p2 = new Controller('ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', this._apple, this._gameView.gridSquareSize);
    }

    startGame = () => {
        this.gameLoop();
        this._gameLoop = setInterval(this.gameLoop, 1000 / this._fps);
    }

    stopGame = () => {
        this._gameLoop && clearInterval(this._gameLoop);
    }
    gameLoop = () => {
        this._gameView.context.clearRect(0, 0, this._gameView.canvas.width, this._gameView.canvas.height);

        this._p1.update();
        this._p2.update();
        this._renderEngine.addRenderable(this._snake);
        this._renderEngine.addRenderable(this._apple);
        this._renderEngine.render();
        // this._timer += 1;
        // if (this._timer % 10 == 0) {
        //     this._fps += 1;
        //     this._gameLoop = setInterval(this.gameLoop, 1000 / this._fps);
        // }
        console.log("game loop");
    }
}

new Game();
