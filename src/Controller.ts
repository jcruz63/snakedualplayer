class Controller {
    private _up: string;
    private _down: string;
    private _left: string;
    private _right: string;
    private _direction: string = "center";

    constructor(up: string, down: string, left: string, right: string) {
        this._up = up;
        this._down = down;
        this._left = left;
        this._right = right;
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