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



let game_map = new Map();

const length = 10;
const width = 10;
// n = length * width = O(n^2) = O(n *m)
for (let i = 0; i < width; i++) {
    for (let j = 0; j < length; j++) {
        game_map.set(hash(new Point(i, j)), new Map())
    }
}

const createPlayer = ( name, headColor, bodyColor, x, y) => {
    let player = new Snake(name, headColor, bodyColor);
    let head = new Segment(player, new Point(x, y), "head");
    let body = new Segment(player, new Point(x, y + 1), "body");
    let tail = new Segment(player, new Point(x, y + 2), "body");
    return [head, body, tail];
}

let players = [createPlayer("Player 1", "blue", "green", 1, 1), createPlayer("Player 2", "red", "orange", 3, 3)];

//O(players * segments)
const initPlayer = (map, players) => {

    players.forEach(player => {
        player.forEach(segment => {
            map.get(segment.point.getHash()).set(segment.snake.name, segment);
        })
    })

}

initPlayer(game_map, players);

console.log(game_map);
//   '03140c8680c78e094530d7b86e660633502013aa' => Map(1) {
//     'Player 1' => Segment { snake: [Snake], point: [Point], part: 'head' }
//   },

// O(n) + O(1) + O(1) => O(n)
//per each player O(n^2)
const movePlayerX = (map, player) => {
    // O(1) + O(1)
    player.forEach(segment => {
        map.get(segment.point.getHash()).pop();
    })
    //O(n)
    player.forEach(segment => {
        segment.point.x += 1;
        map.get(segment.point.getHash()).push(segment);
    })
}

const movePlayerY = (map, player) => {
    player.forEach(segment => {
        map.get(segment.point.getHash()).pop();
    })
    player.forEach(segment => {
        segment.point.y += 1;
        map.get(segment.point.getHash()).push(segment);
    })
}




const collisionCheck = (map) => {
    map.forEach((value, key) => {
        if(value.length > 1){
            console.log(value);
        }})
}

// console.log('_____________________')
// movePlayerX(game_map, players[0]);
// collisionCheck(game_map);
// console.log('_____________________')
// movePlayerX(game_map, players[0]);
// collisionCheck(game_map);
// console.log('_____________________')
// movePlayerY(game_map, players[0]);
// collisionCheck(game_map);
// console.log('_____________________')
// movePlayerY(game_map, players[0]);
// collisionCheck(game_map);
// console.log('_____________________')

