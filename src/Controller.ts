import Keyset from "./Keyset";

class Controller {
    private _up: string;
    private _down: string;
    private _left: string;
    private _right: string;
    private _direction: string = "center";

    constructor(keyset: Keyset) {
        this._up = keyset.up;
        this._down = keyset.down;
        this._left = keyset.left;
        this._right = keyset.right;
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case this._up: this._direction = 'up'; break;
                case this._down: this._direction = 'down'; break;
                case this._left: this._direction = 'left'; break;
                case this._right: this._direction = 'right'; break;
            }
        });
    }

    get direction(): string {
        return this._direction;
    }

    set direction(value: string) {
        this._direction = value;
    }
}

export default Controller;