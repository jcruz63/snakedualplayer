class Controller {
    private _up: string;
    private _down: string;
    private _left: string;
    private _right: string;
    private _renderable: Renderable | null;
    private _direction: string = "Alt";
    private _tileSize: number;

    constructor(up: string, down: string, left: string, right: string, renderable: Renderable | null, tileSize: number) {
        this._up = up;
        this._down = down;
        this._left = left;
        this._right = right;
        this._renderable = renderable;
        this._tileSize = tileSize;
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case this._up: this._direction = 'up'; break;
                case this._down: this._direction = 'down'; break;
                case this._left: this._direction = 'left'; break;
                case this._right: this._direction = 'right'; break;
            }
        });
    }
    update() {
        if (this._renderable) {
            switch (this._direction) {
                case 'up': this._renderable.y -= this._tileSize; break;
                case 'down': this._renderable.y += this._tileSize; break;
                case 'left': this._renderable.x -= this._tileSize; break;
                case 'right': this._renderable.x += this._tileSize; break;
            }
        }
    }
}

export default Controller;