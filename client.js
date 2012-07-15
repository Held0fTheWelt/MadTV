var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
		// Load our textures
		var self = this,
		gameTexture = [];

		this.obj = [];

		gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');

		gameTexture[4] = new IgeTexture('assets/textures/sprites/elevators/elevatorcart.png');

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {


					var VerticalMovement = IgeEntity.extend({
						tick: function (ctx) {

							this._super(ctx);
						}
					});
					
					
					// Create the parent scene
					self.main = new IgeScene2d();
					// Create the game scene
					self.game = new IgeScene2d();
					self.game.mount(self.main);
					
					
					// Create the main viewport
					self.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(self.main)
						.drawBounds(false)
						.mount(ige);

					// Create the background scene
					self.background = new IgeScene2d().depth(0);
					self.background.mount(self.game);						
						
					// Create our background
					self.obj[1]= tempObj2 = new GameElement()
						.id('background')
						.depth(0)
						.width(1000)
						.height(850)
						.texture(gameTexture[0])
						.translateTo(0, -110, 0)
						.mount(self.game);
						
					//tempObj2.addComponent(IgeVelocityComponent);
					//tempObj2.velocity.y(0.01);						

					// Create the UI scene
					self.ui = new IgeScene2d().depth(2)
						.mount(self.main);
						

					self.obj[0] = new IgeUiEntity()
						.id('bottomBar')
						.depth(1)
						.backgroundColor('#474747')
						.left(0)
						.bottom(0)
						.width('100%')
						.height(150)
						.borderTopColor('#666666')
						.borderTopWidth(1)
						.backgroundPosition(0, 0)
						.mouseOver(function () {this.backgroundColor('#49ceff'); })
						.mouseOut(function () {this.backgroundColor('#474747'); })
						.mount(self.ui);

						
					// Create our Skyscraper
					self.obj[2] = tempObj = new TVTSkyScraper();
					//tempObj.addComponent(IgeVelocityComponent);
					//tempObj.velocity.y(0.1);
					tempObj.depth(1);
					tempObj.mount(self.game);
					
					// Create our Skyscraper Rooms
					self.obj[3] = tempObj3 = new TVTSkyScraperRooms();
					tempObj3.depth(3);
					tempObj3.mount(self.obj[2]);
						
					// Create the elevator scene
					self.elevator = new IgeScene2d().depth(2);
					self.elevator.mount(self.game);
					
					// Create walls - floor 2
					self.obj[10] = new VerticalMovement()
						.id('elevatorcart')
						.depth(2)
						.width(77)
						.height(89)
						.texture(gameTexture[4])
						.translateTo(0, 260, 0)
						.mount(self.game);					
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }