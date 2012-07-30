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
    loadCharacter: function(){
        return new Character().depth(2).translateTo(0, 5, 0)
            .addComponent(PlayerComponent)
            .setType(4);

    },
    getFloorsHeight: function(floornumber){
        switch(floornumber){
            case 0: return 0;
                break;
            case 1: return -100;
                break;
            case 2: return -200;
                break;
            case 3: return -300;
                break;
            case 4: return -400;
                break;
            case 5: return -500;
                break;
            case 6: return -600;
                break;
            case 7: return -700;
                break;
            case 8: return -800;
                break;
            case 9: return -900;
                break;
            case 10: return -1000;
                break;
            case 11: return -1100;
                break;
            case 12: return -1200;
                break;
        }
    },
	init:function () {

		this._super();
        var rootNode = this;
		// Load our textures
		gameTexture = [];
		//this.testElevator = null;
		this.obj = [];
		gameTexture[0] = new IgeTexture('assets/textures/backgrounds/backgroundType.jpg');

        rootNode.obj[0] = this.loadBackground().mount(this);
        rootNode.obj[1] = this.loadSkyscraper().mount(this);
        rootNode.obj[2] = this.loadSkyscraperRooms().mount(this.obj[1]);
        rootNode.obj[3] = this.loadElevator().mount(this.obj[1]);
        rootNode.obj[4] = this.loadCharacter().mount(this.obj[3]);

        ige.addBehaviour("tick", function () {
            var y = rootNode.obj[3].currentFloor;
         /*   switch (y) {
                case 0: rootNode.obj[3].currentHeading = 1;
                    break;
                case 1: rootNode.obj[3].currentHeading = 2;
                    break;
                case 2: rootNode.obj[3].currentHeading = 3;
                    break;
                case 3: rootNode.obj[3].currentHeading = 4;
                    break;
                case 4: rootNode.obj[3].currentHeading = 5;
                    break;
                case 5: rootNode.obj[3].currentHeading = 6;
                    break;
                case 6: rootNode.obj[3].currentHeading = 7;
                    break;
                case 7: rootNode.obj[3].currentHeading = 8;
                    break;
                case 8: rootNode.obj[3].currentHeading = 9;
                    break;
                case 9: rootNode.obj[3].currentHeading = 10;
                    break;
                case 10: rootNode.obj[3].currentHeading = 11;
                    break;
                case 11: rootNode.obj[3].currentHeading = 12;
                    break;
                case 12: rootNode.obj[3].currentHeading = 0;
                    break;
            }*/
            var direction = rootNode.obj[3].currentHeading - rootNode.obj[3].currentFloor;

            if(direction > 0){
                rootNode.obj[0].velocity.y(0.015);
                rootNode.obj[1].velocity.y(0.15);
                rootNode.obj[3].obj[0].velocity.y(-0.25);
            } else if (direction < 0){
                rootNode.obj[0].velocity.y(-0.015);
                rootNode.obj[1].velocity.y(-0.15);
                rootNode.obj[3].obj[0].velocity.y(0.25);
            } else {
                rootNode.obj[0].velocity.y(0);
                rootNode.obj[1].velocity.y(0);
                rootNode.obj[3].obj[0].velocity.y(0);
            }

            var elevatorpos = rootNode.obj[3].obj[0].translate().y();
            elevatorpos-=rootNode.getFloorsHeight(rootNode.obj[3].currentHeading);

            if(elevatorpos  >= -10 && elevatorpos <= 10){
                rootNode.obj[3].currentFloor = rootNode.obj[3].currentHeading;
            }

        });
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