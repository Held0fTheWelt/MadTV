var TVTSkyScraperRooms = IgeEntity.extend({
    classId: 'TVTSkyScraperRooms',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeSSRooms = this;
            var gameTexture = [];

            this.obj = [];
	    // The closed lobby
            gameTexture[0] = new IgeTexture('assets/textures/accessoires/lobby/lobbyClosed.jpg');
	    // The signboard
            gameTexture[1] = new IgeTexture('assets/textures/accessoires/lobby/signboard.jpg');
	    // Bureau door 1 closed
	    gameTexture[2] = new IgeTexture('assets/textures/accessoires/bureau/buro11.jpg');
	    // Bureau door 2 closed
	    gameTexture[3] = new IgeTexture('assets/textures/accessoires/bureau/buro21.jpg');
	    // Bureau door 3 closed
	    gameTexture[4] = new IgeTexture('assets/textures/accessoires/bureau/buro31.jpg');
	    // The elevator body
	    gameTexture[5] = new IgeTexture('assets/textures/elevators/outerelevator.png');
	    
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		// Create the Lobbyman doors
		nodeSSRooms.obj[0] = new GameElement()
			.id('lobby')
			.depth(2)
			.width(153)
			.height(86)
			.texture(gameTexture[0])
			.translateTo(-300, 265, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 0
		nodeSSRooms.obj[19] = new GameElement()
		    .id('elevatorfloor0')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, 263, 0)
		    .mount(nodeSSRooms);			
                                                
                // Create our Signboard
		nodeSSRooms.obj[1] = new GameElement()
			.id('signboard')
			.depth(2)
			.width(64)
			.height(50)
			.texture(gameTexture[1])
			.translateTo(300, 255, 0)
			.mount(nodeSSRooms);
                                        
                // Create Bureau on Slot 1.1
		nodeSSRooms.obj[2] = new GameElement()
			.id('bureau11')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-325, 168, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 1
		nodeSSRooms.obj[20] = new GameElement()
		    .id('elevatorfloor1')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, 163, 0)
		    .mount(nodeSSRooms);			
				
		// Create Bureau on Slot 1.4
		nodeSSRooms.obj[3] = new GameElement()
			.id('bureau14')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, 168, 0)
			.mount(nodeSSRooms);
						
		// Create Bureau on Slot 2.2
		nodeSSRooms.obj[4] = new GameElement()
			.id('bureau22')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, 68, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 2
		nodeSSRooms.obj[21] = new GameElement()
		    .id('elevatorfloor2')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, 63, 0)
		    .mount(nodeSSRooms);			
						
		// Create Bureau on Slot 2.3
		nodeSSRooms.obj[5] = new GameElement()
			.id('bureau23')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(225, 68, 0)
			.mount(nodeSSRooms);

		// Create Bureau on Slot 2.4
		nodeSSRooms.obj[6] = new GameElement()
			.id('bureau24')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, 68, 0)
        		.mount(nodeSSRooms);
						
           	// Create Bureau on Slot 3.1
           	nodeSSRooms.obj[7] = new GameElement()
            		.id('bureau31')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(-325, -32, 0)
        		.mount(nodeSSRooms);
                                                                        
                // Create Bureau on Slot 3.2
		nodeSSRooms.obj[8] = new GameElement()
			.id('bureau32')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-225, -32, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 3
		nodeSSRooms.obj[22] = new GameElement()
		    .id('elevatorfloor3')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -37, 0)
		    .mount(nodeSSRooms);
						
		// Create Bureau on Slot 3.4
		nodeSSRooms.obj[9] = new GameElement()
			.id('bureau34')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(325, -32, 0)
			.mount(nodeSSRooms);
						
		// Create Bureau on Slot 4.1
		nodeSSRooms.obj[10] = new GameElement()
			.id('bureau41')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -132, 0)
			.mount(nodeSSRooms);
						
		// Create Bureau on Slot 4.2
		nodeSSRooms.obj[11] = new GameElement()
			.id('bureau42')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -132, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 4
		nodeSSRooms.obj[23] = new GameElement()
		    .id('elevatorfloor4')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -137, 0)
		    .mount(nodeSSRooms);			
			
		// Create Bureau on Slot 4.3
		nodeSSRooms.obj[12] = new GameElement()
			.id('bureau43')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -132, 0)
        		.mount(nodeSSRooms);
						
           	// Create Bureau on Slot 4.4
           	nodeSSRooms.obj[13] = new GameElement()
            		.id('bureau44')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -132, 0)
        		.mount(nodeSSRooms);
                        
		// Create Bureau on Slot 5.2
		nodeSSRooms.obj[14] = new GameElement()
			.id('bureau52')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-225, -232, 0)
        		.mount(nodeSSRooms);
						
		// Create elevator - floor 5
		nodeSSRooms.obj[24] = new GameElement()
		    .id('elevatorfloor5')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -237, 0)
		    .mount(nodeSSRooms);
						
           	// Create Bureau on Slot 5.3
           	nodeSSRooms.obj[15] = new GameElement()
            		.id('bureau53')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(225, -232, 0)
        		.mount(nodeSSRooms);
                                              
                // Create Bureau on Slot 6.1
		nodeSSRooms.obj[16] = new GameElement()
			.id('bureau61')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-325, -332, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 6
		nodeSSRooms.obj[25] = new GameElement()
		    .id('elevatorfloor6')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -337, 0)
		    .mount(nodeSSRooms);
						
		// Create Bureau on Slot 6.4
		nodeSSRooms.obj[17] = new GameElement()
			.id('bureau64')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(325, -332, 0)
			.mount(nodeSSRooms);
			
		// Create Bureau on Slot 7.1
		nodeSSRooms.obj[18] = new GameElement()
			.id('bureau71')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -432, 0)
			.mount(nodeSSRooms);
						
		// Create Bureau on Slot 7.2
		nodeSSRooms.obj[19] = new GameElement()
			.id('bureau72')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -432, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 7
		nodeSSRooms.obj[26] = new GameElement()
		    .id('elevatorfloor7')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -437, 0)
		    .mount(nodeSSRooms);			
			
		// Create Bureau on Slot 7.3
		nodeSSRooms.obj[20] = new GameElement()
			.id('bureau73')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -432, 0)
        		.mount(nodeSSRooms);
						
           	// Create Bureau on Slot 7.4
           	nodeSSRooms.obj[21] = new GameElement()
            		.id('bureau74')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -432, 0)
        		.mount(nodeSSRooms);
			
		// Create Bureau on Slot 8.2
		nodeSSRooms.obj[22] = new GameElement()
			.id('bureau82')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, -532, 0)
        		.mount(nodeSSRooms);

		// Create elevator - floor 8
		nodeSSRooms.obj[27] = new GameElement()
		    .id('elevatorfloor8')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -537, 0)
		    .mount(nodeSSRooms);			
						
           	// Create Bureau on Slot 8.3
           	nodeSSRooms.obj[23] = new GameElement()
            		.id('bureau83')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[2])
        		.translateTo(225, -532, 0)
        		.mount(nodeSSRooms);			
	
		// Create Bureau on Slot 9.1
		nodeSSRooms.obj[14] = new GameElement()
			.id('bureau91')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(-325, -632, 0)
        		.mount(nodeSSRooms);

		// Create elevator - floor 9
		nodeSSRooms.obj[28] = new GameElement()
		    .id('elevatorfloor9')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -637, 0)
		    .mount(nodeSSRooms);
						
           	// Create Bureau on Slot 9.3
           	nodeSSRooms.obj[15] = new GameElement()
            		.id('bureau93')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[3])
        		.translateTo(225, -632, 0)
        		.mount(nodeSSRooms);
                                              
		// Create Bureau on Slot 9.4
		nodeSSRooms.obj[14] = new GameElement()
			.id('bureau94')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[3])
			.translateTo(325, -632, 0)
        		.mount(nodeSSRooms);

		// Create Bureau on Slot 10.1
		nodeSSRooms.obj[18] = new GameElement()
			.id('bureau101')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -732, 0)
			.mount(nodeSSRooms);
						
		// Create Bureau on Slot 10.2
		nodeSSRooms.obj[19] = new GameElement()
			.id('bureau102')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-225, -732, 0)
			.mount(nodeSSRooms);

		// Create elevator - floor 10
		nodeSSRooms.obj[29] = new GameElement()
		    .id('elevatorfloor10')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -737, 0)
		    .mount(nodeSSRooms);
			
		// Create Bureau on Slot 10.3
		nodeSSRooms.obj[20] = new GameElement()
			.id('bureau103')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(225, -732, 0)
        		.mount(nodeSSRooms);
						
           	// Create Bureau on Slot 10.4
           	nodeSSRooms.obj[21] = new GameElement()
            		.id('bureau104')
        		.depth(2)
        		.width(70)
        		.height(84)
        		.texture(gameTexture[4])
        		.translateTo(325, -732, 0)
        		.mount(nodeSSRooms);			

		// Create Bureau on Slot 11.2
		nodeSSRooms.obj[22] = new GameElement()
			.id('bureau112')
			.depth(2)
			.width(43)
			.height(80)
			.texture(gameTexture[2])
			.translateTo(-225, -832, 0)
        		.mount(nodeSSRooms);

		// Create elevator - floor 11
		nodeSSRooms.obj[30] = new GameElement()
		    .id('elevatorfloor11')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -837, 0)
		    .mount(nodeSSRooms);
						
           	// Create Bureau on Slot 11.3
           	nodeSSRooms.obj[23] = new GameElement()
            		.id('bureau113')
        		.depth(2)
        		.width(43)
        		.height(80)
        		.texture(gameTexture[2])
        		.translateTo(225, -832, 0)
        		.mount(nodeSSRooms);			

		// Create Bureau on Slot 12.1
		nodeSSRooms.obj[18] = new GameElement()
			.id('bureau101')
			.depth(2)
			.width(70)
			.height(84)
			.texture(gameTexture[4])
			.translateTo(-325, -932, 0)
			.mount(nodeSSRooms);
			
		// Create elevator - floor 12
		nodeSSRooms.obj[31] = new GameElement()
		    .id('elevatorfloor12')
		    .depth(2)
		    .width(87)
		    .height(89)
		    .texture(gameTexture[5])
		    .translateTo(0, -937, 0)
		    .mount(nodeSSRooms);			
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }