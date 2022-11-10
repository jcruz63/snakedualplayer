class segment {
    private _x: number;
    private _y: number;
    //todo: add color
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
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

class Snake implements Renderable{
    private _length: number = 3;
    private _headColor: string = '#FFA500';
    private _bodyColor: string = '#00FF00';
    private _width: number;
    private _height: number;
    private _x: number = 0;
    private _y: number = 0;
    private _segments: segment[] = [];
    //todo: ref to head segment
    //todo: ref to tail segment


    //todo: remove x, y from the snake because it is the head
    constructor(length: number, headColor: string, bodyColor: string, width: number, height: number, x: number, y: number) {
        this._length = length;
        this._headColor = headColor;
        this._bodyColor = bodyColor;
        this._width = width;
        this._height = height;
        this._x = x;
        this._y = y;
        //todo: add segments
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get headColor(): string {
        return this._headColor;
    }

    set headColor(value: string) {
        this._headColor = value;
    }

    get bodyColor(): string {
        return this._bodyColor;
    }

    set bodyColor(value: string) {
        this._bodyColor = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    //todo: get x and y should be the head segment x and y
    //todo: set x and y should be the head segment x and y
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

    //todo: addSegment. use the tail segment x and y to add a new segment and tail segment ref to the new segment

    render(context: CanvasRenderingContext2D): void {
        // Setting head color
        context.fillStyle = this.headColor;
        context.fillRect(this._x, this._y, this._width, this._height)
        // Setting body
        context.fillStyle = this.bodyColor;
        //todo: render segments update x,y


    }
}

export default Snake;
