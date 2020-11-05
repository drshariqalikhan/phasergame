// import Player from "./player.js";



// export class mainScene{
//     preload(){
//         // this.load.image('coin', 'assets/coin.png');

//         // this.load.image('player','assets/player.png');
//         Player.preload(this);

//     };
//     create(){
//         // this.player = this.physics.add.sprite(100, 100, 'player');

//         // this.coin = this.physics.add.sprite(300, 300, 'coin');
//         // this.arrow = this.input.keyboard.createCursorKeys();
//         this.player = new Player({
//             scene: this,
//             x: 100,
//             y: 100,
//             texture: 'player',

//         });

//         this.add.existing(this.player);


//         // this.add.existing(this.Testplayer);

//         this.player.inputKeys = this.input.keyboard.addKeys({
//             up: Phaser.Input.Keyboard.KeyCodes.UP,
//             down: Phaser.Input.Keyboard.KeyCodes.DOWN,

//             left: Phaser.Input.Keyboard.KeyCodes.LEFT,
//             right: Phaser.Input.Keyboard.KeyCodes.RIGHT,


//         })

//         this.score = 0;
//         // The style of the text 
//         // A lot of options are available, these are the most important ones
//         let style = { font: '20px Arial', fill: '#fff' };

//         // Display the score in the top left corner
//         // Parameters: x position, y position, text, style
//         this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
//     };
//     hit() {
//         // Change the position x and y of the coin randomly
//         // this.coin.x = Phaser.Math.Between(100, 600);
//         // this.coin.y = Phaser.Math.Between(100, 300);
      
//         // Increment the score by 10
//         this.score += 10;
      
//         // Display the updated score on the screen
//         this.scoreText.setText('score: ' + this.score);
//         // Create a new tween 
//             this.tweens.add({
//                 targets: this.player, // on the player 
//                 duration: 200, // for 200ms 
//                 scaleX: 2, // that scale vertically by 20% 
//                 scaleY: 2, // and scale horizontally by 20% 
//                 yoyo: true, // at the end, go back to original scale 
//             });
//       }
//     update(){
//         this.player.update();
//         //         // Handle horizontal movements
//         // if (this.arrow.right.isDown) {
//         //     // If the right arrow is pressed, move to the right
//         //     this.player.x += 3;
//         // } else if (this.arrow.left.isDown) {
//         //     // If the left arrow is pressed, move to the left
//         //     this.player.x -= 3;
//         // } 
  
//         //     // Do the same for vertical movements
//         //     if (this.arrow.down.isDown) {
//         //         this.player.y += 3;
//         //     } else if (this.arrow.up.isDown) {
//         //         this.player.y -= 3;
//         //     } 
                
//         // // If the player is overlapping with the coin
//         // if (this.physics.overlap(this.player, this.coin)) {
//         //     // Call the new hit() method
//         //     this.hit();
//         // }
//         };


// }


// // new Phaser.Game({
// //     width: 700, // Width of the game in pixels
// //     height: 400, // Height of the game in pixels
// //     backgroundColor: '#3498db', // The background color (blue)
// //     scene: mainScene, // The name of the scene we created
// //     physics: { default: 'arcade' }, // The physics engine to use
// //     parent: 'game', // Create the game inside the <div id="game"> 
// // });

import MainScene from './MainScene.js';

const config = {
    type: Phaser.AUTO,
    // width: 700, // Width of the game in pixels
    // height: 400, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: [MainScene],
    scene: [
        MainScene,
    ], // The name of the scene we created
    physics: { default: 'matter' }, // The physics engine to use
    
  };

  
var game = new Phaser.Game(config);


