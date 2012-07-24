var TVTElevator = IgeEntity.extend({
    classId: 'TVTElevator',

        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSElevator = this;
            var gameTexture = [];

            this.obj = [];
	    
	    gameTexture[0] = new IgeTexture('assets/textures/elevators/elevatorcart.png');
	    gameTexture[1] = new IgeCellSheet('elevator.png', 4, 1);
	    //gameTexture[1] = new IgeTexture('assets/textures/elevators/elevatorbody.jpg');
	    gameTexture[2] = new IgeTexture('assets/textures/elevators/elevator3.jpg');
            
            
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
		    .cell(4)
		    .depth(3)
		    .texture(gameTexture[1])
		    .dimensionsFromCell()
		    .translateTo(0, 263, 0)
		    .opacity(0.7)
		    .mount(nodeSSElevator);
		    
/*		    
		// Create the elevator cart scene
		nodeSSElevator.obj[0] = new IgeScene2d().depth(2);
		nodeSSElevator.obj[0].translateTo(0, 263, 0)
		nodeSSElevator.obj[0].addComponent(IgeVelocityComponent);
		nodeSSElevator.obj[0].mount(nodeSSElevator);

*/
	    		
		// Create the elevator doors scene
		nodeSSElevator.doors = new IgeScene2d().depth(3).opacity(0.3);
		nodeSSElevator.doors.mount(nodeSSElevator);		
		
/*
		
		
		// Create elevatorbody
		nodeSSElevator.obj[15] = new VerticalMovement()
		    .id('elevatorcart')
		    .depth(0)
		    .width(75)
		    .height(89)
		    .texture(gameTexture[1])
		    
		    .mount(nodeSSElevator.obj[0]);
*/
		
		
		// Create elevator doors floor 0
		nodeSSElevator.obj[2] = new VerticalMovement()
		    .id('elevatordoors0')
		    .depth(3)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[2])
		    .translateTo(0, 263, 0)
		    .mount(nodeSSElevator.doors);		    
		    
		// Create elevator doors floor 1
		nodeSSElevator.obj[3] = new VerticalMovement()
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
        },
	getHeading: function(){
	    var translate;
	    if(this.obj[0]){
		    translate = this.obj[0].getHeading();
	    }else{
		    return 0;
	    }
	    return translate;
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
	getFloorsHeight: function(floornumber){
	    if(floornumber == 0){
		return 263;
	    } else if (floornumber == 1){
		return 163;
	    } else if (floornumber == 2){
		return 63;
	    } else if (floornumber == 3){
		return -37;
	    } else if (floornumber == 4){
		return -137;
	    } else if (floornumber == 5){
		return -237;
	    } else if (floornumber == 6){
		return -337;
	    } else if (floornumber == 7){
		return -437;
	    } else if (floornumber == 8){
		return -537;
	    } else if (floornumber == 9){
		return -637;
	    } else if (floornumber == 10){
		return -737;
	    } else if (floornumber == 11){
		return -837;
	    } else if (floornumber == 12){
		return -937;
	    }
	    // goes anywhere if something went wrong
	    return 500;
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }