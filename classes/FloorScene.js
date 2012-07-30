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

        /** Stores the X-Value where we want to ride */
        Object.defineProperty(this, 'pretendedX', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** Stores the Y-Value where we want to ride */
        Object.defineProperty(this, 'pretendedY', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** If 1 Character is Moving */
        Object.defineProperty(this, 'move', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** Stores which floor the elevator is heading */
        Object.defineProperty(this, 'currentHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** Stores which floor the elevator is right now */
        Object.defineProperty(this, 'currentFloor', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** Time counter for animation purpose */
        Object.defineProperty(this, 'count', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });
        /** If 1 the Elevator may move. 0 will stop moving*/
        Object.defineProperty(this, 'startHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue; },
            set: function (newValue) { myValue = newValue; }
        });

        // Just some standards
        this.currentHeading = 0;
        this.currentFloor = 0;
        this.count = 450;
        this.startHeading = 0;
        this.pretendedX = 0;
        this.pretendedY = 0;
        this.move = 0;



        gameTexture[0] = new IgeCellSheet('assets/textures/elevators/elevator.png', 4, 1);
        gameTexture[1] = new IgeTexture('assets/textures/elevators/cart.jpg');


        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

            nodeSSElevator.obj[0] = new Elevator();
            // Setup the entity
            nodeSSElevator.obj[0].addComponent(IgeAnimationComponent)
                .addComponent(IgeVelocityComponent)
                .animation.define('opened', [4, 4, 4, 4], 8, -1)
                .animation.define('closed', [1, 1, 1, 1], 8, -1)
                .animation.define('open', [1, 2, 3, 4], 8, -1)
                .animation.define('close', [4, 3, 2, 1], 8, -1)
                .cell(1)
                .depth(3)
                .texture(gameTexture[0])
                .dimensionsFromCell()
                .mount(nodeSSElevator);

            // Create elevator cart
            nodeSSElevator.obj[1] = new GameElement()
                .id('cart')
                .depth(1)
                .width(75)
                .height(89)
                .texture(gameTexture[1])
                .mount(nodeSSElevator);
        });


    }

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}