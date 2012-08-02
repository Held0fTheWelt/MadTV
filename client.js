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
                    // if we are left to the elevator lets walk right
                    if(characterPos.x() <= -10){
                        ige.client.obj[3].obj[4].velocity.x(0.15);
                        ige.client.obj[3].obj[4].animation.select('walkRight');
                    }
                    // if we are right to the elevator lets walk left
                    else if(characterPos.x()>= 10){
                        ige.client.obj[3].obj[4].velocity.x(-0.15);
                        ige.client.obj[3].obj[4].animation.select('walkLeft');
                    }
                    // otherwise first let's wait for the elevator
                    // next step in and turn around (step 1), close elevators dorrs (step 2) and start heading (step 3)
                    else{
                        switch(ige.client.obj[7].changeFloor){

                            // We don't need elevator ?!?
                            case 0:
                                break;
                            // We are going to the elevator and call it
                            case 1:
                                ige.client.obj[3].obj[4].velocity.x(0);
                                ige.client.obj[3].obj[4].translateTo(0,6,0);
                                ige.client.obj[3].obj[4].animation.stop();
                                ige.client.obj[3].obj[4].cell(47);

                                ige.client.obj[7].currentHeading = ige.client.obj[7].currentFloor;

                                break;
                            // we open elevators doors
                            case 2:
                                ige.client.obj[3].obj[1].animation.select('open');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                   // stop the animation and set the correct cell
                                    ige.client.obj[3].obj[1].animation.stop();
                                    ige.client.obj[3].obj[1].cell(4);
                                    // count changeFloor Sequence upwards
                                    ige.client.obj[7].changeFloor++;
                                    // reset count for the turn animation
                                    ige.client.obj[7].count = 300;
                                    // unmount character from floorscene and mount it to the elevator
                                    ige.client.obj[3].obj[4].unMount();
                                    ige.client.obj[3].obj[4].mount(ige.client.obj[3].obj[0]);
                                    // reset depth so our character is inside the elevator
                                    ige.client.obj[3].obj[4].depth(2);
                                }
                                break;
                            // now we init turn and count up
                            case 3:
                            ige.client.obj[3].obj[4].animation.select('turn');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                    ige.client.obj[3].obj[4].animation.stop();
                                    ige.client.obj[3].obj[4].cell(10);
                                    ige.client.obj[7].changeFloor++;
                                    // preset count for the close elevator doors animation
                                    ige.client.obj[7].count = 900
                                }

                                break;
                            // let's close the doors
                            case 4:
                                ige.client.obj[3].obj[1].animation.select('close');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                    ige.client.obj[3].obj[1].animation.stop();
                                    ige.client.obj[3].obj[1].cell(1);
                                    ige.client.obj[7].changeFloor++;
                                }
                                break;
                            // and move the elevator upwards
                            case 5:
                                ige.client.obj[7].currentHeading = ige.client.obj[7].currentFloor+(-(Math.floor(ige.client.obj[7].targetY/100))-1);
                                ige.client.obj[7].startHeading = 1;
                                ige.client.obj[7].count = 900;
                                ige.client.obj[7].changeFloor++;
                                break;
                            case 6:
                                ige.client.obj[3].obj[1].animation.select('open');
                                ige.client.obj[7].count-=delta;
                                if(ige.client.obj[7].count<=0){
                                    // stop the animation and set the correct cell
                                    ige.client.obj[3].obj[1].animation.stop();
                                    ige.client.obj[3].obj[1].cell(4);
                                    // unmount character from elevator and mount it to the scene
                                    ige.client.obj[3].obj[4].unMount();
                                    ige.client.obj[3].obj[4].mount(ige.client.obj[3]);
                                    // reset depth so our character is outside the elevator
                                    ige.client.obj[3].obj[4].depth(4);
                                    // set targetY as finished
                                    ige.client.obj[7].targetY = characterPos.y();
                                    // reset translation of character
                                    ige.client.obj[3].obj[4].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);
                                    // count changeFloor Sequence upwards
                                    ige.client.obj[7].changeFloor++;
                                }
                                break;
                        }
                    }
                }

                var direction = ige.client.obj[7].currentHeading - ige.client.obj[7].elevatorsFloor;

                if(direction > 0){
                    ige.client.obj[3].obj[0].velocity.y(-0.2);
                    if(ige.client.obj[7].startHeading == 1){
                        ige.client.obj[0].velocity.y(0.015);
                        ige.client.obj[1].velocity.y(0.15);
                    }
                } else if (direction < 0){
                    ige.client.obj[3].obj[0].velocity.y(0.2);
                    if(ige.client.obj[7].startHeading == 1){
                        ige.client.obj[0].velocity.y(-0.015);
                        ige.client.obj[1].velocity.y(-0.15);
                    }
                } else {
                    if(ige.client.obj[7].currentFloor == ige.client.obj[7].elevatorsFloor
                        && ige.client.obj[7].changeFloor<=1){
                        ige.client.obj[7].changeFloor=2;
                    }
                    ige.client.obj[7].currentFloor = ige.client.obj[7].currentHeading;

                    ige.client.obj[3].obj[0].velocity.y(0);
                    ige.client.obj[3].obj[0].translateTo(0,ige.client.obj[7].getFloorsHeight(),0);

                    ige.client.obj[0].velocity.y(0);
                    ige.client.obj[1].velocity.y(0);

                    ige.client.obj[0].translateTo(0,ige.client.obj[7].getBackgroundHeight(),0);
                    ige.client.obj[1].translateTo(0,ige.client.obj[7].getSkyScraperHeight(),0);
                    ige.client.obj[7].startHeading == 0;

                 /*   if(ige.client.obj[7].changeFloor==5){
                        ige.client.obj[7].changeFloor++;
                    }
*/

                }


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
        //
        //console.log(-(Math.floor(ige.client.obj[7].targetY/100))-1);
        ige.client.obj[7].changeFloor = 1;
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }