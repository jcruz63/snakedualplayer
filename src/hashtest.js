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
    constructor(sqr, type, name){
        this.sqr = sqr;
        this.type = type;
        this.name = name;
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
    new Segment(new Square(new Point(1, 2)), "head", "snake1"),
    new Segment(new Square(new Point(1, 3)), "body"),
    new Segment(new Square(new Point(1, 4)), "body"),
]

let segmentsTwo = [
    new Segment(new Square(new Point(1, 2)), "head", "snake2"),
    new Segment(new Square(new Point(2, 3)), "body"),
    new Segment(new Square(new Point(2, 4)), "body"),
]

let segments3 = [
    new Segment(new Square(new Point(3, 2)), "head", "snake3"),
    new Segment(new Square(new Point(4, 3)), "body"),
    new Segment(new Square(new Point(3, 4)), "body"),
]


//create two snakes with the segments
let snake1 = new Snake(segmentsOne)
let snake2 = new Snake(segmentsTwo)
let snake3 = new Snake(segments3)


//create the map
const collisionMap = new Map() // [key]: [value], [key]: [value]  | [home]: "some text address" collisionMap.get("home") -> "some text address" | [home]: ["address1", "address2"] collisionMap.get("home")[0] -> address1
// [ajkdhfay788976akhfh -> {x: 1, y: 2}]: [, ]
//foreach snake get its list of points and iterate over them and push them into the map

const snakes = [snake1, snake2, snake3]

snakes.forEach(snake =>{
    snake.segments.forEach(segment => {

        let hashPoint = hash(segment.sqr.topLeft)

        if (collisionMap.has(hashPoint)) {
            collisionMap.get(hashPoint).push(segment)
        } else {
            collisionMap.set(hashPoint, [segment])
        }
    })
})
console.log(collisionMap)


// const point1 = new Point(1, 2);
// const point2 = new Point(1, 2);
// const point3 = new Point(1, 2);
// const point4 = new Point(1, 2);
//
// const list = [point1, point2, point3, point4];
//
// console.log(hash(point1));
// console.log(hash(point2));
// console.log(hash(point3));
//
//
// const map = new Map();
// map.set(hash(point1), ["snake1"])

// (params) => {function body}
// list.forEach((point) => {
//     if (map.has(hash(point))) {
//         map.get(hash(point)).push(point); //[key]: value -> value = list [{point{n}}]  N:1 -> infinity
//     } else {
//         map.set(hash(point), [point]);
//     }
// })

// if(map.has(hash(point1))) {
//

// if(map.has(hash(point2))){
//     list = map.get(hash(point2)) //return list
//     list.push("snake2")
// }

//push list on 89 into map iterate over list

// console.log(map.get(hash(point1)))
// console.log("________________________")
// console.log(map.keys())
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
