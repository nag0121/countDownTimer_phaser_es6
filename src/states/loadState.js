
class load extends Phaser.State {
    preload () {
        this.load.image('layer1','assets/images/layer_foreground.png');
        this.load.image('layer2','assets/images/layer_background.png');
    }
    create () {
        this.state.start('create');
    }
    update (){
        
    }
    
}
export default load;