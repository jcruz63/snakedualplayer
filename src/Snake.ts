import Segment from "./Segment";

class Snake implements Renderable{
    private _length: number = 3;
    private _width: number;
    private _height: number;
    private _segments: Segment[] = [];
    //not adding head and tail segements, dont know how the segment typescript file is going to work

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

}

export default Snake;