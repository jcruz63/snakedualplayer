import Snake from "./Snake";
import Point from "./Point";
import {BodyPart} from "./body-part.enum";

class Segment {
    public point: Point;
    public snake: Snake;
    public color: string;
    public bodyPart: BodyPart;

    constructor(point: Point, snake: Snake, color: string, bodyPart: BodyPart) {
        this.point = point;
        this.snake = snake;
        this.color = color;
        this.bodyPart = bodyPart;
    }
}