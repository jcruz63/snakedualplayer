import GameView from "./GameView";

class Game {
    private _gameView: GameView;
    private _gameLoop: NodeJS.Timer | null;
    private _startButton: HTMLButtonElement = document.getElementById("startButton") as HTMLButtonElement;
    private _stopButton: HTMLButtonElement = document.getElementById("stopButton") as HTMLButtonElement;

    constructor() {
        this._gameView = new GameView(10, 20, 20);
        this._startButton.addEventListener("click", this.startGame.bind(this));
        this._stopButton.addEventListener("click", this.stopGame.bind(this));
        this._gameLoop = null;
    }

    startGame = () => {
        this._gameLoop = setInterval(this.gameLoop, 1000);
    }

    stopGame = () => {
        this._gameLoop && clearInterval(this._gameLoop);
    }
    gameLoop = () => {

        console.log("game loop");
    }
}

new Game();
