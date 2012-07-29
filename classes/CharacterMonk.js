var CharacterMonk = IgeEntity.extend({
    classId: 'CharacterMonk',
        init: function () {
	    this.flag = 0;
            this._super();     
        },

	walkTo: function (x, y) {
		
			distX = x - this.translate().x(),
			distY = y - this.translate().y(),
			distance = Math.distance(
				this.translate().x(),
				this.translate().y(),
				x,
				y
			),
			speed = 0.1,
			time = (distance / speed);

		if (Math.abs(distX) > 1 || Math.abs(distY) > 1) {
			this.velocity.x(distX / time);
			this.velocity.y(distY / time);

			if (Math.abs(distX) > Math.abs(distY)) {
				// Moving horizontal
				if (distX < 0) {
					// Moving left
					this.animation.select('walkLeft');
				} else {
					// Moving right
					this.animation.select('walkRight');
				}
			} else {
				// Moving vertical
				if (distY < 0) {
					// Moving up
					this.animation.select('walkUp');
				} else {
					// Moving down
					this.animation.select('walkDown');
				}
			}
		} else {
			this.flag = 1;
			// stop the animation
			this.animation.stop();
			// set image to cell 10
			this.cell(10);			
			this.velocity.x(0)
				.velocity.y(0)
				.translateTo(x, y, 0);
		}

		return this;
	},

	tick: function (ctx) {
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }