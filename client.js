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
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the scene
					self.scene1 = new IgeScene2d();
					

					// Create the main viewport
					self.vp1 = new IgeViewport()
						.autoSize(true)
						.scene(self.scene1)
						.drawBounds(false)
						.mount(ige);

					// Create an entity
					self.obj[0] = new Loop()
						.mount(self.scene1);

                    // Create the UI scene
                    self.obj[1] = new IgeScene2d().depth(2)
                        .mount(self.scene1);

                    self.obj[2] = new IgeUiEntity()
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
                        .mount(self.obj[1]);
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }