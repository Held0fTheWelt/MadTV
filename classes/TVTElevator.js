/* IgeTemplate is a nodeSSElevator class for adding nodes functionality easily
 * You can do more if you want to, but it has all what it takes to
 * easily make something like a scene which than can be added completely to the client.
 * Be sure to load the source script in the header file.
 * Changes to be made are the names classname and classId to what you want it to be.
 * Be sure to give it some matching instance variable name in here nodeSSElevator and change the values
 * to what's needed on your Node.
 * Commented sourcecode is for showcase and easy modifying.
 */
var TVTElevator = IgeEntity.extend({
    classId: 'TVTElevator',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSElevator = this;
            var gameTexture = [];

            this.obj = [];
            // gameTexture[0] = new IgeTexture('assets/textures/sprites/ground.jpg');
            
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		
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