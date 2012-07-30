var Loop = IgeEntity.extend({
	classId:'Loop',
	loadBackground:function () {
		// Create our background
		return new GameElement()
			.id('background')
			.depth(0)
			.width(1200)
			.height(1200)
			.texture(gameTexture[0])
			.translateTo(0, -140, 0)
			.addComponent(IgeVelocityComponent);
	},
    loadSkyscraper: function () {
        // Create the Skyscraper
        return new Skyscraper().depth(1)
            .translateTo(0, 310, 0)
            .addComponent(IgeVelocityComponent);
    },
    loadSkyscraperRooms: function() {
        // Create the Skyscraper
        return new Rooms().depth(1);
    },
    loadElevator: function() {
        return new FloorScene().depth(2).translateTo(2, -47, 0);
    },
	init:function () {

		this._super();
		// Load our textures
		gameTexture = [];
		//this.testElevator = null;
		this.obj = [];
		gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');

		this.obj[0] = this.loadBackground().mount(this);
        this.obj[1] = this.loadSkyscraper().mount(this);
        this.obj[2] = this.loadSkyscraperRooms().mount(this.obj[1]);
        this.obj[3] = this.loadElevator().mount(this.obj[1]);
	},

	getBackgroundPosition:function (floor) {
		if (this.obj[4].obj[1].currentFloor == 0) {
			return -110;
		} else if (this.obj[4].obj[1].currentFloor == 1) {
			return -102.5;
		} else if (this.obj[4].obj[1].currentFloor == 2) {
			return -95;
		} else if (this.obj[4].obj[1].currentFloor == 3) {
			return -87.5;
		} else if (this.obj[4].obj[1].currentFloor == 4) {
			return -80;
		} else if (this.obj[4].obj[1].currentFloor == 5) {
			return -72.5;
		} else if (this.obj[4].obj[1].currentFloor == 6) {
			return -65;
		} else if (this.obj[4].obj[1].currentFloor == 7) {
			return -57.5;
		} else if (this.obj[4].obj[1].currentFloor == 8) {
			return -50;
		} else if (this.obj[4].obj[1].currentFloor == 9) {
			return -42.5;
		} else if (this.obj[4].obj[1].currentFloor == 10) {
			return -35;
		} else if (this.obj[4].obj[1].currentFloor == 11) {
			return -27.5;
		} else if (this.obj[4].obj[1].currentFloor == 12) {
			return -25;
		} else return -110;

	},
	getSkyscraperPosition:function (floor) {
		if (this.obj[4].obj[1].currentFloor == 0) {
			return 0;
		} else if (this.obj[4].obj[1].currentFloor == 1) {
			return 60;
		} else if (this.obj[4].obj[1].currentFloor == 2) {
			return 120;
		} else if (this.obj[4].obj[1].currentFloor == 3) {
			return 180;
		} else if (this.obj[4].obj[1].currentFloor == 4) {
			return 240;
		} else if (this.obj[4].obj[1].currentFloor == 5) {
			return 300;
		} else if (this.obj[4].obj[1].currentFloor == 6) {
			return 360;
		} else if (this.obj[4].obj[1].currentFloor == 7) {
			return 420;
		} else if (this.obj[4].obj[1].currentFloor == 8) {
			return 480;
		} else if (this.obj[4].obj[1].currentFloor == 9) {
			return 540;
		} else if (this.obj[4].obj[1].currentFloor == 10) {
			return 600;
		} else if (this.obj[4].obj[1].currentFloor == 11) {
			return 660;
		} else if (this.obj[4].obj[1].currentFloor == 12) {
			return 720;
		} else return 0;

	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
	module.exports = Client;
}