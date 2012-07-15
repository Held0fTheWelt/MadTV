var TVTSkyScraperRooms = IgeEntity.extend({
    classId: 'TVTSkyScraperRooms',
        
        init: function () {
            
            this._super();
            // Load our textures
            var skyscraperrooms = this,
            gameTexture = [];

            this.obj = [];
	    // The closed lobby
            gameTexture[0] = new IgeTexture('assets/textures/sprites/accessoires/lobby/lobbyClosed.jpg');
	    // The signboard
            gameTexture[1] = new IgeTexture('assets/textures/sprites/accessoires/lobby/signboard.jpg');
	    // Bureau door 1 closed
	    gameTexture[2] = new IgeTexture('assets/textures/sprites/accessoires/bureau/buro11.jpg');
	    // Bureau door 2 closed
	    gameTexture[3] = new IgeTexture('assets/textures/sprites/accessoires/bureau/buro21.jpg');
	    // Bureau door 3 closed
	    gameTexture[4] = new IgeTexture('assets/textures/sprites/accessoires/bureau/buro31.jpg');
	    // Bureau door 1 closed
            //gameTexture[3] = new IgeTexture('assets/textures/sprites/walls.jpg');

            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		// Create the Lobbyman doors
		skyscraperrooms.obj[0] = new GameElement()
			.id('lobby')
			.depth(2)
			.width(153)
			.height(86)
			.texture(gameTexture[0])
			.translateTo(-300, 265, 0)
			.mount(skyscraperrooms);
                                                
                // Create our Signboard
		skyscraperrooms.obj[1] = new GameElement()
			.id('signboard')
			.depth(2)
			.width(64)
			.height(50)
			.texture(gameTexture[1])
			.translateTo(300, 255, 0)
			.mount(skyscraperrooms);
                                        
                // Create Bureau on Slot 1.1
		skyscraperrooms.obj[2] = new GameElement()
			.id('bureau11')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-325, 168, 0)
			.mount(skyscraperrooms);
				
		// Create Bureau on Slot 1.4
		skyscraperrooms.obj[3] = new GameElement()
			.id('bureau14')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, 168, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 2.2
		skyscraperrooms.obj[4] = new GameElement()
			.id('bureau22')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, 68, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 2.3
		skyscraperrooms.obj[5] = new GameElement()
			.id('bureau23')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(225, 68, 0)
			.mount(skyscraperrooms);

		// Create Bureau on Slot 2.4
		skyscraperrooms.obj[6] = new GameElement()
			.id('bureau24')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, 68, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 3.1
           	skyscraperrooms.obj[7] = new GameElement()
            		.id('bureau31')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(-325, -32, 0)
        		.mount(skyscraperrooms);
                                                                        
                // Create Bureau on Slot 3.2
		skyscraperrooms.obj[8] = new GameElement()
			.id('bureau32')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-225, -32, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 3.4
		skyscraperrooms.obj[9] = new GameElement()
			.id('bureau34')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(325, -32, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 4.1
		skyscraperrooms.obj[10] = new GameElement()
			.id('bureau41')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -132, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 4.2
		skyscraperrooms.obj[11] = new GameElement()
			.id('bureau42')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -132, 0)
			.mount(skyscraperrooms);

		// Create Bureau on Slot 4.3
		skyscraperrooms.obj[12] = new GameElement()
			.id('bureau43')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -132, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 4.4
           	skyscraperrooms.obj[13] = new GameElement()
            		.id('bureau44')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -132, 0)
        		.mount(skyscraperrooms);
                        
		// Create Bureau on Slot 5.2
		skyscraperrooms.obj[14] = new GameElement()
			.id('bureau52')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-225, -232, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 5.3
           	skyscraperrooms.obj[15] = new GameElement()
            		.id('bureau53')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(225, -232, 0)
        		.mount(skyscraperrooms);
                                              
                // Create Bureau on Slot 6.1
		skyscraperrooms.obj[16] = new GameElement()
			.id('bureau61')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-325, -332, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 6.4
		skyscraperrooms.obj[17] = new GameElement()
			.id('bureau64')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, -332, 0)
			.mount(skyscraperrooms);
			
		// Create Bureau on Slot 7.1
		skyscraperrooms.obj[18] = new GameElement()
			.id('bureau71')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -432, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 7.2
		skyscraperrooms.obj[19] = new GameElement()
			.id('bureau72')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -432, 0)
			.mount(skyscraperrooms);

		// Create Bureau on Slot 7.3
		skyscraperrooms.obj[20] = new GameElement()
			.id('bureau73')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -432, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 7.4
           	skyscraperrooms.obj[21] = new GameElement()
            		.id('bureau74')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -432, 0)
        		.mount(skyscraperrooms);
			
		// Create Bureau on Slot 8.2
		skyscraperrooms.obj[22] = new GameElement()
			.id('bureau82')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, -532, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 8.3
           	skyscraperrooms.obj[23] = new GameElement()
            		.id('bureau83')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[2])
        		.translateTo(225, -532, 0)
        		.mount(skyscraperrooms);			
	
		// Create Bureau on Slot 9.1
		skyscraperrooms.obj[14] = new GameElement()
			.id('bureau91')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-325, -632, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 9.3
           	skyscraperrooms.obj[15] = new GameElement()
            		.id('bureau93')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(225, -632, 0)
        		.mount(skyscraperrooms);
                                              
		// Create Bureau on Slot 9.4
		skyscraperrooms.obj[14] = new GameElement()
			.id('bureau94')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(325, -632, 0)
        		.mount(skyscraperrooms);

		// Create Bureau on Slot 10.1
		skyscraperrooms.obj[18] = new GameElement()
			.id('bureau101')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -732, 0)
			.mount(skyscraperrooms);
						
		// Create Bureau on Slot 10.2
		skyscraperrooms.obj[19] = new GameElement()
			.id('bureau102')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -732, 0)
			.mount(skyscraperrooms);

		// Create Bureau on Slot 10.3
		skyscraperrooms.obj[20] = new GameElement()
			.id('bureau103')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -732, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 10.4
           	skyscraperrooms.obj[21] = new GameElement()
            		.id('bureau104')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -732, 0)
        		.mount(skyscraperrooms);			

		// Create Bureau on Slot 11.2
		skyscraperrooms.obj[22] = new GameElement()
			.id('bureau112')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, -832, 0)
        		.mount(skyscraperrooms);
						
           	// Create Bureau on Slot 11.3
           	skyscraperrooms.obj[23] = new GameElement()
            		.id('bureau113')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[2])
        		.translateTo(225, -832, 0)
        		.mount(skyscraperrooms);			

		// Create Bureau on Slot 12.1
		skyscraperrooms.obj[18] = new GameElement()
			.id('bureau101')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -932, 0)
			.mount(skyscraperrooms);                        
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }