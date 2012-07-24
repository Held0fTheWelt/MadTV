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
	    this.obj[5]  = this.loadCharacter().mount(skyscraper);
		    
            
        },    
    tick: function (ctx) {
	var y = this.obj[4].getHeading();
      
        if(y>0)
        {   //this.obj[4].setVelocity(-0.2);
	    this.obj[1].velocity.y(0.15);		
	    this.obj[0].velocity.y(0.015);
	 console.log("downwards");
        } else if (y<0){
	    //this.obj[4].setVelocity(0.2);
	  this.obj[1].velocity.y(-0.15);		
	  this.obj[0].velocity.y(-0.015);
	  console.log("upwards");
        } else if(y == 0){
	  this.obj[1].velocity.y(0);		
	  this.obj[0].velocity.y(0);
	  console.log("stay");	    
	}
	this._super(ctx);
    }
    

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }