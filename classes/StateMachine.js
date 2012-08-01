/** State Machine holds valuable information of entities states.
 * It shall manage all needed diagnostical variables.
 * User: Yves Tanas
 * Date: 01.08.12
 * Time: 22:32
 *
 */
var StateMachine = IgeEntity.extend({
    classId:'StateMachine',

    init:function () {

        this._super();
        var stateMachine = this;
        /** Stores the X-Value where we want to ride */
        Object.defineProperty(this, 'pretendedX', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue1; },
            set: function (newValue) { myValue1 = newValue; }
        });
        /** Stores the Y-Value where we want to ride */
        Object.defineProperty(this, 'pretendedY', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue2; },
            set: function (newValue2) { myValue2 = newValue2; }
        });
        /** If 1 Character is Moving */
        Object.defineProperty(this, 'move', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue3; },
            set: function (newValue3) { myValue3 = newValue3; }
        });
        /** Stores which floor the elevator is heading */
        Object.defineProperty(this, 'currentHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue4; },
            set: function (newValue4) { myValue4 = newValue4; }
        });
        /** Stores which floor the elevator is right now */
        Object.defineProperty(this, 'currentFloor', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue5; },
            set: function (newValue5) { myValue5 = newValue5; }
        });
        /** Time counter for animation purpose */
        Object.defineProperty(this, 'count', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue6; },
            set: function (newValue6) { myValue6 = newValue6; }
        });
        /** If 1 the Elevator may move. 0 will stop moving*/
        Object.defineProperty(this, 'startHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue7; },
            set: function (newValue7) { myValue7 = newValue7; }
        });

        // Just some standards

        stateMachine.currentFloor = 0;
        stateMachine.currentHeading = 10;
        stateMachine.count = 450;
        stateMachine.startHeading = 0;
        stateMachine.pretendedX = 0;
        stateMachine.pretendedY = 0;
        stateMachine.move = 0;
    },
    getFloorsHeight: function(){
        var stateMachine = this;
        switch(stateMachine.currentHeading){
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
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}