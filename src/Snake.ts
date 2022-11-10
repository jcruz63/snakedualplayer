class Segment {
    private _x: number;
    private _y: number;
    private _color: string;

    constructor(x: number, y: number, color: string) {
        this._x = x;
        this._y = y;
        this._color = color;
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


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}

class Snake implements Renderable{
    private _length: number = 3;
    private _headColor: string = '#FFA500';
    private _bodyColor: string = '#00FF00';
    private _width: number;
    private _height: number;
    private _segments: Segment[] = [];
    private _headSegment: Segment | undefined;
    private _tailSegment: Segment | undefined;


    constructor(length: number, headColor: string, bodyColor: string, width: number, height: number, x: number, y: number) {
        if(length > 3){
         this._length = length;
        }
        this._headColor = headColor;
        this._bodyColor = bodyColor;
        this._width = width;
        this._height = height;
        for (let i = 0; i < length; i++) {
            if(i === 0){
                this._headSegment = new Segment(x, y, headColor);
                this._segments.push(this._headSegment);
            }else if(i === length - 1){
                this._tailSegment = new Segment(x, y + (i * height), bodyColor);
                this._segments.push(this._tailSegment);
            } else {
                this._segments.push(new Segment(x, y + (i * height), bodyColor));
            }
        }
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

    get x(): number {
        // @ts-ignore
        return this._headSegment.x;
    }

    set x(value: number) {

        let previousX;
        let newX = value;
        let previousY;
        // @ts-ignore
        let newY = this._headSegment.y;
        this._segments.forEach(segment => {
            previousX = segment.x;
            segment.x = newX;
            newX = previousX;
            previousY = segment.y;
            segment.y = newY;
            newY = previousY;
        });

    }

    get y(): number {
        // @ts-ignore
        return this._headSegment.y;
    }

    set y(value: number) {
        let previousY;
        let newY = value;
        let previousX;
        // @ts-ignore
        let newX = this._headSegment.x;
        this._segments.forEach(segment => {
            previousY = segment.y;
            segment.y = newY;
            newY = previousY;
            previousX = segment.x;
            segment.x = newX;
            newX = previousX;
        })
    }

    //todo: test this method I think direction is needed
    addSegment(): void {
        // @ts-ignore
        let x = this._tailSegment.x;
        // @ts-ignore
        let y = this._tailSegment.y + this._height;
        this._tailSegment = new Segment(x, y, this._bodyColor);
        this._segments.push(this._tailSegment);
    }

    render(context: CanvasRenderingContext2D): void {

        this._segments.forEach((segment, index) => {
            context.fillStyle = segment.color;
            context.fillRect(segment.x, segment.y, this._width, this._height);
            console.log(`Segment ${index} x: ${segment.x} y: ${segment.y}`);
        });


    }
}

export default Snake;
