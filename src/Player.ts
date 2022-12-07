import Controller from "./Controller";

class Player {

    private _name: string;
    private _id: number;
    private _score: number;
    private _snake: Renderable | null;
    private _controller: Controller;

    constructor(name: string, id: number, snake: Renderable | null, controller: Controller) {
        this._name = name;
        this._id = id;
        this._score = 0;
        this._snake = snake;
        this._controller = controller;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get snake(): Renderable | null {
        return this._snake;
    }

    set snake(value: Renderable | null) {
        this._snake = value;
    }

    get controller(): Controller {
        return this._controller;
    }

    set controller(value: Controller) {
        this._controller = value;
    }


    update() {
        let direction = this._controller.direction;


        if (this._snake) {
            switch (direction) {
                case 'up': this._snake.y -= this._snake.width; break;
                case 'down': this._snake.y += this._snake.width; break;
                case 'left': this._snake.x -= this._snake.width; break;
                case 'right': this._snake.x += this._snake.width; break;
            }
        }

    }
}

export default Player;
