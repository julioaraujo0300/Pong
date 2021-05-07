import MainScene from './scene.js'

const config = {
    width: 600,
    height: 400,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    scene: [MainScene],
    backgroundColor: '#000',
    pixelArt: true
}

new Phaser.Game(config);