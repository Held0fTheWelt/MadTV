var CharacterMonk = IgeEntity.extend({
    classId: 'CharacterMonk',
        init: function () {
	    this.flag = 0;
            this._super();     
        },

    walkTo: function (x, y) {

        var char = this,
            distX = x - this.translate().x(),
            distY = y - this.translate().y(),
            distance = Math.distance(
                this.translate().x(),
                this.translate().y(),
                x,
                y
            ),
            speed = 0.15,
            time = (distance / speed);

        // Set the animation based on direction
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
        debugger;
        // Start tweening the little person to their destination
        this._translate.tween()
            .stopAll()
            .properties({x: x, y: y})
            .duration(time)
            .afterTween(function () {
                char.animation.stop();
                // And you could make him reset back
                // to his original animation frame with:
                char.cell(10);
            })
            .start();

        return this;
    },

	tick: function (ctx) {
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }