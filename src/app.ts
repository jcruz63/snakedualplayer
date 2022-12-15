import GameView from "./GameView";
import RenderEngine from "./RenderEngine";
import Snake from "./Snake";
import Apple from "./Apple";
import Player from "./Player";
import GameController from "./GameController";
import CollisionDetection from "./CollisionDetection";
import player from "./Player";
import collisionDetection from "./CollisionDetection";
import { Segment } from "./Snake";

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
        this._gameView = new GameView(10, 60, 60);
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
        });

        //check if apple collision
        this._players.forEach(player => {
            if(this._apple && this._apple.checkCollision(player.snake)) {
                player.score++;
                player.snake.addSegment();
            }
        })

        this._renderEngine.render();

        //check if player is in bounds
        this._players.forEach(player => {
            if(!this._gameView.isInBounds(player.snake.x, player.snake.y)) {
                this._renderEngine.removeRenderable(player.snake);
                this._players.splice(this._players.indexOf(player), 1);
                console.log(`Player ${player.id} is out of bounds`);
            }
        })

        let collisions = [];

        //check for all player collisions
        for(let i = 0; i < this._players.length -1; i++) {
            for(let j = i + 1; j < this._players.length; j++) {
                let collision = this._players[j].snake.checkCollision(<Renderable>this._players[i].snake);
                if(collision === 'head') {
                    collisions.push(
                    {
                        attacker: this._players[i],
                        defender: this._players[j],
                        type: 'head'
                    }
                    )
                } else if (collision === 'body') {
                    collisions.push(
                    {
                        attacker: this._players[i],
                        defender: this._players[j],
                        type: 'body'
                    }
                    )
                }

                }
            }

        //resolve all collisions
        collisions.forEach(collision => {
            if(collision.type === 'head') {
                this._renderEngine.removeRenderable(collision.defender.snake);
                this._renderEngine.removeRenderable(collision.attacker.snake);
                this._players.splice(this._players.indexOf(collision.defender), 1);
                this._players.splice(this._players.indexOf(collision.attacker), 1);
            } else if (collision.type === 'body') {
                this._renderEngine.removeRenderable(collision.defender.snake);
                this._players.splice(this._players.indexOf(collision.defender), 1);
                collision.attacker.snake.addSegment();
                collision.attacker.score++;
            }
        })



        if(this._players.length === 1) {
            this.stopGame();
            console.log(`Player ${this._players[0].id} with score ${this._players[0].score} wins!`);
        }
    }
}

new Game();
