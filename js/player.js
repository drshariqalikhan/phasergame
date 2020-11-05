export default class Player extends Phaser.GameObjects.Sprite{
    constructor(data){
        let {scene,x,y,texture,frame} = data;
        super(scene,x,y,texture,frame);

        this.scene.add.existing(this);


    }

    static preload(scene){
        scene.load.image('player','assets/player.png');
    }

    update(){
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
                 // Handle horizontal movements
                 if (this.arrow.right.isDown) {
                     
                    // If the right arrow is pressed, move to the right
                    playerVelocity.x += 3;
                } else if (this.arrow.left.isDown) {
                    // If the left arrow is pressed, move to the left
                    playerVelocity.x -= 3;
                } 
          
                    // Do the same for vertical movements
                    if (this.arrow.down.isDown) {
                        playerVelocity.y += 3;
                    } else if (this.arrow.up.isDown) {
                        playerVelocity.y -= 3;
                    } 

         this.setVelocity(playerVelocity.x,playerVelocity.y);    
                        
    }

}