var clientLoop = IgeEntity.extend({
    classId: 'clientLoop',
        loadBackground: function() {
            // Create our background
	    return new GameElement()
                    .id('background')
                    .depth(0)
                    .width(1200)
		    .height(850)
                    .texture(gameTexture[0])
                    .translateTo(0, -110, 0)
		    .addComponent(IgeVelocityComponent);
        },
        loadSkyscraper: function() {
	    // Create our Skyscraper
            return new TVTSkyScraper().depth(1).addComponent(IgeVelocityComponent);  
        },
        loadSkyscraperRooms: function() {
	    // Create our Skyscraper Rooms
            return new TVTSkyScraperRooms().depth(3);            
        },
        loadSkyscraperBeauties: function(){
            // Add our beauties
            return new TVTSkyScraperBeauties().depth(4);					
            
        },
        loadElevator: function(){
	    // Create the elevator scene
            return new TVTElevator().depth(3);
	    
		
        },
	loadCharacter: function(){
	    // Create the elevator scene
            return new CharacterMonk().depth(4)
		.translateTo(400, -233, 0);
	    
	},
        init: function () {
            
            this._super();
            // Load our textures
            rootNode = this;
            gameTexture = [];
	    //this.testElevator = null;
            this.obj = [];
            gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');
            
	    
            this.obj[0]= background = this.loadBackground().mount(rootNode);
	    
            this.obj[1] = skyscraper = this.loadSkyscraper().mount(rootNode);

            this.obj[2] = skyscraperRooms = this.loadSkyscraperRooms().mount(skyscraper);
            
	    
            this.obj[3] = this.loadSkyscraperBeauties().mount(skyscraper);
            this.obj[4] = this.loadElevator().mount(skyscraper);
	    //this.obj[5]  = this.loadCharacter().mount(skyscraper);

		    
            
        },

    getBackgroundPosition: function(floor){
	if(this.obj[4].obj[1].currentFloor == 0){
	    return -110;
	} else if(this.obj[4].obj[1].currentFloor == 1){
	    return -102.5;
	} else if(this.obj[4].obj[1].currentFloor == 2){
	    return -95;
	} else if(this.obj[4].obj[1].currentFloor == 3){
	    return -87.5;
	} else if(this.obj[4].obj[1].currentFloor == 4){
	    return -80;
	} else if(this.obj[4].obj[1].currentFloor == 5){
	    return -72.5;
	} else if(this.obj[4].obj[1].currentFloor == 6){
	    return -65;
	} else if(this.obj[4].obj[1].currentFloor == 7){
	    return -57.5;
	} else if(this.obj[4].obj[1].currentFloor == 8){
	    return -50;
	} else if(this.obj[4].obj[1].currentFloor == 9){
	    return -42.5;
	} else if(this.obj[4].obj[1].currentFloor == 10){
	    return -35;
	} else if(this.obj[4].obj[1].currentFloor == 11){
	    return -27.5;
	} else if(this.obj[4].obj[1].currentFloor == 12){
	    return -25;
	} else return -110;
	
    },
    getSkyscraperPosition: function(floor){
	if(this.obj[4].obj[1].currentFloor == 0){
	    return 0;
	} else if(this.obj[4].obj[1].currentFloor == 1){
	    return 60;
	} else if(this.obj[4].obj[1].currentFloor == 2){
	    return 120;
	} else if(this.obj[4].obj[1].currentFloor == 3){
	    return 180;
	} else if(this.obj[4].obj[1].currentFloor == 4){
	    return 240;
	} else if(this.obj[4].obj[1].currentFloor == 5){
	    return 300;
	} else if(this.obj[4].obj[1].currentFloor == 6){
	    return 360;
	} else if(this.obj[4].obj[1].currentFloor == 7){
	    return 420;
	} else if(this.obj[4].obj[1].currentFloor == 8){
	    return 480;
	} else if(this.obj[4].obj[1].currentFloor == 9){
	    return 540;
	} else if(this.obj[4].obj[1].currentFloor == 10){
	    return 600;
	} else if(this.obj[4].obj[1].currentFloor == 11){
	    return 660;
	} else if(this.obj[4].obj[1].currentFloor == 12){
	    return 720;
	} else return 0;
	
    },
    tick: function (ctx) {
	//this.obj[5].walkTo(this.obj[5].input.val('mouseX'),this.obj[5].input.val('mouseY'));
	// gettomg the ticktime
	var delta = ige.tickDelta;
	//console.log(this.obj[4].currentFloor);
	
	// if elevator exists
	if(this.obj[4].obj[1]){
	    console.log(this.obj[4].getCurrentHeading());
	    // if the currentFloor ist not where we want to be
	    if(this.obj[4].currentFloor != this.obj[4].currentHeading){
		// if counter time is between 500 an 300 ms close the elevator and take some portion of time
		if(this.obj[4].count >= 1){
		    this.obj[4].obj[1].animation.select('close');
		    this.obj[4].count-=delta;
		}
		// if counter time is zero or below ms let the elevator be opened 
		// tell elevator to set startHeading Tag (do we need that any longer ? we'll see)
		// move the elevator into direction we want it to be (getFloorHeight(currentHeading) organizes the prepared Y position we want to go)
		// check elevator if we are moving up or down
		// if up (y < 0) -> move skyscraper and background downwards
		// if down (y > 0) -> move skyscraper and background upwards
		else {
		    
		    this.obj[4].startHeading = 1;
		    this.obj[4].obj[1].animation.select('closed');		    
		    this.obj[4].obj[1].moveTo(0,this.obj[4].getFloorsHeight(this.obj[4].currentHeading));
		    this.obj[4].obj[2].translateTo(0,this.obj[4].obj[1].translate().y() , 0);
		    this.obj[4].obj[3].translateTo(0,this.obj[4].obj[1].translate().y() , 0);
		    var y = this.obj[4].currentFloor - this.obj[4].currentHeading;
		    
		    if(y<0) {   
			this.obj[1].velocity.y(0.15);		
			this.obj[0].velocity.y(0.015);
		    } else if (y>0) {
			this.obj[1].velocity.y(-0.15);		
			this.obj[0].velocity.y(-0.015);
		    }		
		
		    this.obj[4].count = 0;
		}		    
	    // if we are on the current floor we want to be
	    }else{

		// if counter time is between 0 and 200
		if(this.obj[4].count <= 549){
		    // look that the elevator, skyscraper and background are in place, close the elevator and add some amount of time
		    // stop movement
		    this.obj[1].velocity.y(0);		
		    this.obj[0].velocity.y(0);
		    this.obj[1].translateTo(0, this.getSkyscraperPosition(this.obj[4].obj[1].currentFloor), 0);
		    this.obj[0].translateTo(0, this.getBackgroundPosition(this.obj[4].obj[1].currentFloor), 0);
		    this.obj[4].obj[1].translateTo(0, this.obj[4].getFloorsHeight(this.obj[4].currentHeading), 0);
		    this.obj[4].obj[1].animation.select('open');
		    this.obj[4].obj[1].count+=delta;
    
		}
		// if counter time is 500 or above let the elevator opened and add some time
		else {
		    this.obj[4].obj[1].animation.select('opened');
		    this.obj[4].count = 550;
		    console.log("bin da");
		    this.obj[4].setCurrentHeading(2);
		    console.log(this.obj[4].currentHeading);
		    if(this.obj[4].currentFloor == 0){
			this.obj[4].currentHeading = 1;
		    }else if(this.obj[4].currentFloor == 1){
			console.log("bin da");
			this.obj[4].currentHeading = 2;
		    }else if(this.obj[4].currentFloor == 2){
			this.obj[4].currentHeading = 3;
		    }else if(this.obj[4].currentFloor == 3){
			this.obj[4].currentHeading = 4;
		    }else if(this.obj[4].currentFloor == 4){
			this.obj[4].currentHeading = 5;
		    }else if(this.obj[4].currentFloor == 5){
			this.obj[4].currentHeading = 6;
		    }else if(this.obj[4].currentFloor == 6){
			this.obj[4].currentHeading = 7;
		    }else if(this.obj[4].currentFloor == 7){
			this.obj[4].currentHeading = 8;
		    }else if(this.obj[4].currentFloor == 8){
			this.obj[4].currentHeading = 9;
		    }else if(this.obj[4].currentFloor == 9){
			this.obj[4].currentHeading = 10;
		    }else if(this.obj[4].currentFloor == 10){
			this.obj[4].currentHeading = 11;
		    }else if(this.obj[4].currentFloor == 11){
			this.obj[4].currentHeading = 12;
		    }else if(this.obj[4].currentFloor == 12){
			this.obj[4].currentHeading = 0;
		    }
		}		    
	    }
	}
	this._super(ctx);
    }
    

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }