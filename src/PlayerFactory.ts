import Player from "./Player";
import SnakeFactory from "./SnakeFactory";
import ControllerFactory from "./ControllerFactory";
import GameView from "./GameView";



class PlayerFactory {
   private _snakeFactory: SnakeFactory;
   private _controllerFactory: ControllerFactory;
   constructor(_gameView: GameView) {
         this._snakeFactory = new SnakeFactory(_gameView);
         this._controllerFactory = new ControllerFactory();
   }
createPlayer(): Player {
   return new Player("Player", 0, this._snakeFactory.createSnake(), this._controllerFactory.createController());
   }
}

export default PlayerFactory;