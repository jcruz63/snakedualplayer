import Controller from "./Controller";

class Player {

    private _name: string;
    private _id: number;
    private _score: number;
    private _renderable: Renderable;
    private _controller: Controller;

    constructor(name: string, id: number, renderable: Renderable, controller: Controller) {
        this._name = name;
        this._id = id;
        this._score = 0;
        this._renderable = renderable;
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

    get renderable(): Renderable {
        return this._renderable;
    }

    set renderable(value: Renderable) {
        this._renderable = value;
    }

    get controller(): Controller {
        return this._controller;
    }

    set controller(value: Controller) {
        this._controller = value;
    }
}

export default Player;
