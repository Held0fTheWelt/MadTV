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
                    ige.client.obj[8] = new IgeScene2d();


					// Create the main viewport
                    ige.client.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(ige.client.obj[8])
						.drawBounds(false)
						.mount(ige);

                    ige.client.obj[0] = ige.client.loadBackground().mount(ige.client.obj[8]);
                    ige.client.obj[1] = ige.client.loadSkyscraper().mount(ige.client.obj[8]);
                    ige.client.obj[2] = ige.client.loadSkyscraperRooms().mount(ige.client.obj[1]);
                    ige.client.obj[3] = ige.client.loadFloorScene().mount(ige.client.obj[1]);
                    ige.client.obj[4] = new GameElement();
                   // ige.client.obj[4] = ige.client.loadCharacter().mount(ige.client.obj[3]);
                    // Create the UI scene
                    ige.client.obj[5] = new IgeScene2d().depth(2)
                        .mount(ige.client.obj[8]);

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
                // tick Delta - needed for calculations
                var delta = ige.tickDelta;
                // get our characters position
                var characterPos = ige.client.obj[3].obj[4].translate();
                // look if we want to move horizontally
                var moveHorizontal = characterPos.x() - ige.client.obj[7].targetX;
                // look if we want to move vertically
                var moveVertical = characterPos.y() - ige.client.obj[7].targetY;
                // a vertical value between 0 and 100 just wants us to move on the actual floor
                if(moveVertical >= 0 && moveVertical <= 100){
                    // if value <= -4 we want to move the right way
                    if(moveHorizontal <= -4){
                        ige.client.obj[3].obj[4].velocity.x(0.15);
                        ige.client.obj[3].obj[4].animation.select('walkRight');
                    }
                    // if value >= 4 we want to move the left way
                    else if(moveHorizontal >= 4){
                        ige.client.obj[3].obj[4].velocity.x(-0.15);
                        ige.client.obj[3].obj[4].animation.select('walkLeft');
                    }
                    // otherwise let us stop and look in to the front for waiting
                    // for new orders
                    else{
                        ige.client.obj[3].obj[4].velocity.x(0);
                        ige.client.obj[3].obj[4].translateTo(ige.client.obj[7].targetX,6,0);
                        ige.client.obj[3].obj[4].animation.stop();
                        ige.client.obj[3].obj[4].cell(10);
                    }
                }
                // if we need to change floor
                else{
                    console.log(ige.client.obj[7].changeFloor);
                    // if we are left to the elevator lets walk right
                    if(characterPos.x() <= -5){
                        ige.client.obj[3].obj[4].velocity.x(0.15);
                        ige.client.obj[3].obj[4].animation.select('walkRight');
                    }
                    // if we are right to the elevator lets walk left
                    else if(characterPos.x()>= 5){

                        ige.client.obj[3].obj[4].velocity.x(-0.15);
                        ige.client.obj[3].obj[4].animation.select('walkLeft');
                    }
                    // otherwise first let's wait for the elevator
                    // next step in and turn around (step 1), close elevators dorrs (step 2) and start heading (step 3)
                    else{
                        console.log("Ich bin hier");
                        // We are going to the elevator and call it
                        if(ige.client.obj[7].changeFloor == 0){
                            ige.client.obj[3].obj[4].velocity.x(0);
                            ige.client.obj[3].obj[4].translateTo(0,6,0);
                            ige.client.obj[3].obj[4].animation.stop();
                            ige.client.obj[3].obj[4].cell(47);

                            ige.client.obj[7].changeFloor++;
                        }
                        // we wait for the elevator to come
                        else if(ige.client.obj[7].changeFloor == 1){
                            ige.client.obj[7].currentHeading = ige.client.obj[7].currentFloor;
                        }

                        // we open elevators doors
                        else if(ige.client.obj[7].changeFloor == 2){
                            ige.client.obj[3].obj[1].animation.select('open');
                            ige.client.obj[7].count-=delta;;
                            if(ige.client.obj[7].count<=0){
                            //    ige.client.obj[7].count = 150;

                                ige.client.obj[3].obj[1].animation.stop();
                                ige.client.obj[3].obj[1].cell(4);
                                ige.client.obj[7].changeFloor++;

                            }
                        }

                        // now we init turn
                        else if(ige.client.obj[7].changeFloor == 3){
                      //      ige.client.obj[3].obj[4].animation.select('turn');
                            ige.client.obj[3].obj[4].depth(2);
                            ige.client.obj[3].obj[4].unMount();
                            ige.client.obj[3].obj[4].mount(ige.client.obj[3].obj[0]);
                            ige.client.obj[7].changeFloor++;

                        }
                        // and turn
                        else if(ige.client.obj[7].changeFloor == 4){
                      //      ige.client.obj[7].count-=delta;
                        //    if(ige.client.obj[7].count<=0){
                          //      ige.client.obj[7].count = 0;
                      //          ige.client.obj[3].obj[4].animation.stop();
                        //        ige.client.obj[3].obj[4].cell(47);
                            ige.client.obj[7].count = 450;
                            ige.client.obj[7].changeFloor++;
                            //}
                        }
                        // let's close the doors
                        else if(ige.client.obj[7].changeFloor == 5){
                            ige.client.obj[3].obj[1].animation.select('close');
                            ige.client.obj[7].count+=delta;
                            if(ige.client.obj[7].count<=0){

                                ige.client.obj[3].obj[1].animation.stop();
                                ige.client.obj[3].obj[1].cell(1);
                                ige.client.obj[7].changeFloor = 0;
                            }

                        }

                        /*)
                        // elevator is already on this floor
                        if(ige.client.obj[7].currentFloor == ige.client.obj[7].elevatorsFloor){
                            ige.client.obj[3].obj[4].velocity.x(0);
                            ige.client.obj[3].obj[4].translateTo(0,6,0);
                            ige.client.obj[3].obj[4].animation.select('turn');
                        }
                        else{
                            // step 1 stop moving and wait for the elevator
                            // we set currentHeading to the currentFloor
                            ige.client.obj[3].obj[4].velocity.x(0);
                            ige.client.obj[3].obj[4].translateTo(0,6,0);
                            ige.client.obj[3].obj[4].animation.stop();
                            ige.client.obj[3].obj[4].cell(47);
                            ige.client.obj[7].currentHeading = 0;
                        }*/

                    }
                }

                var direction = ige.client.obj[7].currentHeading - ige.client.obj[7].elevatorsFloor;

                if(direction > 0){
                    ige.client.obj[3].obj[0].velocity.y(-0.2);
                } else if (direction < 0){
                    ige.client.obj[3].obj[0].velocity.y(0.2);
                } else {
                    if(ige.client.obj[7].currentFloor != ige.client.obj[7].elevatorsFloor){
                        ige.client.obj[7].changeFloor=2;
                    }
                    ige.client.obj[3].obj[0].velocity.y(0);
                    ige.client.obj[3].obj[0].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);
                }

          /*      if(direction > 0){
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
                    ige.client.obj[0].translateTo(0,ige.client.obj[7].getBackgroundHeight(),0);
                    ige.client.obj[1].translateTo(0,ige.client.obj[7].getSkyScraperHeight(),0);
                    ige.client.obj[3].obj[0].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);
                }*/

                var elevatorpos = ige.client.obj[3].obj[0].translate().y();
                    elevatorpos-= ige.client.obj[7].getFloorsHeight();
                //console.log("Pos: "+elevatorpos);
                if(elevatorpos  >= -2 && elevatorpos <= 2     ){

                    ige.client.obj[7].startHeading = 0;
                    ige.client.obj[7].elevatorsFloor = ige.client.obj[7].currentHeading;

                }

            });
		});
	},
    _mouseUp: function (event) {
        ige.client.obj[7].targetX = ige.input.actionVal('predictedX');
        ige.client.obj[7].targetY = ige.input.actionVal('predictedY')-ige.client.obj[7].getSkyScraperHeight()-ige.client.obj[7].getCurrentHeight()-5;
        console.log(ige.client.obj[7].targetY/100);
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }