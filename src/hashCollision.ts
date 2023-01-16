class Point {
    constructor(public _x: number, public _y: number) {
        this._x = _x;
        this._y = _y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
}

const point = new Point(1, 2);
const point2 = new Point(1, 2);




