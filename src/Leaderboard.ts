class Leaderboard {
    private _Players: number;
    private _scores: number = 0;


    constructor(Players: number, scores: number) {
        this._Players = Players;
        this._scores = scores;
    }


    get Players(): number {
        return this._Players;
    }

    set Players(value: number) {
        this._Players = value;
    }

    get scores(): number {
        return this._scores;
    }

    set scores(value: number) {
        this._scores = value;
    }
}

export default Leaderboard;