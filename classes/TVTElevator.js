var TVTElevator = IgeEntity.extend({
    classId: 'TVTElevator',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSElevator = this;
            var gameTexture = [];

            this.obj = [];
	    gameTexture[0] = new IgeTexture('assets/textures/sprites/elevators/elevatorcart.png');
            
            
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                

		// Create walls - floor 2
		nodeSSElevator.obj[0] = new GameElement()
		    .id('elevatorcart')
		    .depth(2)
		    .width(77)
		    .height(89)
		    .texture(gameTexture[0])
		    .translateTo(0, 260, 0)
		    .mount(nodeSSElevator);
		
		/*
		
		// Create something special
		nodeSSElevator.obj[0] = new GameElement()
			.id('ground')
			.depth(2)
			.width(1000)
			.height(4)
			.texture(gameTexture[1])
			.translateTo(0, 310, 0)
			.mount(nodeSSElevator);
                                                
		*/    
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }