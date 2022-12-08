import RenderEngine from "./RenderEngine";
import Player from "./Player";
import PlayerFactory from "./PlayerFactory";
import GameView from "./GameView";

class GameController {
    private _numberOfPlayersInput: HTMLInputElement;
    private _numberOfPlayers: number = 1;
    private _renderEngine: RenderEngine;
    private _playerFactory: PlayerFactory;


    constructor(renderEngine: RenderEngine, gameView: GameView) {
        this._numberOfPlayersInput = document.getElementById("numberOfPlayers") as HTMLInputElement;
        this._renderEngine = renderEngine;
        this._playerFactory = new PlayerFactory(gameView);
    }

    get numberOfPlayers(): number {
        return this._numberOfPlayers;
    }

    set numberOfPlayers(value: number) {
        this._numberOfPlayers = value;
    }

    initialize(): Player[] {
        this._numberOfPlayers = parseInt(this._numberOfPlayersInput.value);
        let counter = 0;
        let players: Player[] = [];


        while (counter < this._numberOfPlayers){
            let player = this._playerFactory.createPlayer();
            players[counter] = player;
            // @ts-ignore
            this._renderEngine.addRenderable(player.snake);
            counter++;
        }

        return players;
    }

}


export default GameController;