var TVTSkyScraper = IgeEntity.extend({
    classId: 'TVTSkyScraper',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeSS = this;
            var gameTexture = [];

            this.obj = [];
            gameTexture[1] = new IgeTexture('assets/textures/sprites/ground.jpg');
            gameTexture[2] = new IgeTexture('assets/textures/sprites/floor.jpg');
            gameTexture[3] = new IgeTexture('assets/textures/sprites/walls.jpg');

            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		// Create the ground
		nodeSS.obj[0] = new GameElement()
			.id('ground')
			.depth(2)
			.width(1000)
			.height(4)
			.texture(gameTexture[1])
			.translateTo(0, 310, 0)
			.mount(nodeSS);
                                                
                // Create walls - floor 0
		nodeSS.obj[1] = new GameElement()
			.id('floor0')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, 260, 0)
			.mount(nodeSS);
                                                
                // Create ground - floor 1
		nodeSS.obj[2] = new GameElement()
			.id('gfloor1')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, 210, 0)
			.mount(nodeSS);
						
		// Create walls - floor 1
		nodeSS.obj[3] = new GameElement()
			.id('floor1')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, 160, 0)
			.mount(nodeSS);
						
		// Create ground - floor 2
		nodeSS.obj[4] = new GameElement()
			.id('gfloor2')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, 110, 0)
			.mount(nodeSS);
						
		// Create walls - floor 2
		nodeSS.obj[5] = new GameElement()
			.id('floor2')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, 60, 0)
			.mount(nodeSS);

		// Create ground - floor 3
		nodeSS.obj[6] = new GameElement()
			.id('gfloor3')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, 10, 0)
        		.mount(nodeSS);
						
           	// Create walls - floor 3
           	nodeSS.obj[7] = new GameElement()
            		.id('floor3')
        		.depth(2)
        		.width(800)
        		.height(96)
        		.texture(gameTexture[3])
        		.translateTo(0, -40, 0)
        		.mount(nodeSS);
                                                                        
                // Create ground - floor 4
		nodeSS.obj[8] = new GameElement()
			.id('gfloor4')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -90, 0)
			.mount(nodeSS);
						
		// Create walls - floor 4
		nodeSS.obj[9] = new GameElement()
			.id('floor4')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -140, 0)
			.mount(nodeSS);
						
		// Create ground - floor 5
		nodeSS.obj[10] = new GameElement()
			.id('gfloor5')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -190, 0)
			.mount(nodeSS);
						
		// Create walls - floor 5
		nodeSS.obj[11] = new GameElement()
			.id('floor5')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -240, 0)
			.mount(nodeSS);

		// Create ground - floor 6
		nodeSS.obj[12] = new GameElement()
			.id('gfloor6')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -290, 0)
        		.mount(nodeSS);
						
           	// Create walls - floor 6
           	nodeSS.obj[13] = new GameElement()
            		.id('floor6')
        		.depth(2)
        		.width(800)
        		.height(96)
        		.texture(gameTexture[3])
        		.translateTo(0, -340, 0)
        		.mount(nodeSS);
                        
		// Create ground - floor 7
		nodeSS.obj[14] = new GameElement()
			.id('gfloor7')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -390, 0)
        		.mount(nodeSS);
						
           	// Create walls - floor 7
           	nodeSS.obj[15] = new GameElement()
            		.id('floor7')
        		.depth(2)
        		.width(800)
        		.height(96)
        		.texture(gameTexture[3])
        		.translateTo(0, -440, 0)
        		.mount(nodeSS);
                                                                        
                // Create ground - floor 8
		nodeSS.obj[16] = new GameElement()
			.id('gfloor8')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -490, 0)
			.mount(nodeSS);
						
		// Create walls - floor 8
		nodeSS.obj[17] = new GameElement()
			.id('floor8')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -540, 0)
			.mount(nodeSS);
						
		// Create ground - floor 9
		nodeSS.obj[18] = new GameElement()
			.id('gfloor9')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -590, 0)
			.mount(nodeSS);
						
		// Create walls - floor 9
		nodeSS.obj[19] = new GameElement()
			.id('floor9')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -640, 0)
			.mount(nodeSS);

		// Create ground - floor 10
		nodeSS.obj[20] = new GameElement()
			.id('gfloor10')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -690, 0)
        		.mount(nodeSS);
						
           	// Create walls - floor 10
           	nodeSS.obj[21] = new GameElement()
            		.id('floor10')
        		.depth(2)
        		.width(800)
        		.height(96)
        		.texture(gameTexture[3])
        		.translateTo(0, -740, 0)
        		.mount(nodeSS);
			
                // Create ground - floor 11
		nodeSS.obj[16] = new GameElement()
			.id('gfloor11')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -790, 0)
			.mount(nodeSS);
						
		// Create walls - floor 11
		nodeSS.obj[17] = new GameElement()
			.id('floor11')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -840, 0)
			.mount(nodeSS);
						
		// Create ground - floor 12
		nodeSS.obj[18] = new GameElement()
			.id('gfloor12')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -890, 0)
			.mount(nodeSS);
						
		// Create walls - floor 12
		nodeSS.obj[19] = new GameElement()
			.id('floor12')
			.depth(2)
			.width(800)
			.height(96)
			.texture(gameTexture[3])
			.translateTo(0, -940, 0)
			.mount(nodeSS);  			

		// Create ground - roof
		nodeSS.obj[20] = new GameElement()
			.id('gfloor13')
			.depth(2)
			.width(800)
			.height(4)
			.texture(gameTexture[2])
			.translateTo(0, -990, 0)
        		.mount(nodeSS);                        
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }