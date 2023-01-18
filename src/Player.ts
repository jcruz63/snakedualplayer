import Segment from "./Segment";

class Player {
    private _segments: Segment[];
    private _direction: string;
    private _length: number = 3;
    // i don't see a reason to add a width here since the width is always the same as the height (segment wise)


    constructor(_direction: string) {
        this._segments = [];
        this._direction = _direction;
        if(length > 3){
            this._length = length;
        }
    }
}

export default Player;