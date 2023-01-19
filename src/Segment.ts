import Point from "./Point";
import {BodyPart} from "./body-part.enum";

class Segment {
    private _point: Point;
    private _headColor: string;
    private _bodyColor: string;
    private _bodyPart: BodyPart;
    private _id: number;

    constructor(point: Point, headColor: string, bodyColor: string, bodyPart: BodyPart, id: number) {
        this._point = point;
        this._headColor = headColor;
        this._bodyColor = bodyColor;
        this._bodyPart = bodyPart;
        this._id = id;
    }

    get head() {
        return this._bodyPart.HEAD;
    }

    get tail() {
        return this._bodyPart.TAIL;
    }

    get point(): Point {
        return this._point;
    }

    set point(value: Point) {
        this._point = value;
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

    get bodyPart(): BodyPart {
        return this._bodyPart;
    }

    set bodyPart(value: BodyPart) {
        this._bodyPart = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get x(): number {
        return this._point.x;
    }

    set x(value: number) {
        let prevX = this._point.x;
        let newX = this._point.x;

        let newY = this._point.y;
        this._point = new Point(newX, newY);
    // makes it so it cant collide with itself
        if (this._bodyPart === BodyPart.HEAD) {
            this._bodyPart = BodyPart.BODY;
        } else if (this._bodyPart === BodyPart.BODY) {
            this._bodyPart = BodyPart.TAIL;
        } else if (this._bodyPart === BodyPart.TAIL) {
            this._bodyPart = BodyPart.TAIL;
        }
    }




}


export default Segment;