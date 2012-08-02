/**
 * User: Yves Tanas
 * Date: 30.07.12
 * Time: 20:21
 * The floorscene managing the elevator
 */
var FloorScene = IgeEntity.extend({
    classId:'FloorScene',
    loadCharacter: function(){
        return new Character()
            .depth(2)
            .translateTo(0, 5, 0);
     //       .addComponent(PlayerComponent)
            //.setType(6);

    },
    init:function () {

        this._super();
        // Load our textures
        var floorscene = this;
        var gameTexture = [];

        this.obj = [];

        gameTexture[0] = new IgeCellSheet('assets/textures/elevators/elevator.png', 4, 1);
        gameTexture[1] = new IgeTexture('assets/textures/elevators/cart.jpg');
        gameTexture[2] = new IgeCellSheet('assets/textures/sprites/vx_chara02_c.png', 12, 8);

        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

            // Create elevator cart
            floorscene.obj[0] = new GameElement()
                .id('cart')
                .depth(1)
                .width(75)
                .height(89)
                .addComponent(IgeVelocityComponent)
                .texture(gameTexture[1])
                .mount(floorscene);


        floorscene.obj[1] = new GameElement();
        // Setup the entity
        floorscene.obj[1].addComponent(IgeAnimationComponent)

            .animation.define('open', [1, 2, 3, 4], 8, -1)
            .animation.define('close', [4, 3, 2, 1], 8, -1)
            .cell(1)
            .depth(3)
            .texture(gameTexture[0])
            .width(75)
            .height(89)
            .mount(floorscene.obj[0]);


        floorscene.obj[4] =  new GameElement();

        floorscene.obj[4].addComponent(IgeAnimationComponent)
            .addComponent(IgeVelocityComponent)
            .animation.define('walkDown', [10, 11, 12, 11], 8, -1)
            .animation.define('walkLeft', [22, 23, 24, 23], 8, -1)
            .animation.define('walkRight', [34, 35, 36, 35], 8, -1)
            .animation.define('walkUp', [46, 47, 48, 47], 8, -1)
            .cell(10)
            .depth(4)
            .texture(gameTexture[2])
            .width(50)
            .height(90)
            .translateTo(0, 5, 0)
            .mount(floorscene);

          //  floorscene.obj[4] = floorscene.loadCharacter().mount(floorscene.obj[0]);
        });

    }

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}