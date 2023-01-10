const hash = require('object-hash');

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Snake{
    constructor(name, headColor, bodyColor) {
        this.name = name;
        this.headColor = headColor;
        this.bodyColor = bodyColor;
    }
}


class Segment{
    constructor(snake, point, part) {
        this.snake = snake;
        this.point = point;
        this.part = part;
    }
}


const p1 = new Snake("Player 1", "blue", "green")
const p2 = new Snake("Player 2", "red", "orange")


const listOfSegments = [
    new Segment(p1, new Point(1,1), "head"),
    new Segment(p1, new Point(1,2), "body"),
    new Segment(p1, new Point(1,3), "body"),
    new Segment(p2, new Point(1,1), "head"),
    new Segment(p2, new Point(2,1), "body"),
    new Segment(p2, new Point(3,1), "body"),
]

const collisionMap = new Map();

listOfSegments.forEach(segment => {
    let hashValue = hash(segment.point)

    if(collisionMap.has(hashValue)){
        collisionMap.get(hashValue).push(segment)
    }else{
        collisionMap.set(hashValue, [segment])
    }
})

collisionMap.forEach(value => {
    console.log(value)
})
