import { Direction } from "./enums/direction.enum";

class Vector {
    public _x: number;
    public _y: number;
    public _direction: Direction;

    constructor(x: number, y: number, direction: Direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    clone() {
        return new Vector(this._x, this._y, this._direction)
    }

}

export default Vector;