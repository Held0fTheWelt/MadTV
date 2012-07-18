var clientLoop = IgeEntity.extend({
    classId: 'clientLoop',
    
    testElevator: 0,
    tick: function (ctx) {
        testElevator = rootNode.obj[4].cart.translate();
        var y = testElevator.y();
        if(y>=263)
        {   rootNode.obj[4].cart.velocity.y(-0.2);
	    skyscraper.velocity.y(0.15);		
	    background.velocity.y(0.015);        
        } else if (y<=-937){
            rootNode.obj[4].cart.velocity.y(0.2);
	    skyscraper.velocity.y(-0.15);		
	    background.velocity.y(-0.015);
        }
	this._super(ctx);
    },
    gameTexture:[],
        loadBackground: function() {
            // Create our background
	    rootNode.obj[0]= background = new GameElement()
                    .id('background')
                    .depth(0)
                    .width(1200)
		    .height(850)
                    .texture(gameTexture[0])
                    .translateTo(0, -110, 0)
                    .mount(rootNode);
	    background.addComponent(IgeVelocityComponent);                    
        },
        loadSkyscraper: function() {
	    // Create our Skyscraper
            rootNode.obj[1] = skyscraper = new TVTSkyScraper();
            skyscraper.depth(1);
            skyscraper.mount(rootNode);
            skyscraper.addComponent(IgeVelocityComponent);            
        },
        loadSkyscraperRooms: function() {
	    // Create our Skyscraper Rooms
            rootNode.obj[2] = skyscraperRooms = new TVTSkyScraperRooms()
                .depth(3)
                .mount(skyscraper);            
        },
        loadSkyscraperBeauties: function(){
            // Add our beauties
            rootNode.obj[3] = new TVTSkyScraperBeauties().depth(4)
                    .mount(skyscraper);					
            
        },
        loadElevator: function(){
	    // Create the elevator scene
            rootNode.obj[4] = new TVTElevator().depth(3)
		.mount(skyscraper);
        },
        init: function () {
            
            this._super();
            // Load our textures
            rootNode = this;
            gameTexture = [];

            this.obj = [];
            gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');
            
            this.loadBackground();
            this.loadSkyscraper();
            this.loadSkyscraperRooms();
            this.loadSkyscraperBeauties();
            this.loadElevator();
            
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }