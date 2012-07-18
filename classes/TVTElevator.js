var TVTElevator = IgeEntity.extend({
    classId: 'TVTElevator',

        init: function () {
            

	    
            this._super();
            // Load our textures
            var nodeSSElevator = this;
            var gameTexture = [];

            this.obj = [];
	    
	    gameTexture[0] = new IgeTexture('assets/textures/elevators/elevatorcart.png');
	    gameTexture[1] = new IgeTexture('assets/textures/elevators/elevatorbody.jpg');
	    gameTexture[2] = new IgeTexture('assets/textures/elevators/elevator3.jpg');
            
            
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		// Create the elevator cart scene
		nodeSSElevator.cart = new IgeScene2d().depth(0);
		nodeSSElevator.cart.translateTo(0, 263, 0)
		nodeSSElevator.cart.addComponent(IgeVelocityComponent);
		nodeSSElevator.cart.velocity.y(-0.2);		
		nodeSSElevator.cart.mount(nodeSSElevator);
		
		// Create the elevator doors scene
		nodeSSElevator.doors = new IgeScene2d().depth(1);
		nodeSSElevator.doors.mount(nodeSSElevator);		
		
		
		
		
		// Create elevatorbody
		nodeSSElevator.obj[0] = new VerticalMovement()
		    .id('elevatorcart')
		    .depth(1)
		    .width(75)
		    .height(89)
		    .texture(gameTexture[1])
		    
		    .mount(nodeSSElevator.cart);		
		
		// Create elevatorborder
		nodeSSElevator.obj[1] = new VerticalMovement()
		    .id('elevatorbody')
		    .depth(1)
		    .width(77)
		    .height(89)
		    .texture(gameTexture[0])
		    
		    .mount(nodeSSElevator.cart);
		
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
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }