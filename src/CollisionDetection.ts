import GameView from "./GameView";
import objectHash from "object-hash";
class CollisionDetection {
    static checkObjCollision(obj1: Renderable, obj2: Renderable): boolean {
        return obj1.x === obj2.x && obj1.y === obj2.y;
    }

    static checkWallCollision(gameView: GameView, obj: Renderable): boolean {
    return obj.x < 0 || obj.x >= gameView.width || obj.y < 0 || obj.y >= gameView.height;
    }

}

export default CollisionDetection;
