var Skyscraper = IgeEntity.extend({
    classId: 'Skyscraper',



    init: function () {

        this._super();
        // Load our textures
        var nodeSS = this;
        var gameTexture = [];

        this.obj = [];
        gameTexture[0] = new IgeTexture('assets/textures/building/ground.jpg');
        gameTexture[1] = new IgeTexture('assets/textures/building/floor.jpg');
        gameTexture[2] = new IgeTexture('assets/textures/building/walls.jpg');
        // a small banana plant
        gameTexture[3] = new IgeTexture('assets/textures/accessoires/floor/banana.png');
        // a bin
        gameTexture[4] = new IgeTexture('assets/textures/accessoires/floor/bin.png');
        // a dracaena
        gameTexture[5] = new IgeTexture('assets/textures/accessoires/floor/dracaena1.png');
        // a lamp on the wall
        gameTexture[6] = new IgeTexture('assets/textures/accessoires/floor/lamp1.png');
        // a lamp on the ceiling
        gameTexture[7] = new IgeTexture('assets/textures/accessoires/floor/lamp2.png');
        // a painting
        gameTexture[8] = new IgeTexture('assets/textures/accessoires/floor/painting1.jpg');
        // another painting
        gameTexture[9] = new IgeTexture('assets/textures/accessoires/floor/painting2.jpg');
        // a third painting
        gameTexture[10] = new IgeTexture('assets/textures/accessoires/floor/painting3.jpg');
        // another plant
        gameTexture[11] = new IgeTexture('assets/textures/accessoires/floor/plant.png');
        // a water bar
        gameTexture[12] = new IgeTexture('assets/textures/accessoires/floor/water.png');
        // a sign on top of the building
        gameTexture[13] = new IgeTexture('assets/textures/sign.png');
        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {

            // Create the ground
            nodeSS.obj[0] = new GameElement()
                .id('ground')
                .width(1000)
                .height(4)
                .depth(0)
                .texture(gameTexture[0])
                // .translateTo(0, 310, 0)
                .mount(nodeSS);

            // Create walls - floor 0
            nodeSS.obj[1] = new GameElement()
                .id('floor0')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -50, 0)
                .mount(nodeSS);

            // Create ground - floor 1
            nodeSS.obj[2] = new GameElement()
                .id('gfloor1')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -100, 0)
                .mount(nodeSS);

            // Create walls - floor 1
            nodeSS.obj[3] = new GameElement()
                .id('floor1')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -150, 0)
                .mount(nodeSS);

            // Create ground - floor 2
            nodeSS.obj[4] = new GameElement()
                .id('gfloor2')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -200, 0)
                .mount(nodeSS);

            // Create walls - floor 2
            nodeSS.obj[5] = new GameElement()
                .id('floor2')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -250, 0)
                .mount(nodeSS);

            // Create ground - floor 3
            nodeSS.obj[6] = new GameElement()
                .id('gfloor3')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -300, 0)
                .mount(nodeSS);

            // Create walls - floor 3
            nodeSS.obj[7] = new GameElement()
                .id('floor3')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -350, 0)
                .mount(nodeSS);

            // Create ground - floor 4
            nodeSS.obj[8] = new GameElement()
                .id('gfloor4')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -400, 0)
                .mount(nodeSS);

            // Create walls - floor 4
            nodeSS.obj[9] = new GameElement()
                .id('floor4')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -450, 0)
                .mount(nodeSS);

            // Create ground - floor 5
            nodeSS.obj[10] = new GameElement()
                .id('gfloor5')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -500, 0)
                .mount(nodeSS);

            // Create walls - floor 5
            nodeSS.obj[11] = new GameElement()
                .id('floor5')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -550, 0)
                .mount(nodeSS);

            // Create ground - floor 6
            nodeSS.obj[12] = new GameElement()
                .id('gfloor6')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -600, 0)
                .mount(nodeSS);

            // Create walls - floor 6
            nodeSS.obj[13] = new GameElement()
                .id('floor6')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -650, 0)
                .mount(nodeSS);

            // Create ground - floor 7
            nodeSS.obj[14] = new GameElement()
                .id('gfloor7')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -700, 0)
                .mount(nodeSS);

            // Create walls - floor 7
            nodeSS.obj[15] = new GameElement()
                .id('floor7')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -750, 0)
                .mount(nodeSS);

            // Create ground - floor 8
            nodeSS.obj[16] = new GameElement()
                .id('gfloor8')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -800, 0)
                .mount(nodeSS);

            // Create walls - floor 8
            nodeSS.obj[17] = new GameElement()
                .id('floor8')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -850, 0)
                .mount(nodeSS);

            // Create ground - floor 9
            nodeSS.obj[18] = new GameElement()
                .id('gfloor9')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -900, 0)
                .mount(nodeSS);

            // Create walls - floor 9
            nodeSS.obj[19] = new GameElement()
                .id('floor9')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -950, 0)
                .mount(nodeSS);

            // Create ground - floor 10
            nodeSS.obj[20] = new GameElement()
                .id('gfloor10')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -1000, 0)
                .mount(nodeSS);

            // Create walls - floor 10
            nodeSS.obj[21] = new GameElement()
                .id('floor10')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -1050, 0)
                .mount(nodeSS);

            // Create ground - floor 11
            nodeSS.obj[16] = new GameElement()
                .id('gfloor11')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -1100, 0)
                .mount(nodeSS);

            // Create walls - floor 11
            nodeSS.obj[17] = new GameElement()
                .id('floor11')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -1150, 0)
                .mount(nodeSS);

            // Create ground - floor 12
            nodeSS.obj[18] = new GameElement()
                .id('gfloor12')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -1200, 0)
                .mount(nodeSS);

            // Create walls - floor 12
            nodeSS.obj[19] = new GameElement()
                .id('floor12')
                .width(800)
                .height(96)
                .depth(0)
                .texture(gameTexture[2])
                .translateTo(0, -1250, 0)
                .mount(nodeSS);

            // Create ground - roof
            nodeSS.obj[20] = new GameElement()
                .id('gfloor13')
                .width(800)
                .height(4)
                .depth(0)
                .texture(gameTexture[1])
                .translateTo(0, -1300, 0)
                .mount(nodeSS);

            // The Towers Sign
            nodeSS.obj[21] = new GameElement()
                .id('towersign')
                .depth(1)
                .width(300)
                .height(164)
                .texture(gameTexture[13])
                .translateTo(0, -1383, 0)
                .mount(nodeSS);

            // Beauties Floor 8
            // fresh water
            nodeSS.obj[22] = new GameElement()
                .id('water')
                .depth(1)
                .width(33)
                .height(94)
                .texture(gameTexture[12])
                .translateTo(355, -846, 0)
                .mount(nodeSS);

            // small plants next to it
            nodeSS.obj[23] = new GameElement()
                .id('plant2')
                .depth(1)
                .width(33)
                .height(94)
                .texture(gameTexture[11])
                .translateTo(325, -846, 0)
                .mount(nodeSS);

            nodeSS.obj[24] = new GameElement()
                .id('dracaena1')
                .depth(1)
                .width(46)
                .height(75)
                .texture(gameTexture[5])
                .translateTo(305, -838, 0)
                .mount(nodeSS);

            // Beauties Floor 6
            // painting on floor 1 slot 63
            nodeSS.obj[25] = new GameElement()
                .id('painting63')
                .depth(1)
                .width(77)
                .height(63)
                .texture(gameTexture[10])
                .translateTo(225, -655, 0)
                .mount(nodeSS);
            // Beauties Floor 3
            // plant1
            nodeSS.obj[26] = new GameElement()
                .id('plant1')
                .depth(1)
                .width(58)
                .height(92)
                .texture(gameTexture[11])
                .translateTo(225, -348, 0)
                .mount(nodeSS);

            // Beauties Floor 2		
            // painting on floor 2 slot 21
            nodeSS.obj[27] = new GameElement()
                .id('painting21')
                .depth(1)
                .width(77)
                .height(63)
                .texture(gameTexture[9])
                .translateTo(-325, -255, 0)
                .mount(nodeSS);

            // Beauties Floor 1
            // dracaena1
            nodeSS.obj[28] = new GameElement()
                .id('dracaena1')
                .depth(1)
                .width(46)
                .height(75)
                .texture(gameTexture[5])
                .translateTo(-265, -137, 0)
                .mount(nodeSS);

            // banana1
            nodeSS.obj[29] = new GameElement()
                .id('banana1')
                .depth(1)
                .width(34)
                .height(45)
                .texture(gameTexture[3])
                .translateTo(-288, -124, 0)
                .mount(nodeSS);


            // painting on floor 1 slot 13
            nodeSS.obj[30] = new GameElement()
                .id('painting13')
                .depth(1)
                .width(77)
                .height(63)
                .texture(gameTexture[8])
                .translateTo(225, -155, 0)
                .mount(nodeSS);


            // Beauties Floor 0

            // bin on floor 0
            nodeSS.obj[31] = new GameElement()
                .id('lobbybin')
                .depth(1)
                .width(25)
                .height(50)
                .texture(gameTexture[4])
                .translateTo(75, -25, 0)
                .mount(nodeSS);

            // Adding Top Lamps !
            // Create lamp01
            nodeSS.obj[32] = new GameElement()
                .id('lamp11')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -85, 0)
                .mount(nodeSS);

            // Create lamp02
            nodeSS.obj[33] = new GameElement()
                .id('lamp12')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -85, 0)
                .mount(nodeSS);

            // Create lamp11
            nodeSS.obj[34] = new GameElement()
                .id('lamp21')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -185, 0)
                .mount(nodeSS);

            // Create lamp12
            nodeSS.obj[35] = new GameElement()
                .id('lamp22')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -185, 0)
                .mount(nodeSS);

            // Create lamp21
            nodeSS.obj[36] = new GameElement()
                .id('lamp21')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -285, 0)
                .mount(nodeSS);

            // Create lamp22
            nodeSS.obj[37] = new GameElement()
                .id('lamp22')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -285, 0)
                .mount(nodeSS);

            // Create lamp31
            nodeSS.obj[38] = new GameElement()
                .id('lamp31')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -385, 0)
                .mount(nodeSS);

            // Create lamp32
            nodeSS.obj[39] = new GameElement()
                .id('lamp32')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -385, 0)
                .mount(nodeSS);

            // Create lamp41
            nodeSS.obj[40] = new GameElement()
                .id('lamp41')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -485, 0)
                .mount(nodeSS);

            // Create lamp42
            nodeSS.obj[41] = new GameElement()
                .id('lamp42')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -485, 0)
                .mount(nodeSS);

            // Create lamp51
            nodeSS.obj[42] = new GameElement()
                .id('lamp51')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -585, 0)
                .mount(nodeSS);

            // Create lamp52
            nodeSS.obj[43] = new GameElement()
                .id('lamp52')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -585, 0)
                .mount(nodeSS);

            // Create lamp61
            nodeSS.obj[44] = new GameElement()
                .id('lamp61')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -685, 0)
                .mount(nodeSS);

            // Create lamp62
            nodeSS.obj[45] = new GameElement()
                .id('lamp62')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -685, 0)
                .mount(nodeSS);

            // Create lamp71
            nodeSS.obj[46] = new GameElement()
                .id('lamp71')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -785, 0)
                .mount(nodeSS);

            // Create lamp72
            nodeSS.obj[47] = new GameElement()
                .id('lamp72')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -785, 0)
                .mount(nodeSS);

            // Create lamp81
            nodeSS.obj[48] = new GameElement()
                .id('lamp81')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -885, 0)
                .mount(nodeSS);

            // Create lamp82
            nodeSS.obj[49] = new GameElement()
                .id('lamp82')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -885, 0)
                .mount(nodeSS);

            // Create lamp91
            nodeSS.obj[50] = new GameElement()
                .id('lamp91')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -985, 0)
                .mount(nodeSS);

            // Create lamp92
            nodeSS.obj[51] = new GameElement()
                .id('lamp92')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -985, 0)
                .mount(nodeSS);

            // Create lamp101
            nodeSS.obj[52] = new GameElement()
                .id('lamp101')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -1085, 0)
                .mount(nodeSS);

            // Create lamp1102
            nodeSS.obj[53] = new GameElement()
                .id('lamp102')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -1085, 0)
                .mount(nodeSS);

            // Create lamp111
            nodeSS.obj[54] = new GameElement()
                .id('lamp111')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(-275, -1185, 0)
                .mount(nodeSS);

            // Create lamp112
            nodeSS.obj[55] = new GameElement()
                .id('lamp112')
                .depth(2)
                .width(65)
                .height(25)
                .texture(gameTexture[7])
                .translateTo(275, -1185, 0)
                .mount(nodeSS);
        });
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }