export default class MainScene extends Phaser.Scene{



  preoad(){
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('background', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');

 };

 create(){
     this.add.image(400,300,'background');

 };

 update(){};

}