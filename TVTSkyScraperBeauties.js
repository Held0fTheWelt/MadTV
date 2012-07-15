var TVTSkyScraperBeauties = IgeEntity.extend({
    classId: 'TVTSkyScraperBeauties',
        
        init: function () {
            
            this._super();
            // Load our textures
            var skyscraperbeauties = this,
            gameTexture = [];

            this.obj = [];
	    // The closed lobby
            gameTexture[0] = new IgeTexture('assets/textures/sprites/accessoires/floor/banana.png');
	    // The signboard
            gameTexture[1] = new IgeTexture('assets/textures/sprites/accessoires/floor/bin.png');
	    // Bureau door 1 closed
	    gameTexture[2] = new IgeTexture('assets/textures/sprites/accessoires/floor/dracaena1.png');
	    // Bureau door 2 closed
	    gameTexture[3] = new IgeTexture('assets/textures/sprites/accessoires/floor/lamp1.png');
	    // Bureau door 3 closed
	    gameTexture[4] = new IgeTexture('assets/textures/sprites/accessoires/floor/lamp2.png');
	    // The closed lobby
            gameTexture[5] = new IgeTexture('assets/textures/sprites/accessoires/floor/painting1.jpg');
	    // The signboard
            gameTexture[6] = new IgeTexture('assets/textures/sprites/accessoires/floor/painting2.jpg');
	    // Bureau dor 1 closed
	    gameTexture[7] = new IgeTexture('assets/textures/sprites/accessoires/floor/painting3.jpg');
	    // Bureau door 2 closed
	    gameTexture[8] = new IgeTexture('assets/textures/sprites/accessoires/floor/plant.png');
	    // Bureau door 3 closed
	    gameTexture[9] = new IgeTexture('assets/textures/sprites/accessoires/floor/water.png');
	    
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		
	        // Adding Top Lamps !
		// Create lamp01
		skyscraperbeauties.obj[0] = new GameElement()
			.id('lamp11')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 225, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp02
		skyscraperbeauties.obj[1] = new GameElement()
			.id('lamp12')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 225, 0)
			.mount(skyscraperbeauties);			
                                                
		// Create lamp11
		skyscraperbeauties.obj[3] = new GameElement()
			.id('lamp21')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 125, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp12
		skyscraperbeauties.obj[4] = new GameElement()
			.id('lamp22')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 125, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp21
		skyscraperbeauties.obj[5] = new GameElement()
			.id('lamp21')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 25, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp22
		skyscraperbeauties.obj[6] = new GameElement()
			.id('lamp22')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 25, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp31
		skyscraperbeauties.obj[7] = new GameElement()
			.id('lamp31')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -75, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp32
		skyscraperbeauties.obj[8] = new GameElement()
			.id('lamp32')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -75, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp41
		skyscraperbeauties.obj[9] = new GameElement()
			.id('lamp41')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -175, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp42
		skyscraperbeauties.obj[10] = new GameElement()
			.id('lamp42')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -175, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp51
		skyscraperbeauties.obj[11] = new GameElement()
			.id('lamp51')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -275, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp52
		skyscraperbeauties.obj[12] = new GameElement()
			.id('lamp52')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -275, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp61
		skyscraperbeauties.obj[13] = new GameElement()
			.id('lamp61')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -375, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp62
		skyscraperbeauties.obj[14] = new GameElement()
			.id('lamp62')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -375, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp71
		skyscraperbeauties.obj[15] = new GameElement()
			.id('lamp71')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -475, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp72
		skyscraperbeauties.obj[16] = new GameElement()
			.id('lamp72')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -475, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp81
		skyscraperbeauties.obj[17] = new GameElement()
			.id('lamp81')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -575, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp82
		skyscraperbeauties.obj[18] = new GameElement()
			.id('lamp82')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -575, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp91
		skyscraperbeauties.obj[19] = new GameElement()
			.id('lamp91')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -675, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp92
		skyscraperbeauties.obj[20] = new GameElement()
			.id('lamp92')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -675, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp101
		skyscraperbeauties.obj[21] = new GameElement()
			.id('lamp101')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -775, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp1102
		skyscraperbeauties.obj[22] = new GameElement()
			.id('lamp102')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -775, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp111
		skyscraperbeauties.obj[21] = new GameElement()
			.id('lamp111')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -875, 0)
			.mount(skyscraperbeauties);
			
		// Create lamp112
		skyscraperbeauties.obj[22] = new GameElement()
			.id('lamp112')
			.depth(0)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -875, 0)
			.mount(skyscraperbeauties);			
	   
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }