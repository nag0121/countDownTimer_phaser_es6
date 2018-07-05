let graphics,timer,total=30;
let x = 270;

class CreateState extends Phaser.State {

    create () {
//adding assets to the state
        var foreground = this.add.sprite(100, 100, 'layer1');
        foreground.scale.setTo(0.5);
        foreground.anchor.setTo(0.5);

        var background = this.add.sprite(100, 100, 'layer2');
        background.scale.setTo(0.5);
        background.anchor.setTo(0.5);
//displaying countdown timer    
        this.text = this.add.text(100,100,{
            fill:'#002100'
        });
        this.text.anchor.setTo(0.5);
//creating timer function
        timer = this.time.create(true);

//  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, this.counter, this);
//adding graphics to game
        graphics = this.add.graphics(0,0);

        graphics.lineStyle(12, 0x818181);

        this.counter(); 
//  Start the timer running - this is important!
//  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();
        
        
    }    

    update() {
        this.text.text = total;
       
    }
//counter function    
    counter(){
        if (total >= 1) {

            x = x - (360/30);
    
            graphics.arc(100, 100, 78, this.math.degToRad(270),this.math.degToRad(x), true);
    
            graphics.endFill();
    
            total--;
              
        }      
    }    
}
export default CreateState;