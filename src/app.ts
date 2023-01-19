import Snake from "./Snake";
import {Direction} from "./enums/direction.enum";

class Game {
    /*Set the canvas using gameview*/
    private _gameView: GameView;

    constructor() {
        this._gameView = new GameView(10, 60, 60);
    }

}

new Game();