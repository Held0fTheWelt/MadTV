var clientLoop = IgeEntity.extend({
    classId: 'clientLoop',
    parentNode:this,
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
        },
        loadSkyscraper: function() {
	    // Create our Skyscraper
            rootNode.obj[1] = skyscraper = new TVTSkyScraper();
            skyscraper.depth(1);
            skyscraper.mount(rootNode);            
        },
        loadSkyscraperRooms: function() {
	    // Create our Skyscraper Rooms
            rootNode.obj[2] = skyscraperRooms = new TVTSkyScraperRooms();
            skyscraperRooms.depth(3);
            skyscraperRooms.mount(skyscraper);            
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