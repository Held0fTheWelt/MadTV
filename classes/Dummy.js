/**
 * User: Yves Tanas
 * Date: 01.08.12
 * Time: 22:32
 *
 */
var Dummy = IgeEntity.extend({
    classId:'Dummy',

    init:function () {

        this._super();
        // Load our textures
        var self = this;
        var gameTexture = [];

        this.obj = [];

        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

        });
    }

});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}