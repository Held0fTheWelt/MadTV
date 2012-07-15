var TVTSkyScraperBeauties = IgeEntity.extend({
    classId: 'TVTSkyScraperBeauties',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSBeauties = this;
            var gameTexture = [];

            this.obj = [];
	    // a small banana plant
            gameTexture[0] = new IgeTexture('assets/textures/accessoires/floor/banana.png');
	    // a bin
            gameTexture[1] = new IgeTexture('assets/textures/accessoires/floor/bin.png');
	    // a dracaena
	    gameTexture[2] = new IgeTexture('assets/textures/accessoires/floor/dracaena1.png');
	    // a lamp on the wall
	    gameTexture[3] = new IgeTexture('assets/textures/accessoires/floor/lamp1.png');
	    // a lamp on the ceiling
	    gameTexture[4] = new IgeTexture('assets/textures/accessoires/floor/lamp2.png');
	    // a painting
            gameTexture[5] = new IgeTexture('assets/textures/accessoires/floor/painting1.jpg');
	    // another painting
            gameTexture[6] = new IgeTexture('assets/textures/accessoires/floor/painting2.jpg');
	    // a third painting
	    gameTexture[7] = new IgeTexture('assets/textures/accessoires/floor/painting3.jpg');
	    // another plant
	    gameTexture[8] = new IgeTexture('assets/textures/accessoires/floor/plant.png');
	    // a water bar
	    gameTexture[9] = new IgeTexture('assets/textures/accessoires/floor/water.png');
	    
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		// Beauties Floor 8
		// fresh water
		nodeSSBeauties.obj[32] = new GameElement()
			.id('water')
			.depth(0)
			.width(33)
			.height(94)
			.texture(gameTexture[9])
			.translateTo(355, -536, 0)
			.mount(nodeSSBeauties);		

		// small plants next to it
		nodeSSBeauties.obj[31] = new GameElement()
			.id('water')
			.depth(0)
			.width(33)
			.height(94)
			.texture(gameTexture[8])
			.translateTo(325, -536, 0)
			.mount(nodeSSBeauties);
		
		nodeSSBeauties.obj[30] = new GameElement()
			.id('dracaena1')
			.depth(0)
			.width(46)
			.height(75)
			.texture(gameTexture[2])
			.translateTo(305, -528, 0)
			.mount(nodeSSBeauties);			
		
		// Beauties Floor 6
		// painting on floor 1 slot 63
		nodeSSBeauties.obj[29] = new GameElement()
			.id('painting63')
			.depth(0)
			.width(77)
			.height(63)
			.texture(gameTexture[7])
			.translateTo(225, -345, 0)
			.mount(nodeSSBeauties);
		// Beauties Floor 3
		// plant1
		nodeSSBeauties.obj[28] = new GameElement()
			.id('plant1')
			.depth(0)
			.width(58)
			.height(92)
			.texture(gameTexture[8])
			.translateTo(225, -38, 0)
			.mount(nodeSSBeauties);		
		
		// Beauties Floor 2		
		// painting on floor 2 slot 21
		nodeSSBeauties.obj[27] = new GameElement()
			.id('painting21')
			.depth(0)
			.width(77)
			.height(63)
			.texture(gameTexture[6])
			.translateTo(-325, 55, 0)
			.mount(nodeSSBeauties);		
		
		// Beauties Floor 1
		// dracaena1
		nodeSSBeauties.obj[26] = new GameElement()
			.id('dracaena1')
			.depth(0)
			.width(46)
			.height(75)
			.texture(gameTexture[2])
			.translateTo(-265, 173, 0)
			.mount(nodeSSBeauties);
			
		// banana1
		nodeSSBeauties.obj[25] = new GameElement()
			.id('banana1')
			.depth(0)
			.width(34)
			.height(45)
			.texture(gameTexture[0])
			.translateTo(-288, 186, 0)
			.mount(nodeSSBeauties);			
		
		
		// painting on floor 1 slot 13
		nodeSSBeauties.obj[24] = new GameElement()
			.id('painting13')
			.depth(0)
			.width(77)
			.height(63)
			.texture(gameTexture[5])
			.translateTo(225, 155, 0)
			.mount(nodeSSBeauties);
			
			
		// Beauties Floor 0
		
		// bin on floor 0
		nodeSSBeauties.obj[23] = new GameElement()
			.id('lobbybin')
			.depth(0)
			.width(25)
			.height(50)
			.texture(gameTexture[1])
			.translateTo(75, 285, 0)
			.mount(nodeSSBeauties);
		
	        // Adding Top Lamps !
		// Create lamp01
		nodeSSBeauties.obj[0] = new GameElement()
			.id('lamp11')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 225, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp02
		nodeSSBeauties.obj[1] = new GameElement()
			.id('lamp12')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 225, 0)
			.mount(nodeSSBeauties);			
                                                
		// Create lamp11
		nodeSSBeauties.obj[3] = new GameElement()
			.id('lamp21')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 125, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp12
		nodeSSBeauties.obj[4] = new GameElement()
			.id('lamp22')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 125, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp21
		nodeSSBeauties.obj[5] = new GameElement()
			.id('lamp21')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, 25, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp22
		nodeSSBeauties.obj[6] = new GameElement()
			.id('lamp22')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, 25, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp31
		nodeSSBeauties.obj[7] = new GameElement()
			.id('lamp31')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -75, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp32
		nodeSSBeauties.obj[8] = new GameElement()
			.id('lamp32')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -75, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp41
		nodeSSBeauties.obj[9] = new GameElement()
			.id('lamp41')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -175, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp42
		nodeSSBeauties.obj[10] = new GameElement()
			.id('lamp42')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -175, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp51
		nodeSSBeauties.obj[11] = new GameElement()
			.id('lamp51')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -275, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp52
		nodeSSBeauties.obj[12] = new GameElement()
			.id('lamp52')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -275, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp61
		nodeSSBeauties.obj[13] = new GameElement()
			.id('lamp61')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -375, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp62
		nodeSSBeauties.obj[14] = new GameElement()
			.id('lamp62')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -375, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp71
		nodeSSBeauties.obj[15] = new GameElement()
			.id('lamp71')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -475, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp72
		nodeSSBeauties.obj[16] = new GameElement()
			.id('lamp72')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -475, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp81
		nodeSSBeauties.obj[17] = new GameElement()
			.id('lamp81')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -575, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp82
		nodeSSBeauties.obj[18] = new GameElement()
			.id('lamp82')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -575, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp91
		nodeSSBeauties.obj[19] = new GameElement()
			.id('lamp91')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -675, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp92
		nodeSSBeauties.obj[20] = new GameElement()
			.id('lamp92')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -675, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp101
		nodeSSBeauties.obj[21] = new GameElement()
			.id('lamp101')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -775, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp1102
		nodeSSBeauties.obj[22] = new GameElement()
			.id('lamp102')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -775, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp111
		nodeSSBeauties.obj[21] = new GameElement()
			.id('lamp111')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(-275, -875, 0)
			.mount(nodeSSBeauties);
			
		// Create lamp112
		nodeSSBeauties.obj[22] = new GameElement()
			.id('lamp112')
			.depth(1)
			.width(65)
			.height(25)
			.texture(gameTexture[4])
			.translateTo(275, -875, 0)
			.mount(nodeSSBeauties);			
	   
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }