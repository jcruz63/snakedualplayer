import Point from "./Point";
import Player from "./Player";
import Segment from "./Segment";
import GameView from "./GameView";

class Game {
    /*Set the canvas using gameview*/
    private _gameView: GameView;

    constructor() {
        this._gameView = new GameView(10, 60, 60);
    }
}

new Game();