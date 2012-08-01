var Client = IgeClass.extend({
	classId: 'Client',

    loadBackground:function () {
        // Create our background
        return new GameElement()
            .id('background')
            .depth(0)
            .width(1200)
            .height(2250)
            .texture(gameTexture[0])
            .translateTo(0, -140, 0)
            .addComponent(IgeVelocityComponent);
    },
    loadSkyscraper: function () {
        // Create the Skyscraper
        return new Skyscraper().depth(1)
            .translateTo(0, 310, 0)
            .addComponent(IgeVelocityComponent);
    },
    loadSkyscraperRooms: function() {
        // Create the Skyscraper
        return new Rooms().depth(1);
    },
    loadFloorScene: function() {
        return new FloorScene().depth(2).translateTo(2, -47, 0);
    },
    loadCharacter: function(){
        return new Character().depth(2).translateTo(0, 5, 0)
            .addComponent(PlayerComponent)
            .setType(6);

    },
    getFloorsHeight: function(floornumber){
        switch(floornumber){
            case 0: return 0;
                break;
            case 1: return -100;
                break;
            case 2: return -200;
                break;
            case 3: return -300;
                break;
            case 4: return -400;
                break;
            case 5: return -500;
                break;
            case 6: return -600;
                break;
            case 7: return -700;
                break;
            case 8: return -800;
                break;
            case 9: return -900;
                break;
            case 10: return -1000;
                break;
            case 11: return -1100;
                break;
            case 12: return -1200;
                break;
        }
    },
	init: function () {
		// Load our textures
        ige.client = this;
		gameTexture = [];

		this.obj = [];
		gameTexture[0] = new IgeTexture('assets/textures/backgrounds/background.jpg');

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the scene
                    ige.client.scene1 = new IgeScene2d();
					

                    ige.client.states = new StateMachine();

					// Create the main viewport
                    ige.client.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(ige.client.scene1)
						.drawBounds(false)
						.mount(ige);

                    ige.client.obj[0] = ige.client.loadBackground().mount(ige.client.scene1);
                    ige.client.obj[1] = ige.client.loadSkyscraper().mount(ige.client.scene1);
                    ige.client.obj[2] = ige.client.loadSkyscraperRooms().mount(ige.client.obj[1]);
                    ige.client.obj[3] = ige.client.loadFloorScene().mount(ige.client.obj[1]);
                    ige.client.obj[4] = ige.client.loadCharacter().mount(ige.client.obj[3]);
                    // Create the UI scene
                    ige.client.obj[5] = new IgeScene2d().depth(2)
                        .mount(ige.client.scene1);

                    ige.client.obj[6] = new IgeUiEntity()
                        .id('bottomBar')
                        .depth(1)
                        .backgroundColor('#474747')
                        .left(0)
                        .bottom(0)
                        .width('100%')
                        .height(150)
                        .borderTopColor('#666666')
                        .borderTopWidth(1)
                        .backgroundPosition(0, 0)
                        .mouseOver(function () {this.backgroundColor('#49ceff'); })
                        .mouseOut(function () {this.backgroundColor('#474747'); })
                        .mount(ige.client.obj[5]);
				}
			});

            ige.addBehaviour("tick", function () {
                console.log(ige.client.states.currentFloor);
                var y = ige.client.states.currentFloor;
            /*    switch (y) {
                    case 0: ige.client.obj[3].currentHeading = 1;

                        break;
                    case 1: ige.client.obj[3].currentHeading = 2;
                        break;
                    case 2: ige.client.obj[3].currentHeading = 3;
                        break;
                    case 3: ige.client.obj[3].currentHeading = 4;
                        break;
                    case 4: ige.client.obj[3].currentHeading = 5;
                        break;
                    case 5: ige.client.obj[3].currentHeading = 6;
                        break;
                    case 6: ige.client.obj[3].currentHeading = 7;
                        break;
                    case 7: ige.client.obj[3].currentHeading = 8;
                        break;
                    case 8: ige.client.obj[3].currentHeading = 9;
                        break;
                    case 9: ige.client.obj[3].currentHeading = 10;
                        break;
                    case 10: ige.client.obj[3].currentHeading = 11;
                        break;
                    case 11: ige.client.obj[3].currentHeading = 12;
                        break;
                    case 12: ige.client.obj[3].currentHeading = 0;
                        break;
                }*/
                var direction = ige.client.states.currentHeading - ige.client.states.currentFloor;

                if(direction > 0){
                    ige.client.obj[0].velocity.y(0.015);
                    ige.client.obj[1].velocity.y(0.15);
                    ige.client.obj[3].obj[0].velocity.y(-0.25);
                } else if (direction < 0){
                    ige.client.obj[0].velocity.y(-0.015);
                    ige.client.obj[1].velocity.y(-0.15);
                    ige.client.obj[3].obj[0].velocity.y(0.25);
                } else {
                    ige.client.obj[0].velocity.y(0);
                    ige.client.obj[1].velocity.y(0);
                    ige.client.obj[3].obj[0].velocity.y(0);
                }

                var elevatorpos = ige.client.obj[3].obj[0].translate().y();
                elevatorpos-=ige.client.getFloorsHeight(ige.client.states.currentHeading);

                if(elevatorpos  >= -10 && elevatorpos <= 10){
                    ige.client.states.currentFloor = ige.client.states.currentHeading;
                }

            });
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }