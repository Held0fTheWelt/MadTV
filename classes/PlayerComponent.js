/**
 * Adds mouse control to the entity this component is added to.
 * @type {IgeClass}
 */
var PlayerComponent = IgeClass.extend({
	init: function (entity, options) {
		var self = this;

		// Store the entity that this component has been added to
		this._entity = entity;

		// Store any options that were passed to us
		this._options = options;

		// Setup some actions and map them to inputs
		ige.input.mapAction('predictedX', ige.input.mouse.x);
		ige.input.mapAction('predictedY', ige.input.mouse.y);

		// Listen for the mouse up event
		ige.input.on('mouseUp', function (event) { self._mouseUp(event); });
	},

	/**
	 * Handles what we do when a mouseUp event is fired from the engine.
	 * @param event
	 * @private
	 */
	_mouseUp: function (event) {
		this._entity.walkTo(
			ige.input.actionVal('predictedX'),
			6
		);

     //   console.log(ige.input.actionVal('mouseY')-268);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = PlayerComponent; }