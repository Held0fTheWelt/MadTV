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
            .id("skyscraper")
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
            .id("floorscene")
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
        gameTexture[3] = new IgeTexture('assets/textures/underconstruction.png');

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the main scene
                    ige.client.obj[0] = new IgeScene2d()
                        .id('gamescene');

                    // this scene will hold the skyscraper
                    ige.client.obj[1] = new IgeScene2d()
                        .id('skyscraperscene')
                        .mount(ige.$('gamescene'));


					// Create the main viewport
                    ige.client.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(ige.$('gamescene'))
						.drawBounds(false)
						.mount(ige);

                    ige.client.obj[2] = ige.client.loadBackground().mount(ige.$('skyscraperscene'));
                    ige.client.obj[3] = ige.client.loadSkyscraper().mount(ige.$('skyscraperscene'));
                    ige.client.obj[4] = ige.client.loadSkyscraperRooms().mount(ige.$('skyscraper'));
                    ige.client.obj[5] = ige.client.loadFloorScene().mount(ige.$('skyscraper'));

                    // Create the UI scene
                    ige.client.obj[6] = new IgeScene2d().depth(2)
                        .id("uiscene")
                        .mount(ige.$('gamescene'));

                    ige.client.obj[7] = new IgeUiEntity()
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
                        .mount(ige.$('uiscene'));

                    // Create tv scene
                    ige.client.obj[8] = new GameElement()
                        .id('tv')
                        .depth(1)
                        .width(300)
                        .height(150)
                        .translateTo(-300,0,0)
                        .texture(gameTexture[1])
                        .mount(ige.$('bottomBar'));

                    // Create couch scene
                    ige.client.obj[9] = new GameElement()
                        .id('couch')
                        .depth(1)
                        .width(300)
                        .height(150)
                        .translateTo(300,0,0)
                        .texture(gameTexture[2])
                        .mount(ige.$('bottomBar'));

                    ige.client.obj[10] = new StateMachine()
                        .id("statemachine");

                    // this scene will tell us we are under construction
                    ige.client.obj[11] = new IgeScene2d()
                        .id("roomscene");

                    // under construction element
                    ige.client.obj[12] = new GameElement()
                        .id('underconst')
                        .depth(0)
                        .width(1280)
                        .height(1024)
                        .texture(gameTexture[3])
                        .translateTo(0, -140, 0)
                        .mouseUp(function (event) {
                          //  console.log(event.button);
                            ige.$('statemachine').targetDoor = "none";
                            ige.$('roomscene').unMount();
                            ige.$('skyscraperscene').mount(ige.$('gamescene'));
                        })
                        .mount(ige.$('roomscene'));


                    // Setup some actions and map them to inputs
                    ige.input.mapAction('predictedX', ige.input.mouse.x);
                    ige.input.mapAction('predictedY', ige.input.mouse.y);
				}
			});

            ige.addBehaviour("tick", function () {
                var translate;
                // tick Delta - needed for calculations
                var delta = ige.tickDelta;
                // let's call the elevator !
                if(ige.$('statemachine').currentHeading!=ige.$('statemachine').currentFloor){
                    switch (ige.$('statemachine').changeFloor){
                        // We don't need elevator ?!?
                        case 0:
                            break;
                        // We are going to the elevator and call it
                        case 1:
                            translate = ige.$('character').translate();
                            if(translate.x() == 0){
                                // Let's look to the elevator
                                ige.$('character').cell(46);
                                // and call it
                                ige.$('statemachine').elevatorHeading = ige.$('statemachine').currentFloor;
                                ige.$('statemachine').changeFloor++;
                            }
                            break;
                        // Let's wait for the elevator
                        case 2:
                            translate = ige.$('cart').translate();
                            if(translate.y() == ige.$('statemachine').getCurrentHeight()){
                                // the elevator is here ! Let's open it !
                                ige.$('elevator').animation.select('open');
                                ige.$('statemachine').count-=delta;
                                if(ige.$('statemachine').count<=0){
                                    // stop the animation and set the correct cell
                                    ige.$('elevator').animation.stop();
                                    ige.$('elevator').cell(4);
                                    // Move to the next state
                                    ige.$('statemachine').changeFloor++;
                                }
                            }
                            break;
                        // Let's "mount" in and turn !
                        case 3:
                            // unmount character from floorscene and mount it to the elevator
                            ige.$('character').unMount();
                            // on the elevatorsNode we need to be at the origin
                            // 6 is standard Y for the character, 3 will make it be a bit in the background
                            ige.$('character').translateTo(0,3,0);
                            // mount to the elevator
                            ige.$('character').mount(ige.$('cart'));
                            // reset depth so our character is inside the elevator
                            ige.$('character').depth(2);
                            // reset count for the turn animation
                            ige.$('statemachine').count = 300;
                            // Move to the next state
                            ige.$('statemachine').changeFloor++;
                            break;
                        case 4:
                            ige.$('character').animation.select('turn');
                            ige.$('statemachine').count-=delta;
                            if(ige.$('statemachine').count<=0){
                                ige.$('character').animation.stop();
                                ige.$('character').cell(10);
                                // preset count for the close elevator doors animation
                                ige.$('statemachine').count = 450;
                                // Move to the next state
                                ige.$('statemachine').changeFloor++;
                            }
                            break;
                        // let's close the doors
                        case 5:
                            ige.$('elevator').animation.select('close');
                            ige.$('statemachine').count-=delta;
                            if(ige.$('statemachine').count<=0){
                                ige.$('elevator').animation.stop();
                                ige.$('elevator').cell(1);
                                ige.$('statemachine').changeFloor++;
                            }
                            break;
                        // and move the elevator upwards
                        case 6:
                            ige.$('statemachine').elevatorHeading = ige.$('statemachine').currentHeading;
                            ige.$('statemachine').startHeading = 1;
                            // set the count for the next animation
                            ige.$('statemachine').count = 450;
                            ige.$('statemachine').changeFloor++;
                            break;
                        // when the elevator gets where he wants to be
                        case 7:
                            translate = ige.$('cart').translate();
                            if(translate.y() == ige.$('statemachine').getFloorsHeight()){
                                //open it
                                ige.$('elevator').animation.select('open');
                                ige.$('statemachine').count-=delta;
                                if(ige.$('statemachine').count<=0){
                                    // stop the animation and set the correct cell
                                    ige.$('elevator').animation.stop();
                                    ige.$('elevator').cell(4);
                                    // set our currentFloor where we headed to
                                    ige.$('statemachine').currentFloor = ige.$('statemachine').elevatorHeading;
                                    // unmount character from elevator and mount it to the scene
                                    ige.$('character').unMount();
                                    ige.$('character').mount(ige.$('floorscene'));
                                    // also we need to reset the translation on the other node
                                    ige.$('character').translateTo(0,ige.$('statemachine').getFloorsHeight(),0);
                                    // reset depth so our character is outside the elevator
                                    ige.$('character').depth(4);
                                    // and let's move where we wanted to move
                                    ige.$('character').walkTo(
                                        ige.$('statemachine').targetX,
                                        ige.$('statemachine').getCurrentHeight()+6
                                    );
                                    // the change floor maneuver is over ! yeah !
                                    ige.$('statemachine').changeFloor = 0;
                                }
                            }
                            break;
                    }
                }

                var direction = ige.$('statemachine').elevatorHeading - ige.$('statemachine').elevatorsFloor;

                if(direction > 0){
                    ige.client.obj[5].obj[0].velocity.y(-0.2);
                    if(ige.$('statemachine').startHeading == 1 && ige.$('cart').translate().y() <= -201){
                        ige.$('background').velocity.y(0.015);
                        ige.$('skyscraper').velocity.y(0.15);
                    }
                } else if (direction < 0){
                    ige.client.obj[5].obj[0].velocity.y(0.2);
                    if(ige.$('statemachine').startHeading == 1){
                        if(ige.$('cart').translate().y() >= -200){
                            ige.$('background').velocity.y(0);
                            ige.$('skyscraper').velocity.y(0);
                        }else{
                            ige.$('background').velocity.y(-0.015);
                            ige.$('skyscraper').velocity.y(-0.15);
                        }
                    }


                } else {
                    if(ige.$('statemachine').startHeading == 1){
                        ige.$('statemachine').currentFloor= ige.$('statemachine').elevatorHeading;
                    }

                    ige.$('statemachine').elevatorsFloor = ige.$('statemachine').elevatorHeading;

                    ige.$('cart').velocity.y(0);
                    ige.$('cart').translateTo(0,ige.$('statemachine').getFloorsHeight(),0);

                    ige.$('background').velocity.y(0);
                    ige.$('skyscraper').velocity.y(0);

                    ige.$('background').translateTo(0,ige.$('statemachine').getBackgroundHeight(),0);
                    ige.$('skyscraper').translateTo(0,ige.$('statemachine').getSkyScraperHeight(),0);
                }

                var elevatorpos = ige.$('cart').translate().y();
                    elevatorpos-= ige.$('statemachine').getFloorsHeight();

                if(elevatorpos  >= -2 && elevatorpos <= 2){
                    ige.$('statemachine').startHeading = 0;
                    ige.$('statemachine').elevatorsFloor = ige.$('statemachine').elevatorHeading;

                }


                // Switch to the rooms !
                if(ige.$('statemachine').targetDoor == "none"){}
                else if(ige.$('statemachine').targetDoor == "lobby"){
                    translate = ige.$('character').translate();
                    if(translate.x()-15 == ige.$('lobby').translate().x()
                        && translate.y()-49 == ige.$('lobby').translate().y()){
                        ige.$('statemachine').targetDoor = "none";
                        ige.$('skyscraperscene').unMount();
                        ige.$('roomscene').mount(ige.$('gamescene'));
                    }
                }else if(ige.$('statemachine').targetDoor == "signboard") {
                    translate = ige.$('character').translate();
                    if(translate.x() == ige.$(ige.$('statemachine').targetDoor).translate().x()
                    && translate.y()-61 == ige.$(ige.$('statemachine').targetDoor).translate().y()){
                        ige.$('statemachine').targetDoor = "none";
                        ige.$('skyscraperscene').unMount();
                        ige.$('roomscene').mount(ige.$('gamescene'));
                    }
                }else {
                    translate = ige.$('character').translate();
                    if(translate.x() == ige.$(ige.$('statemachine').targetDoor).translate().x()
                        && translate.y()-48 == ige.$(ige.$('statemachine').targetDoor).translate().y()
                        ){
                        ige.$('statemachine').targetDoor = "none";
                        ige.$('skyscraperscene').unMount();
                        ige.$('roomscene').mount(ige.$('gamescene'));
                    }
                }
            });
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }