import GameView from "./GameView";
import RenderEngine from "./RenderEngine";
import Snake from "./Snake";
import Apple from "./Apple";
import Controller from "./Controller";
import Player from "./Player";
import PlayerFactory from "./PlayerFactory";
import GameController from "./GameController";

class Game {
    private _gameView: GameView;
    private _gameLoop: NodeJS.Timer | null;
    private _startButton: HTMLButtonElement = document.getElementById("startButton") as HTMLButtonElement;
    private _stopButton: HTMLButtonElement = document.getElementById("stopButton") as HTMLButtonElement;
    private _renderEngine: RenderEngine;
    private _apple: Apple | undefined;
    private _fps: number = 10;
    private _timer: number = 0;
    private _players: Player[] = [];
    private _startMenu = document.getElementById("startMenu") as HTMLDivElement;
    private _player1Score = document.getElementById("player1Score") as HTMLDivElement;
    private _player2Score = document.getElementById("player2Score") as HTMLDivElement;
    private _gameController: GameController;

    constructor() {
        this._gameView = new GameView(10, 20, 20);
        this._startButton.addEventListener("click", this.startGame.bind(this));
        this._stopButton.addEventListener("click", this.stopGame.bind(this));
        this._gameLoop = null;
        this._renderEngine = new RenderEngine(this._gameView.context);
        this._gameController = new GameController(this._renderEngine, this._gameView);


    }

    initGame = () => {
            this._players = this._gameController.initialize();

            let xApple = Math.floor(Math.random() * this._gameView.gridXSquares) * this._gameView.gridSquareSize;
            let yApple = Math.floor(Math.random() * this._gameView.gridYSquares) * this._gameView.gridSquareSize;
            // @ts-ignore
        if(xApple === this._players[0].snake.x && yApple === this._players[0].snake.y) {
                xApple += this._gameView.gridSquareSize;
            }
            this._apple = new Apple(this._gameView.gridSquareSize, this._gameView.gridSquareSize, "#FF0000", this._gameView, xApple, yApple);

            this._renderEngine.addRenderable(this._apple);

    }

    startGame = () => {
        this.initGame();
        this.gameLoop();
        this._gameLoop = setInterval(this.gameLoop, 1000 / this._fps);
        this._startMenu.style.display = "none";
    }

    stopGame = () => {
        this._gameLoop && clearInterval(this._gameLoop);
    }



    gameLoop = () => {
        this._gameView.context.clearRect(0, 0, this._gameView.canvas.width, this._gameView.canvas.height);

        this._players.forEach(player => {
            player.update();
            // @ts-ignore
            if (player.snake.x === this._apple.x && player.snake.y === this._apple.y) {
                if(player.snake instanceof Snake) {
                    player.snake.addSegment()
                }
                // @ts-ignore
                this._apple.x = Math.floor(Math.random() * this._gameView.gridXSquares) * this._gameView.gridSquareSize;
                // @ts-ignore
                this._apple.y = Math.floor(Math.random() * this._gameView.gridYSquares) * this._gameView.gridSquareSize;
                player.score++;
                this._player1Score.innerHTML = `${player.score}`;
                console.log("Player " + player.name + " score: " + player.score);
            }
            // @ts-ignore
            console.log("player name: " + player.name + " x: " + player.snake.x + " y: " + player.snake.y);
        });

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
