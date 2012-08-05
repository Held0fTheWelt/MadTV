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
        Object.defineProperty(this, 'targetX', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue1; },
            set: function (newValue) { myValue1 = newValue; }
        });
        /** Stores the Y-Value where we want to ride */
        Object.defineProperty(this, 'targetY', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue2; },
            set: function (newValue2) { myValue2 = newValue2; }
        });
        Object.defineProperty(this, 'changeFloor', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue3; },
            set: function (newValue3) { myValue3 = newValue3; }
        });
        /** Stores which floor the character is heading */
        Object.defineProperty(this, 'currentHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue4; },
            set: function (newValue4) { myValue4 = newValue4; }
        });
        /** Stores which floor the elevator is heading */
        Object.defineProperty(this, 'elevatorHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue10; },
            set: function (newValue4) { myValue10 = newValue4; }
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

        Object.defineProperty(this, 'startHeading', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue7; },
            set: function (newValue7) { myValue7 = newValue7; }
        });
        /** This is where our elevator is*/
        Object.defineProperty(this, 'elevatorsFloor', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue8; },
            set: function (newValue8) { myValue8 = newValue8; }
        });
        /** This is where our elevator is*/
        Object.defineProperty(this, 'turn', {
            enumerable: true,
            configurable: true,
            get: function () { return myValue9; },
            set: function (newValue8) { myValue9 = newValue8; }
        });
        // Just some standards
        /** This is the floor we are currently in*/
        stateMachine.targetDoor = "none";
        /** This is the floor we are currently in*/
        stateMachine.currentFloor = 0;
        /** This is the Floor the Elevator currently is*/
        stateMachine.elevatorsFloor = 0;
        /** This floor we want to head to*/
        stateMachine.currentHeading = 0;
        /** This floor the elevator heads to*/
        stateMachine.elevatorHeading = 0;
        /** A counter for animation of the elevator*/
        stateMachine.count = 450;
        /** A counter for animation of the character turn*/
        stateMachine.turn = 300;
        /** If this is set to 1, scrolling of background and skyscraper is started*/
        stateMachine.startHeading = 0;
        /** Our characters targeted x-position*/
        stateMachine.targetX = 0;
        /** The State which handles changing the floor correctly*/
        stateMachine.changeFloor = 0;
    },
    changePosition: function (target, heading, door) {
        var stateMachine = this;
        stateMachine.targetX = target;
        stateMachine.currentHeading = heading;
        stateMachine.targetDoor = door;
        console.log("")
        if(stateMachine.currentHeading == stateMachine.currentFloor){
            ige.client.obj[5].obj[4].walkTo(
                stateMachine.targetX,
                stateMachine.getCurrentHeight()+6
            );
        } else {
            //ige.client.obj[7].changeFloor=1;
            ige.client.obj[5].obj[4].walkTo(
                0,
                stateMachine.getCurrentHeight()+6
            );
            stateMachine.changeFloor = 1;
        }
    },
    getCurrentHeight: function(){
        var stateMachine = this;
        switch(stateMachine.currentFloor){
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
    getFloorsHeight: function(){
        var stateMachine = this;
        switch(stateMachine.elevatorHeading){
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
    getBackgroundHeight: function(){
        var stateMachine = this;
        switch(stateMachine.elevatorHeading){
            case 0: return -140;
                break;
            case 1: return -140;
                break;
            case 2: return -140;
                break;
            case 3: return -132.5;
                break;
            case 4: return -125;
                break;
            case 5: return -117.5;
                break;
            case 6: return -110;
                break;
            case 7: return -102.5;
                break;
            case 8: return -95;
                break;
            case 9: return -87.5;
                break;
            case 10: return -80;
                break;
            case 11: return -72.5;
                break;
            case 12: return -65;
                break;
/*            case 11: return -57.5;
                break;
            case 12: return -50;
                break;*/
        }
    }
    ,
    getSkyScraperHeight: function(){
        var stateMachine = this;
        switch(stateMachine.elevatorHeading){
            case 0: return 310;
                break;
            case 1: return 310;
                break;
            case 2: return 310;
                break;
            case 3: return 385;
                break;
            case 4: return 460;
                break;
            case 5: return 535;
                break;
            case 6: return 610;
                break;
            case 7: return 685;
                break;
            case 8: return 760;
                break;
            case 9: return 835;
                break;
            case 10: return 910;
                break;
            case 11: return 985;
                break;
            case 12: return 1060;
                break;
/*            case 11: return 1135;
                break;
            case 12: return 1210;
                break;*/
        }
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
    module.exports = Client;
}