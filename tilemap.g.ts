// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000304010101010101010101010101010103040101010109090901010101010101030401010101090909010101010101010304010101010909090101010101010103040101010101010101010101010101060b0101010101010101010101010101050505050101010101010101010101010505050501010101010101010101010105050505010101010101010101010101050505050101050505050505050505050505050501010505050505050505050508070707070a0505050505050505050506020202020b05050505050505050505010101010101050505050505050505050101010101010505050505050505050501010101010105050505050505050505`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . 2 2 2 2 2 2 2 
. . 2 . 2 2 . . . 2 2 2 2 2 2 2 
. . 2 . 2 2 . . . 2 2 2 2 2 2 2 
. . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 2 . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tileGrass1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tileDarkGrass3,sprites.castle.tilePath3,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
