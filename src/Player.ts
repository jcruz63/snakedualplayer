import Segment from "./Segment";

class Player {
    private _segments: Segment[];
    private _direction: string;
    private _x: number;
    private _y: number;
    private _length: number;
    // i don't see a reason to add a width here since the width is always the same as the height (segment wise)


    constructor() {
        this._segments = [];
        this._direction = "right";
        this._x = 0;
        this._y = 0;
        this._length = 0;
    }
}

export default Player;