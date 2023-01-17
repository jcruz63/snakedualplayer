const hash = require('object-hash');

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

//class player id, hColor, bColor
class Player{
    constructor(id, hColor, bColor) {
        this.id = id;
        this.hColor = hColor;
        this.bColor = bColor;
    }
}
// class segment_nested point, player, part
class Segment_nested{
    constructor(point, player, part) {
        this.point = point;
        this.player = player;
        this.part = part;
    }

    hash(){
        return hash(this.point);
    }
}

// segments same player different points
const p1 = new Player(1, 'red', 'blue');
const s1 = new Segment_nested(new Point(1, 1), p1, "head");
const s2 = new Segment_nested(new Point(2, 2), p1, "body");
const s3 = new Segment_nested(new Point(3, 3), p1, "tail");


class segment_non_nested{
    constructor(x, y, id, hColor, bColor, part) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.hColor = hColor;
        this.bColor = bColor;
        this.part = part;
    }

    hash(){
        return hash({
            x: this.x,
            y: this.y,
        });
    }
}

const s4 = new segment_non_nested(1, 1, 1, 'red', 'blue', "head");
const s5 = new segment_non_nested(2, 2, 1, 'red', 'blue', "body");
const s6 = new segment_non_nested(3, 3, 1, 'red', 'blue', "tail");

