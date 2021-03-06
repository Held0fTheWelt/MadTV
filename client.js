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
        gameTexture[1] = new IgeTexture('assets/textures/bottoms/bottomLeft.jpg');
        gameTexture[2] = new IgeTexture('assets/textures/bottoms/bottomRight.jpg');

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

                    // Create tv scene
                    ige.client.obj[7] = new GameElement()
                        .id('tv')
                        .depth(1)
                        .width(300)
                        .height(150)
                        .translateTo(-300,0,0)
                        .texture(gameTexture[1])
                        .mount(ige.client.obj[6]);

                    // Create couch scene
                    ige.client.obj[8] = new GameElement()
                        .id('couch')
                        .depth(1)
                        .width(300)
                        .height(150)
                        .translateTo(300,0,0)
                        .texture(gameTexture[2])
                        .mount(ige.client.obj[6]);

                    ige.client.obj[7] = new StateMachine();

                    // Setup some actions and map them to inputs
                    ige.input.mapAction('predictedX', ige.input.mouse.x);
                    ige.input.mapAction('predictedY', ige.input.mouse.y);
				}
			});

            ige.addBehaviour("tick", function () {

                // tick Delta - needed for calculations
                var delta = ige.tickDelta;
                // let's call the elevator !
                if(ige.client.obj[7].currentHeading!=ige.client.obj[7].currentFloor){
                    switch (ige.client.obj[7].changeFloor){
                        // We don't need elevator ?!?
                        case 0:
                            break;
                        // We are going to the elevator and call it
                        case 1:
                            var translate = ige.client.obj[3].obj[4].translate();
                            if(translate.x() == 0){
                                // Let's look to the elevator
                                ige.client.obj[3].obj[4].cell(46);
                                // and call it
                                ige.client.obj[7].elevatorHeading = ige.client.obj[7].currentFloor;
                                ige.client.obj[7].changeFloor++;
                            }
                            break;
                        // Let's wait for the elevator
                        case 2:
                            var translate = ige.client.obj[3].obj[0].translate();
                            if(translate.y() == ige.client.obj[7].getCurrentHeight()){
                                // the elevator is here ! Let's open it !
                                ige.client.obj[3].obj[1].animation.select('open');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                    // stop the animation and set the correct cell
                                    ige.client.obj[3].obj[1].animation.stop();
                                    ige.client.obj[3].obj[1].cell(4);
                                    // Move to the next state
                                    ige.client.obj[7].changeFloor++;
                                }
                            }
                            break;
                        // Let's "mount" in and turn !
                        case 3:
                            // unmount character from floorscene and mount it to the elevator
                            ige.client.obj[3].obj[4].unMount();
                            // on the elevatorsNode we need to be at the origin
                            // 6 is standard Y for the character, 3 will make it be a bit in the background
                            ige.client.obj[3].obj[4].translateTo(0,3,0);
                            // mount to the elevator
                            ige.client.obj[3].obj[4].mount(ige.client.obj[3].obj[0]);
                            // reset depth so our character is inside the elevator
                            ige.client.obj[3].obj[4].depth(2);
                            // reset count for the turn animation
                            ige.client.obj[7].count = 300;
                            // Move to the next state
                            ige.client.obj[7].changeFloor++;
                            break;
                        case 4:
                            ige.client.obj[3].obj[4].animation.select('turn');
                            ige.client.obj[7].count-=delta;
                            if(ige.client.obj[7].count<=0){
                                ige.client.obj[3].obj[4].animation.stop();
                                ige.client.obj[3].obj[4].cell(10);
                                // preset count for the close elevator doors animation
                                ige.client.obj[7].count = 450
                                // Move to the next state
                                ige.client.obj[7].changeFloor++;
                            }
                            break;
                        // let's close the doors
                        case 5:
                            ige.client.obj[3].obj[1].animation.select('close');
                            ige.client.obj[7].count-=delta;
                            if(ige.client.obj[7].count<=0){
                                ige.client.obj[3].obj[1].animation.stop();
                                ige.client.obj[3].obj[1].cell(1);
                                ige.client.obj[7].changeFloor++;
                            }
                            break;
                        // and move the elevator upwards
                        case 6:
                            ige.client.obj[7].elevatorHeading = ige.client.obj[7].currentHeading;
                            ige.client.obj[7].startHeading = 1;
                            // set the count for the next animation
                            ige.client.obj[7].count = 450;
                            ige.client.obj[7].changeFloor++;
                            break;
                        // when the elevator gets where he wants to be
                        case 7:
                            var translate = ige.client.obj[3].obj[0].translate();
                            if(translate.y() == ige.client.obj[7].getFloorsHeight()){
                                //open it
                                ige.client.obj[3].obj[1].animation.select('open');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                    // stop the animation and set the correct cell
                                    ige.client.obj[3].obj[1].animation.stop();
                                    ige.client.obj[3].obj[1].cell(4);
                                    // set our currentFloor where we headed to
                                    ige.client.obj[7].currentFloor = ige.client.obj[7].elevatorHeading;
                                    // unmount character from elevator and mount it to the scene
                                    ige.client.obj[3].obj[4].unMount();
                                    ige.client.obj[3].obj[4].mount(ige.client.obj[3]);
                                    // also we need to reset the translation on the other node
                                    ige.client.obj[3].obj[4].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);
                                    // reset depth so our character is outside the elevator
                                    ige.client.obj[3].obj[4].depth(4);
                                    // and let's move where we wanted to move
                                    ige.client.obj[3].obj[4].walkTo(
                                        ige.client.obj[7].targetX,
                                        ige.client.obj[7].getCurrentHeight()+6
                                    );
                                    // the change floor maneuver is over ! yeah !
                                    ige.client.obj[7].changeFloor = 0;
                                }
                            }
                            break;
                    }
                }

                var direction = ige.client.obj[7].elevatorHeading - ige.client.obj[7].elevatorsFloor;

                if(direction > 0){
                    ige.client.obj[3].obj[0].velocity.y(-0.2);
                    if(ige.client.obj[7].startHeading == 1 && ige.client.obj[3].obj[0].translate().y() <= -201){
                        ige.client.obj[0].velocity.y(0.015);
                        ige.client.obj[1].velocity.y(0.15);
                    }
                } else if (direction < 0){
                    ige.client.obj[3].obj[0].velocity.y(0.2);
                    if(ige.client.obj[7].startHeading == 1){
                        if(ige.client.obj[3].obj[0].translate().y() >= -200){
                            ige.client.obj[0].velocity.y(0);
                            ige.client.obj[1].velocity.y(0);
                        }else{
                            ige.client.obj[0].velocity.y(-0.015);
                            ige.client.obj[1].velocity.y(-0.15);
                        }
                    }


                } else {
                    if(ige.client.obj[7].startHeading == 1){
                        ige.client.obj[7].currentFloor= ige.client.obj[7].elevatorHeading;
                    }

                    ige.client.obj[7].elevatorsFloor= ige.client.obj[7].elevatorHeading;

                    ige.client.obj[3].obj[0].velocity.y(0);
                    ige.client.obj[3].obj[0].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);

                    ige.client.obj[0].velocity.y(0);
                    ige.client.obj[1].velocity.y(0);

                    ige.client.obj[0].translateTo(0,ige.client.obj[7].getBackgroundHeight(),0);
                    ige.client.obj[1].translateTo(0,ige.client.obj[7].getSkyScraperHeight(),0);
                }

                var elevatorpos = ige.client.obj[3].obj[0].translate().y();
                    elevatorpos-= ige.client.obj[7].getFloorsHeight();

                if(elevatorpos  >= -2 && elevatorpos <= 2){
                    ige.client.obj[7].startHeading = 0;
                    ige.client.obj[7].elevatorsFloor = ige.client.obj[7].elevatorHeading;

                }

            });
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }