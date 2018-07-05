// import Phaser from 'phaser-ce'
import load from './states/loadState.js'
import CreateState from './states/createstate.js'

class Game extends Phaser.Game {

    constructor() {
        super(640, 360, Phaser.AUTO);

        this.state.add('load', load, false);
        this.state.add('create', CreateState, false);

        this.state.start('load');
    }

}
new Game();