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

class Square { //this would be render-able
    constructor(topLeft, width, height) {
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
    }

    //render()

    toString() {
        return `Square with top left at ${this.topLeft} and width ${this.width} and height ${this.height}`;
    }
}

class Segment{
    constructor(sqr, type){
        this.sqr = sqr;
        this.type = type;
    }

    toString(){
        return `Segment with ${this.sqr} and type ${this.type}`;
    }
}

class Snake{
    constructor(segments){
        this.segments = segments;
    }

    addSegment(){
        this.segments.push(new Segment(new Square(new Point(0,0), 0, 0), 0));
    }

    getPoints(){
        let points = [];
        this.segments.forEach((segment) => {
            points.push(segment.sqr.topLeft);
        });
        return points;
    }

    toString(){
        return `Snake with ${this.segments}`;
    }
}

//create two list of segments 3 segments each one head and body
let segmentsOne = [
    new Segment(new Square(new Point(1, 2)), "head"),
    new Segment(new Square(new Point(1, 3)), "body"),
    new Segment(new Square(new Point(1, 4)), "body"),
]

let segmentsTwo = [
    new Segment(new Square(new Point(2, 2)), "head"),
    new Segment(new Square(new Point(2, 3)), "body"),
    new Segment(new Square(new Point(2, 4)), "body"),
]


//create two snakes with the segments
let snake1 = new Snake(segmentsOne)
let snake2 = new Snake(segmentsTwo)
//create the map
const collisionMap = new Map()
//foreach snake get its list of points and iterate over them and push them into the map

// const point1 = new Point(1, 2);
// const point2 = new Point(1, 2);
// const point3 = new Point(2, 2);
// const point4 = new Point(1, 3);
//
// const list = [point1, point2, point3, point4];
//
// // console.log(hash(point1));
// // console.log(hash(point2));
//
//
// const collisionMap = new Map();
//
// list.forEach((item) => {
//     const hashValue = hash(item);
//     if (collisionMap.has(hashValue)) {
//         const collisionList = collisionMap.get(hashValue);
//         collisionList.push(item);
//     } else {
//         collisionMap.set(hashValue, [item]);
//     }
// })
//
// console.log(collisionMap);
