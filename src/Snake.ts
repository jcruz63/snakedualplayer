import Vector from "./Vector";
import {Direction} from "./enums/direction.enum";

class Snake {
    private _pubkey: string;
    private _headColor: string;
    private _bodyColor: string;
    private _vectors: Vector[];
    private _head: Vector;
    private _length: number;

    constructor(pubkey: string, headColor: string, bodyColor: string, startX: number, startY: number, startDirection: Direction) {
        this._pubkey = pubkey;
        this._headColor = headColor;
        this._bodyColor = bodyColor;
        this._length = 3;
        this._vectors = this.init(startX, startY, startDirection);
        this._head = this._vectors[0];
    }



    init(x: number, y: number, direction: Direction): Vector[] {
     let list: Vector[] = [];
        if(direction == Direction.UP) {
            for(let i = 0; i < this._length; i++) {
                list.push(new Vector(x,y+i, direction));
            }
        } else {
            for(let i = 0; i < this._length; i++) {
                list.push(new Vector(x,y-i, direction));
            }
        }
     return list;
    }


    get vectors(): Vector[] {
        return this._vectors;
    }

    move(direction: Direction) {
        let vector = this._head.clone();

        switch(direction) {
            case Direction.UP : vector._y -= 1; break;
            case Direction.DOWN : vector._y += 1; break;
            case Direction.LEFT : vector._x -= 1; break;
            case Direction.RIGHT : vector._x += 1; break;
            default:
        }
        this._vectors.unshift(vector);
        this._vectors.pop(); //returns the element modifies original list in place
        this._head = this._vectors[0];
    }

}


export default Snake;