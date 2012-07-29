var TVTElevator = IgeEntity.extend({
    classId: 'TVTElevator',

        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSElevator = this;
            var gameTexture = [];
	    this.pretendedX = 0;
	    this.pretendedY = 0;
	    this.move = 0;
            this.obj = [];

	    this.currentHeading = 0;
	    this.currentFloor = 0;
	    this.count = 550;
	    this.startHeading = 0;

	    
	    gameTexture[0] = new IgeTexture('assets/textures/elevators/elevatorcart.png');
	    gameTexture[1] = new IgeCellSheet('elevator.png', 4, 1);
	    //gameTexture[1] = new IgeTexture('assets/textures/elevators/elevatorbody.jpg');
	    gameTexture[2] = new IgeTexture('assets/textures/elevators/elevator3.jpg');
            gameTexture[3] = new IgeTexture('cart.jpg');
            
	    gameTexture[4] = new IgeCellSheet('vx_chara02_c.png', 12, 8);
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
 		// Create the elevator cart scene
		nodeSSElevator.obj[0] = new IgeScene2d().depth(2);
		nodeSSElevator.obj[0].translateTo(0, 263, 0)
		nodeSSElevator.obj[0].mount(nodeSSElevator);               
		
		nodeSSElevator.obj[1] = new Elevator();
		// Setup the entity
		nodeSSElevator.obj[1].addComponent(IgeAnimationComponent)
		    .addComponent(IgeVelocityComponent)
		    .animation.define('opened', [4, 4, 4, 4], 8, -1)
		    .animation.define('closed', [1, 1, 1, 1], 8, -1)
		    .animation.define('open', [1, 2, 3, 4], 8, -1)
		    .animation.define('close', [4, 3, 2, 1], 8, -1)
		    .cell(1)
		    .depth(3)
		    .texture(gameTexture[1])
		    .dimensionsFromCell()
		    .mount(nodeSSElevator.obj[0]);
		    		   		
		// Create elevator cart
		nodeSSElevator.obj[2] = new VerticalMovement()
		    .id('cart')
		    .depth(1)
		    .width(75)
		    .height(89)
		    .texture(gameTexture[3])
		    .mount(nodeSSElevator.obj[0]);

	    	nodeSSElevator.obj[3] = new CharacterMonk();
		// Setup the entity	
			
		nodeSSElevator.obj[3].addComponent(IgeAnimationComponent)
			.addComponent(IgeVelocityComponent)
			.animation.define('walkDown', [10, 11, 12, 11], 8, -1)
			.animation.define('walkLeft', [22, 23, 24, 23], 8, -1)
			.animation.define('walkRight', [34, 35, 36, 35], 8, -1)
			.animation.define('walkUp', [46, 47, 48, 47], 8, -1)
			.cell(10)
			.depth(2)
			.texture(gameTexture[4])
			.width(50)
			.height(90)
			.translateTo(0, 6, 0)
			.mount(nodeSSElevator.obj[0]);
	
			
			
		// Create the elevator doors scene
		nodeSSElevator.doors = new IgeScene2d().depth(1).opacity(0.3);
		nodeSSElevator.doors.mount(nodeSSElevator);				
		
		// Create elevator doors floor 0
		nodeSSElevator.obj[15] = new VerticalMovement()
		    .id('elevatordoors0')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, 263, 0)
		    .mount(nodeSSElevator.doors);		    
		    
		// Create elevator doors floor 1
		nodeSSElevator.obj[16] = new VerticalMovement()
		    .id('elevatordoors1')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, 163, 0)
		    .mount(nodeSSElevator.doors);
		   
		// Create elevator doors floor 2
		nodeSSElevator.obj[4] = new VerticalMovement()
		    .id('elevatordoors2')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, 63, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 3
		nodeSSElevator.obj[5] = new VerticalMovement()
		    .id('elevatordoors3')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -37, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 4
		nodeSSElevator.obj[6] = new VerticalMovement()
		    .id('elevatordoors4')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -137, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 5
		nodeSSElevator.obj[7] = new VerticalMovement()
		    .id('elevatordoors5')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -237, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 6
		nodeSSElevator.obj[8] = new VerticalMovement()
		    .id('elevatordoors6')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -337, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 7
		nodeSSElevator.obj[9] = new VerticalMovement()
		    .id('elevatordoors7')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -437, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 8
		nodeSSElevator.obj[10] = new VerticalMovement()
		    .id('elevatordoors8')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -537, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 9
		nodeSSElevator.obj[11] = new VerticalMovement()
		    .id('elevatordoors9')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -637, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 10
		nodeSSElevator.obj[12] = new VerticalMovement()
		    .id('elevatordoors10')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -737, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 11
		nodeSSElevator.obj[13] = new VerticalMovement()
		    .id('elevatordoors11')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -837, 0)
		    .mount(nodeSSElevator.doors);

		// Create elevator doors floor 12
		nodeSSElevator.obj[14] = new VerticalMovement()
		    .id('elevatordoors12')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, -937, 0)
		    .mount(nodeSSElevator.doors);
		   
            });
	    

	    ige.input.on('mouseUp', function (event) {
		    nodeSSElevator._mouseUp(event);
	    });
        },
	getHeading: function(){
	    if(this.startHeading == 1){
		if((this.currentFloor - this.currentHeading) < 0){
		    return 1;
		} else if((this.currentFloor - this.currentHeading) > 0){
		    return -1;
		} else {return 0;}
	    }   else{
		return 0;
	   }
	},
	/** returns the y position of the elevators cart for the applications scrolling mechanism */
	getCart: function(){
	    var translate;
	    if(this.obj[0]){
		    translate = this.obj[0].translate();
	    }else{
		    return 0;
	    }
	    return translate.y();
	},
	/** changes the velocity of the elevator */
	setVelocity: function(velo){
	    this.obj[0].velocity.y(velo);
	},
	/** function for getting the correct height, when moving to some floor */
		/** function for getting the correct height, when moving to some floor */
	getFloorsHeight: function(floornumber){
	    if(floornumber == 0){
		return 0;
	    } else if (floornumber == 1){
		return -100;
	    } else if (floornumber == 2){
		return -200;
	    } else if (floornumber == 3){
		return -300;
	    } else if (floornumber == 4){
		return -400;
	    } else if (floornumber == 5){
		return -500;
	    } else if (floornumber == 6){
		return -600;
	    } else if (floornumber == 7){
		return -700;
	    } else if (floornumber == 8){
		return -800;
	    } else if (floornumber == 9){
		return -900;
	    } else if (floornumber == 10){
		return -1000;
	    } else if (floornumber == 11){
		return -1100;
	    } else if (floornumber == 12){
		return -1200;
	    }
	    // goes anywhere if something went wrong
	    return 500;
	},
	setCurrentHeading: function(heading){
	    this.currentHeading = heading;  
	},
	getCurrentHeading: function(){
	    return this.currentHeading;
	},
	_mouseUp: function () {
		this.pretendedX = ige.input.val(ige.input.mouse.x),
		this.pretendedY = ige.input.val(ige.input.mouse.y)-263;
		this.move = 1;
		console.log("clicked X:"+this.pretendedX+" Y:"+this.pretendedY);
	},
	tick: function (ctx) {
	    // if walk-flag == 1
	    if(this.move == 1){
		this.obj[3].walkTo(this.pretendedX,this.getFloorsHeight(this.currentFloor)+6);
		if(this.obj[3].flag == 1){
		    this.obj[3].flag = 0;
		    this.move = 0;		    
		}

	    }
		if(this.obj[1].flag == 1){
		    this.currentFloor = this.currentHeading;
		    
		}
		this._super(ctx);
	    
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }