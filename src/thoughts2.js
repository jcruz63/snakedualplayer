const hash = require('object-hash');

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getHash(){
        return hash(this);
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}


class Player{
    constructor(id, headColor, bodyColor) {
        this.id = id;
        this.headColor = headColor;
        this.bodyColor = bodyColor;
    }

    toString(){
        return `Player ${this.id}`
    }
}

class Segment{
    constructor(player, point, part) {
        this.player = player;
        this.point = point;
        this.part = part;
    }

    toString(){
        return `${this.player} ${this.part} at ${this.point}`
    }
}

let listOfSegments = [];

listOfSegments.push(new Segment(new Player(1, "blue", "green"), new Point(2,1), "head"));
listOfSegments.push(new Segment(new Player(2, "blue", "green"), new Point(1,2), "head"));

let playerDirectionMap = new Map();
playerDirectionMap.set(1, "left");
playerDirectionMap.set(2, "up");

console.log(listOfSegments)

//q:what is the time complexity of this?
//a: O(n)
listOfSegments.forEach(segment => {
    switch (playerDirectionMap.get(segment.player.id)) {
        case "right": segment.point.x += 1; break;
        case "left": segment.point.x -= 1; break;
        case "up": segment.point.y -= 1; break;
        case "down": segment.point.y += 1; break;
    }
})
console.log('-------------------')
console.log(listOfSegments)

console.log('-------------------')
console.log("collision map")
const collisionMap = new Map();

//q:what is the time complexity of this?
//a: O(n)
listOfSegments.forEach(segment => {
    let hashValue = segment.point.getHash()

    if(collisionMap.has(hashValue)){
        collisionMap.get(hashValue).push(segment)
    }else{
        collisionMap.set(hashValue, [segment])
    }
})
//q:what is the time complexity of this?
//a: O(n)
collisionMap.forEach(value => {
    console.log(value)
})

//q:what is the time complexity of this file?
//a: O(n)

//q: is there a way to make this faster?
//a: yes, use a quadtree
//q: what is a quadtree?
//a: https://en.wikipedia.org/wiki/Quadtree
//q: what is the time complexity of a quadtree?
//a: O(log n)
//q: how do I implement this a  quadtree?
//a:




