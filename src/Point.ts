class Point {
    constructor(public _x: number, public y: number) {
        this._x = _x;
        this.y = y;
    }
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }
}

export default Point;