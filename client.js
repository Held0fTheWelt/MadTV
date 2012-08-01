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
        return new Skyscraper()
            .depth(1)
            .translateTo(0, 310, 0)
            .addComponent(IgeVelocityComponent);
    },
    loadSkyscraperRooms: function() {
        // Create the Skyscraper
        return new Rooms()
            .depth(1);
    },
    loadFloorScene: function() {
        return new FloorScene()
            .depth(2)
            .translateTo(2, -47, 0);
    },
    /*
    loadCharacter: function(){
        return new Character()
            .depth(1)
            .translateTo(0, 5, 0)
            .addComponent(PlayerComponent)
            .setType(6);

    },
    */
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
                    ige.client.obj[4] = new GameElement();
                   // ige.client.obj[4] = ige.client.loadCharacter().mount(ige.client.obj[3]);
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

                    ige.client.obj[7] = new StateMachine();

                    // Setup some actions and map them to inputs
                    ige.input.mapAction('predictedX', ige.input.mouse.x);
                    ige.input.mapAction('predictedY', ige.input.mouse.y);

                    // Listen for the mouse up event
                    ige.input.on('mouseUp', function (event) { ige.client._mouseUp(event); });
				}
			});

            ige.addBehaviour("tick", function () {

                var characterPos = ige.client.obj[3].obj[4].translate();
                var moveHorizontal = characterPos.x() - ige.client.obj[7].targetX;
                var moveVertical = characterPos.y() - ige.client.obj[7].targetY;
                console.log(moveVertical);
                if(moveVertical >= 0 && moveVertical <= 100){

                    if(moveHorizontal <= -4){
                        ige.client.obj[3].obj[4].velocity.x(0.15);
                        ige.client.obj[3].obj[4].animation.select('walkRight');
                    }else if(moveHorizontal >= 4){
                        ige.client.obj[3].obj[4].velocity.x(-0.15);
                        ige.client.obj[3].obj[4].animation.select('walkLeft');
                    }else{
                        ige.client.obj[3].obj[4].velocity.x(0);
                        ige.client.obj[3].obj[4].translateTo(ige.client.obj[7].targetX,6,0);
                        ige.client.obj[3].obj[4].animation.stop();
                        ige.client.obj[3].obj[4].cell(10);
                    }
                } else{
                    if(characterPos.x() <= -1){
                        ige.client.obj[3].obj[4].velocity.x(0.15);
                        ige.client.obj[3].obj[4].animation.select('walkRight');
                    }else if(characterPos.x()>= 1){
                        ige.client.obj[3].obj[4].velocity.x(-0.15);
                        ige.client.obj[3].obj[4].animation.select('walkLeft');
                    } else{
                        ige.client.obj[3].obj[4].velocity.x(0);
                        ige.client.obj[3].obj[4].translateTo(0,6,0);
                        ige.client.obj[3].obj[4].animation.stop();
                        ige.client.obj[3].obj[4].cell(47);
                        ige.client.obj[3].obj[4].depth(4);
                    }
                }

                var y = ige.client.obj[7].currentFloor;
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
                var direction = ige.client.obj[7].currentHeading - ige.client.obj[7].currentFloor;

                if(direction > 0){
                    ige.client.obj[0].velocity.y(0.015);
                    ige.client.obj[1].velocity.y(0.15);
                    ige.client.obj[3].obj[0].velocity.y(-0.2);
                } else if (direction < 0){
                    ige.client.obj[0].velocity.y(-0.015);
                    ige.client.obj[1].velocity.y(-0.15);
                    ige.client.obj[3].obj[0].velocity.y(0.2);
                } else {
                    ige.client.obj[0].velocity.y(0);
                    ige.client.obj[1].velocity.y(0);
                    ige.client.obj[3].obj[0].velocity.y(0);
                }

                var elevatorpos = ige.client.obj[3].obj[0].translate().y();
                    elevatorpos-= ige.client.obj[7].getFloorsHeight();
                //console.log("Pos: "+elevatorpos);
                if(elevatorpos  >= -2 && elevatorpos <= 2     ){

                    ige.client.obj[7].startHeading = 0;
                    ige.client.obj[7].currentFloor = ige.client.obj[7].currentHeading;

                    ige.client.obj[0].translateTo(0,ige.client.obj[7].getBackgroundHeight(),0);
                    ige.client.obj[1].translateTo(0,ige.client.obj[7].getSkyScraperHeight(),0);
                    ige.client.obj[3].obj[0].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);


                    /*                    ige.client.obj[3].obj[4].unMount();
                    ige.client.obj[3].obj[4].mount(ige.client.scene1);
                    ige.client.obj[3].obj[4].translateTo(0,-150,0);
                    ige.client.obj[3].obj[0].translateTo(0,-100,0);
                    ige.client.obj[3].obj[0].depth(1);
                    ige.client.obj[3].obj[4].depth(4);*/
                }

            });
		});
	},
    _mouseUp: function (event) {
        ige.client.obj[7].targetX = ige.input.actionVal('predictedX');
        ige.client.obj[7].targetY = ige.input.actionVal('predictedY')-ige.client.obj[7].getSkyScraperHeight()-ige.client.obj[7].getFloorsHeight()-5;
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }