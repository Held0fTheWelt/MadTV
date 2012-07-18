var Client = IgeClass.extend({
	classId: 'Client',
		
	init: function () {
		// Load our textures
		var self = this,
		gameTexture = [];

		this.obj = [];
				
		gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');
		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the parent scene
					self.main = new IgeScene2d();

					// Create the main viewport
					self.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(self.main)
						.drawBounds(false)
						.mount(ige);

					// Create the parentNode
					self.parentNode = new clientLoop();
					self.parentNode.mount(self.main);

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

				
					/*	
						
					tempObj2.addComponent(IgeVelocityComponent);
					tempObj2.velocity.y(0.01);						


						
					// Create our Skyscraper

					tempObj.addComponent(IgeVelocityComponent);
					tempObj.velocity.y(0.1);*/
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }