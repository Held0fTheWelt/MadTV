/**
 * User: Yves Tanas
 * Date: 30.07.12
 * Time: 20:21
 * The floorscene managing the elevator
 */
var FloorScene = IgeEntity.extend({
    classId:'FloorScene',

    init:function () {

        this._super();
        // Load our textures
        var nodeSSElevator = this;
        var gameTexture = [];

        this.obj = [];

        gameTexture[0] = new IgeCellSheet('assets/textures/elevators/elevator.png', 4, 1);
        gameTexture[1] = new IgeTexture('assets/textures/elevators/cart.jpg');


        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

            // Create elevator cart
            nodeSSElevator.obj[0] = new GameElement()
                .id('cart')
                .depth(1)
                .width(75)
                .height(89)
                .texture(gameTexture[1])
                .addComponent(IgeVelocityComponent)
                .mount(nodeSSElevator);


        nodeSSElevator.obj[1] = new GameElement();
        // Setup the entity
        nodeSSElevator.obj[1].addComponent(IgeAnimationComponent)

            .animation.define('open', [1, 2, 3, 4], 8, -1)
            .animation.define('close', [4, 3, 2, 1], 8, -1)
            .cell(1)
            .depth(3)
            .texture(gameTexture[0])
            .width(75)
            .height(89)
            .mount(nodeSSElevator.obj[0]);

        });
    }

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}