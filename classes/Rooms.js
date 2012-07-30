var Rooms = IgeEntity.extend({
    classId: 'Rooms',

    init: function () {

        this._super();
        // Load our textures
        var nodeSSRooms = this;
        var gameTexture = [];

        this.obj = [];
        // The closed lobby
        gameTexture[0] = new IgeTexture('assets/textures/accessoires/lobby/lobbyClosed.jpg');
        // The signboard
        gameTexture[1] = new IgeTexture('assets/textures/accessoires/lobby/signboard.jpg');
        // Bureau door 1 closed
        gameTexture[2] = new IgeTexture('assets/textures/accessoires/bureau/buro11.jpg');
        // Bureau door 2 closed
        gameTexture[3] = new IgeTexture('assets/textures/accessoires/bureau/buro21.jpg');
        // Bureau door 3 closed
        gameTexture[4] = new IgeTexture('assets/textures/accessoires/bureau/buro31.jpg');
        // The elevator body
        gameTexture[5] = new IgeTexture('assets/textures/elevators/outerelevator.png');

        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

            // Create the Lobbyman doors
            nodeSSRooms.obj[0] = new GameElement()
                .id('lobby')
                .depth(2)
                .width(153)
                .height(86)
                .texture(gameTexture[0])
                .translateTo(-300, -45, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 0
            nodeSSRooms.obj[19] = new GameElement()
                .id('elevatorfloor0')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -47, 0)
                .mount(nodeSSRooms);

            // Create our Signboard
            nodeSSRooms.obj[1] = new GameElement()
                .id('signboard')
                .width(64)
                .height(50)
                .texture(gameTexture[1])
                .translateTo(300, -55, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 1.1
            nodeSSRooms.obj[2] = new GameElement()
                .id('bureau11')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(-325, -142, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 1
            nodeSSRooms.obj[20] = new GameElement()
                .id('elevatorfloor1')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -147, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 1.4
            nodeSSRooms.obj[3] = new GameElement()
                .id('bureau14')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(325, -142, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 2.2
            nodeSSRooms.obj[4] = new GameElement()
                .id('bureau22')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(-225, -242, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 2
            nodeSSRooms.obj[21] = new GameElement()
                .id('elevatorfloor2')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -247, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 2.3
            nodeSSRooms.obj[5] = new GameElement()
                .id('bureau23')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(225, -242, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 2.4
            nodeSSRooms.obj[6] = new GameElement()
                .id('bureau24')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(325, -242, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 3.1
            nodeSSRooms.obj[7] = new GameElement()
                .id('bureau31')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(-325, -342, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 3.2
            nodeSSRooms.obj[8] = new GameElement()
                .id('bureau32')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(-225, -342, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 3
            nodeSSRooms.obj[22] = new GameElement()
                .id('elevatorfloor3')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -347, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 3.4
            nodeSSRooms.obj[9] = new GameElement()
                .id('bureau34')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(325, -342, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 4.1
            nodeSSRooms.obj[10] = new GameElement()
                .id('bureau41')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-325, -442, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 4.2
            nodeSSRooms.obj[11] = new GameElement()
                .id('bureau42')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-225, -442, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 4
            nodeSSRooms.obj[23] = new GameElement()
                .id('elevatorfloor4')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -447, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 4.3
            nodeSSRooms.obj[12] = new GameElement()
                .id('bureau43')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(225, -442, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 4.4
            nodeSSRooms.obj[13] = new GameElement()
                .id('bureau44')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(325, -442, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 5.2
            nodeSSRooms.obj[14] = new GameElement()
                .id('bureau52')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(-225, -542, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 5
            nodeSSRooms.obj[24] = new GameElement()
                .id('elevatorfloor5')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -547, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 5.3
            nodeSSRooms.obj[15] = new GameElement()
                .id('bureau53')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(225, -542, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 6.1
            nodeSSRooms.obj[16] = new GameElement()
                .id('bureau61')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(-325, -642, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 6
            nodeSSRooms.obj[25] = new GameElement()
                .id('elevatorfloor6')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -647, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 6.4
            nodeSSRooms.obj[17] = new GameElement()
                .id('bureau64')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(325, -642, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 7.1
            nodeSSRooms.obj[18] = new GameElement()
                .id('bureau71')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-325, -742, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 7.2
            nodeSSRooms.obj[19] = new GameElement()
                .id('bureau72')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-225, -742, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 7
            nodeSSRooms.obj[26] = new GameElement()
                .id('elevatorfloor7')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -747, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 7.3
            nodeSSRooms.obj[20] = new GameElement()
                .id('bureau73')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(225, -742, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 7.4
            nodeSSRooms.obj[21] = new GameElement()
                .id('bureau74')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(325, -742, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 8.2
            nodeSSRooms.obj[22] = new GameElement()
                .id('bureau82')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(-225, -842, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 8
            nodeSSRooms.obj[27] = new GameElement()
                .id('elevatorfloor8')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -847, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 8.3
            nodeSSRooms.obj[23] = new GameElement()
                .id('bureau83')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(225, -842, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 9.1
            nodeSSRooms.obj[14] = new GameElement()
                .id('bureau91')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(-325, -942, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 9
            nodeSSRooms.obj[28] = new GameElement()
                .id('elevatorfloor9')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -947, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 9.3
            nodeSSRooms.obj[15] = new GameElement()
                .id('bureau93')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(225, -942, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 9.4
            nodeSSRooms.obj[14] = new GameElement()
                .id('bureau94')
                .width(43)
                .height(80)
                .texture(gameTexture[3])
                .translateTo(325, -942, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 10.1
            nodeSSRooms.obj[18] = new GameElement()
                .id('bureau101')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-325, -1042, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 10.2
            nodeSSRooms.obj[19] = new GameElement()
                .id('bureau102')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-225, -1042, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 10
            nodeSSRooms.obj[29] = new GameElement()
                .id('elevatorfloor10')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -1047, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 10.3
            nodeSSRooms.obj[20] = new GameElement()
                .id('bureau103')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(225, -1042, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 10.4
            nodeSSRooms.obj[21] = new GameElement()
                .id('bureau104')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(325, -1042, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 11.2
            nodeSSRooms.obj[22] = new GameElement()
                .id('bureau112')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(-225, -1142, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 11
            nodeSSRooms.obj[30] = new GameElement()
                .id('elevatorfloor11')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -1147, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 11.3
            nodeSSRooms.obj[23] = new GameElement()
                .id('bureau113')
                .width(43)
                .height(80)
                .texture(gameTexture[2])
                .translateTo(225, -1142, 0)
                .mount(nodeSSRooms);

            // Create Bureau on Slot 12.1
            nodeSSRooms.obj[18] = new GameElement()
                .id('bureau101')
                .width(70)
                .height(84)
                .texture(gameTexture[4])
                .translateTo(-325, -1242, 0)
                .mount(nodeSSRooms);

            // Create elevator - floor 12
            nodeSSRooms.obj[31] = new GameElement()
                .id('elevatorfloor12')
                .width(87)
                .height(89)
                .texture(gameTexture[5])
                .translateTo(0, -1247, 0)
                .mount(nodeSSRooms);
        });
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }