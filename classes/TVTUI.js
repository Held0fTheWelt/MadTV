/* doesn't work yet !!!
 * there obviously is a mistake.
 */

var TVTUI = IgeEntity.extend({
    classId: 'TVTUI',
        
        init: function () {
            
            this._super();
            // Load our textures
            var nodeUI = this;
            var gameTexture = [];

            this.obj = [];

            
            // Wait for our textures to load before continuing
            ige.on('texturesLoaded', function () {               
                
		nodeUI.obj[0] = new IgeUiEntity()
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
		.mount(nodeUI);
	       
            });
        }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }