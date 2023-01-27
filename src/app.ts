import Snake from "./Snake";
import {Direction} from "./enums/direction.enum";
import GameView from "./GameView";
import Controller from "./Controller";
import Player from "./Player";

class Game {
    private _gameView: GameView;
    private _startButton: HTMLButtonElement = document.getElementById("startButton") as HTMLButtonElement;
    private _snakes: Snake[] = [];

    constructor() {
        this._gameView = new GameView(10, 60, 60);

    }

start() {
        let snake1 = new Snake("pubkey1", "red", "green", 10, 10, Direction.UP);
        let player1 = new Player("John", 123, snake , new Controller('w', 's', 'a', 'd', snake, this._gameView.gridSquareSize));
        let snakes = [snake1];
}

}

new Game();