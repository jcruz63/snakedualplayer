import Player from "./Player";
import Point from "./Point";
import {BodyPart} from "./body-part.enum";

class Segment {
    private _point: Point;
    private _snake: Player;
    private _headColor: string;
    private _bodyColor: string;
    private _bodyPart: BodyPart;
    private _id: number;

    constructor(point: Point, snake: Player, headColor: string, bodyColor: string, bodyPart: BodyPart, id: number) {
        this._point = point;
        this._snake = snake;
        this._headColor = headColor;
        this._bodyColor = bodyColor;
        this._bodyPart = bodyPart;
        this._id = id;
    }


    get point(): Point {
        return this._point;
    }

    set point(value: Point) {
        this._point = value;
    }

    get snake(): Player {
        return this._snake;
    }

    set snake(value: Player) {
        this._snake = value;
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
}

export default Segment;