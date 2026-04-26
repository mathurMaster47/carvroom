// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "racetrack1":
            case "racetrack1":return tiles.createTilemap(hex`1000100001040404040404040404040404040408020b0b0b0c0c0c0c0c0c0a0a0a0a0a07020909090c0c0c0c0c0c090909090907020c09090c0c0c0c0c0c0c0c0c090907020c09090c0c0c0c0c0c0c0c0c090c07020c090c0c0c0c0c0c0c0c0c0c090907020c090c0c09090909090c09090909070209090c0c09090909090c090c0c0c070209090c0c09090c0c090c090c0909070209090c0c090c0c0c090c09090909070209090c0c090c0c09090c09090c0907020c090c0c090c0c09090c0c0c0c0907020c090c0c09090c0c090c0c0c090907020909090c0c09090c09090c0c090c07020c0c09090909090c0c090909090c0703050505050505050505050505050506`, img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. 2 . . 2 2 2 2 2 2 2 2 2 . . . 
. 2 . . 2 2 2 2 2 2 2 2 2 . 2 . 
. 2 . 2 2 2 2 2 2 2 2 2 2 . . . 
. 2 . 2 2 . . . . . 2 . . . . . 
. . . 2 2 . . . . . 2 . 2 2 2 . 
. . . 2 2 . . 2 2 . 2 . 2 . . . 
. . . 2 2 . 2 2 2 . 2 . . . . . 
. . . 2 2 . 2 2 . . 2 . . 2 . . 
. 2 . 2 2 . 2 2 . . 2 2 2 2 . . 
. 2 . 2 2 . . 2 2 . 2 2 2 . . . 
. . . . 2 2 . . 2 . . 2 2 . 2 . 
. 2 2 . . . . . 2 2 . . . . 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0], TileScale.Sixteen);
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
