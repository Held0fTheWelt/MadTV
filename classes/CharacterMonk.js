var CharacterMonk = IgeEntity.extend({
    classId: 'CharacterMonk',
        init: function () {
            this._super();
gameTexture = [];	
	    gameTexture[1] = new IgeCellSheet('vx_chara02_c.png', 12, 8);	    
	    
	    this.addComponent(IgeAnimationComponent)
		.addComponent(IgeVelocityComponent)
		.animation.define('walkDown', [10, 11, 12, 11], 8, -1)
		.animation.define('walkLeft', [22, 23, 24, 23], 8, -1)
		.animation.define('walkRight', [34, 35, 36, 35], 8, -1)
		.animation.define('walkUp', [46, 47, 48, 47], 8, -1)
		.animation.define('stop', [11, 11, 11, 11], 8, -1)
		.animation.define('walkin', [47, 47, 47, 47], 8, -1)
		.cell(10)
		.depth(1)
		.texture(gameTexture[1])
		.height(90)
		.width(50);
			
	    this.input.map('mouseX', this.input.mouse.x);
	    this.input.map('mouseY', this.input.mouse.y);		    
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
		}/*else if (this.translate().x() > -20 || this.translate().x() < 20) {
		    this.velocity.x(0)
				.velocity.y(0)
				.translateTo(x, y, 0);
				//this.animation.select('walkin');
		
		}*/
		else {
			this.velocity.x(0)
				.velocity.y(0)
				.translateTo(x, y, 0);
			this.animation.select('stop');
		}

		return this;
	},

	tick: function (ctx) {
		this.walkTo(this.input.val('mouseX'),this.translate().y());
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }