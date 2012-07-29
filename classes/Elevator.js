var Elevator = IgeEntity.extend({
    classId: 'Elevator',
        init: function () {
	    this.flag = 0;
	    this._super();
	    
        },

	moveTo: function (x,y) {
		
		distX = x - this.translate().x(),
		distY = y - this.translate().y(),
		distance = Math.distance(
			this.translate().x(),
			this.translate().y(),
			x,
			y
		),
		speed = 0.25,
		time = (distance / speed);
		if (Math.abs(distY) > 2) {
		    	this.animation.select('opened');
			this.velocity.y(distY / time);
		}else {
			this.flag = 1;	
			this.velocity.y(0);
			
		}
		return this;
	},

	tick: function (ctx) {
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }