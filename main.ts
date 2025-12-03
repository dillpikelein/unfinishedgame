namespace SpriteKind {
    export const skin = SpriteKind.create()
    export const Start_button = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Start_button, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (player_chosen == true) {
        	
        } else if (player_chosen == false) {
            game.splash("you need to choose a player", "before you begin")
            pause(100)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(50)) {
    	
    } else if (Math.percentChance(50)) {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.skin, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (mySprite.overlapsWith(bingle)) {
            if (game.ask("do you want to be bingle", " (class type warrior)")) {
                player_chosen = true
                pause(100)
            }
        } else if (mySprite.overlapsWith(sizzle)) {
            if (game.ask("do you want to be sizzle", " (class type mage)")) {
                player_chosen = true
                pause(100)
            }
        } else if (mySprite.overlapsWith(jimbob)) {
            if (game.ask("do you want to be jimbob", " (class type barbarian)")) {
                player_chosen = true
                pause(100)
            }
        }
    }
})
let player_chosen = false
let jimbob: Sprite = null
let sizzle: Sprite = null
let bingle: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    bb1111111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbb
    bb1111111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111bbbb111bbb11111bbbbbbbbbbbbbbbbbbbbbbbbb
    b11111bbbbbb111bbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111bb111bbb111111b111bbb111bbbbb1111111bb
    11111bbbbbbb111bbbbbbbb1111111bbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111b1111111b111bbb111111b111bbb111bbbbb11111111b
    1111bbbbbbbb1111bbbbbb111111111bb1111111bbb111111bbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb11111b111bbb111111b111bbb1111bbb111111111b
    111bbbbbbbbb1111bbbbbb111111111bb11111111b1111111bbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111bbbbb111b111bb1111111b1111bb1111bbb1111b1111b
    111bbbbbbbbb1111bbbbbb111bbb1111b111b111111111111b11111bbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbb111b111bb1111111b1111b11111bbb1111b1111b
    111bbbbbbbbb1111bbbbbb111bbb1111b111bb11111111bbb1111111bbbbbb111bbbb1111bbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbb111b111bb111b1111b111b11111bbb111111111b
    111bbbbbbbbb1111b111bb111bbbb1111111bbb11111111b11111111bbbbbb1111bbb11111bbb11111111bbbbbbbbbbbbbbbbb1111bbbbb111bbbbb1111b111bb111bb111b111111111bbbb1111111bb
    111bbbbbbbbb1111111111111bbbb1111111bbb111b1111b1111b111bbbbbb11111b111111bbb11111111bb111bb111bbbbbb11111bbbbb111bbbb11111b111bb111bb111b111111111bbbb1111111bb
    111bbbbbbbbb1111111111111bbbb111111bbbb111bb111b111b1111bbbbbbb11111111111bbb1111b1111b111bb111bbbbb111111bbbbb111bbb11111bb111b1111bb111b111111111bbbb11111111b
    1111bbbbbbbb111111111111bbbbb111111bbbb111bb1111111b1111bbbbbbbb1111111111bb1111bb1111b111bb1111bbb11111bbbbbbb111b111111bbb111b1111bb111bb11111111b11b111111111
    1111bbbbbbbb11111b111111bbbbb111111bbbb111bb11111111111bbbbbbbbbb11111b111bb1111bbb111b1111b1111bbb1111bbbbbbbb111111111bbbb111b111111111bbb111111b1111b11111111
    b1111bbbbbbb1111bbb11111bbbbb111111bbbb111bbb11111b1111bbbbbbbbbbbbbbbb111bb111bbbb111b1111b11111bb111bbbbbbbbb11111111bbbb1111b111111111bbbbbb11b11111b11111111
    b1111bbbbbbb1111bb111111bbbbb111111bbbb111bbb11111b111bbbbbbbbbbbbbbbbb111bb111bbbb111bb111bb1111bb111bbbbbbbbbb111111bbbbb1111b1111111111bbbb111b111111b111bb11
    bb111bbbbbbb1111bb1111111bbb1111111bbb1111bb1111111111bbbbbbbbbbbbbbbb1111bb111bbbb111bb111b11111bb111bbbbbbbbbb111bbbbbbbb111bb111bbb1111bbbb111b1bb111b1111bbb
    bb1111bbbbbb1111bb1111111bb11111111bbb11111111111111bbbbbbbbbb111bbbb11111bb1111bb1111bb1111111111bbbbbbbbbbbbbb111bbbbbbbb111bb111bbbb111bbbb11b111b111b1111bbb
    bb111111111b1111bb111b111111111b111bbb111b11111b11111111bbbbbb1111bb11111bbb1111111111bb1111111111bbbbbbbbbbbbbb111bbbbbbbb111bbbbbbbbb111bb1111b1111111bb111bbb
    bbb11111111bb111bb111b11111111bb111111111b111bbb11111111bbbbbb1111111111bbbbb11111111bbbb111111111bbbbbbbbbbbbbb111bbbbbbbb11111111bbbbb111b1111b11111bbbb111bbb
    bbbb1111111bbbbbbb111bb1111111bbbbb111bbbbbbbbbbb1111111bbbbbbb11111111bbbbbbb1111111bbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbb11111111bbbbb111b1111bb1111111bbbbbbb
    bbbbbb1111bbbbbbbbbbbbb111111bbbbbb111bbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbb11111111bbbbb111bbbbbbb1111111bbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbbbb111bbbbbbbbb11111bbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111b
    b11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111b
    b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cc
    b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cc
    b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cc
    b1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cc
    bbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    bbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    bbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    bbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbcccc
    bbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbcccc
    bbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbcccb
    bbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbccccb
    bbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbccccb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbcccbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbccccbb
    bbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbccccbb
    bbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccbbb
    bbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbccccbbb
    bbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbccccbbb
    bbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccbbbb
    bbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccbbbb
    bbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccccccccbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccbbbb
    bbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbccccbccccccccccccccccccbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbcccbbbb
    bcccccccccccccccbbbbbbbbbcccbbbbbcccccccccccccccbbbbbbcccccccccccccccccccbcccccccccccccccccccccbbbccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbccccbbbb
    bcccccbcccbcccccccccccccccccbbcccccccccccbbccccccccccccccccccccccccccccccbcccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbcccccbbbb
    bcccbbbcccbbbcccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcccccccccccccbccccccccccccccccccccccccccccbcccbcccccccccccccccccccbbbbb
    bbbbbbbcccbbbbcccccccccccccccccccccbbbbbbbbbbbccccccccccbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbcccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccc
    bbbbbbccccbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbcccccccccccccccccccccccc
    bbbbbbccccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbcccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbccccccccbbcccccccccbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbcccccccbbbbbbccccccccbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbccccccbbbbbbbbbbcccccccccbbbbbbbbbccccccccccccccccccccccccccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbcccccccbbbbbbbbbbbbbccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbb
    bbbbbcccccbbbbbbbbbcccccccbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbb
    bbbbbccccccccccbbccccccccbbbbbbbbbbbbbbbbcccbbcccccccccccccbbbbbbbbbbbbbbbbcccbbbbbcccccccccccccccccccccccccccbbbbbbbbbbccccccbbbbbbbbbbbbcccccbbbbbcccbbbbbbbbb
    bbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbccccccbbbbbbbbbccccccccccbbcccbbbbbbbbb
    bbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbccccccccccccccccccccccccbcccbbbbbbbbb
    bbbbbbcccbbbbccccccbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccccccccccccccccccccccccbccccccccccbbbbbbbcc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccccbcccccccccccccccbbbbccccccccbbbbbbcc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbcccccbbbbbbbbbbbbbcccbbbbbccccccccbbbbbcc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbcccccccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbcccbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbcccbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbcccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccc
    bbbbbccccccbbbbbbbbbbbbbbbbbbccccccccccccbbbbbccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccc
    bbbbbcccccccccccbbbbbbbbbbbbcccccccbbccccbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccc
    bbbbbcccccccccccccccccccbbcccccccbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbccccccccccccccccccccccccccccbccccccccbbbbcccbbbbbbbbbbbbbbb
    bbbbbbcccccccccccccccccccccccccbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbb
    bbbbbbcccbbbbbccccccccccccccccbbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbccccccbbbbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbb9999999999999999999999999999bbbbbbbbbbbcccbbbbbbbbbb9999999999999999999999999999bbbbbbbbbbbbbbbbccc99999999999999999999999bbbbbcccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbb9999999999999999999999999999bbbbbbbbbbbcccbbbbbbbbbb9999999999999999999999999999bbbbbbbbbbbbbbbbccc99999999999999999999999bbbbbcccccbbbbbbbbbbbbb
    bbbbbbcccbbbbbb9999999999999999999999999999bbbbbbbbbbbcccbbbbbbbbbb9999999999999999999999999999bbbbbbbbbbbbbbbbccc99999999999999999999999bbbbccccccccbbbbbbbbbbb
    bbbbbbcccbbbbbb9999999999999999999999999999bbbbbbbbbbbcccbbbbbbbbbb9999999999999999999999999999bbbbbbbbbbbbbbbbccc99999999999999999999999bbbccccccccccbbbcccbbbb
    bbbbbbcccbbbbbb9999999999999999999999999999bbbbbbbbbbccccbbbbbbbbbb999999999999ccc9999999999999bbbbbbbbbbbbbbbbcccc9999999999999999999999bbcccccbccccccbbcccbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccccccccbbbbbbbbcccccccccbbbbbbbbbcccbbbbbbbbbbbbbbbbbcccccbcccbbbbbbbbbbbbbbbbbbbccccbbbbcccccccccbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccbbbbbccccccccbbbbbbbbbbbbbbbbccccccbbbbbbccccccccbbbb
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbccccccccccbbbbbbbccccccccccc
    bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbccccccccccbbbbbbbcccccccccccccbbccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccc
    bbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbcccbbbbbbccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbbcccccccccc
    bbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbcccbbbbbbbbccccccccccccccccbbbbbbbbbbbbbccccbbbbccccccccccccccccccbbbbbbbbbbbbbbbcccccbbbbbb
    bbbbbbbcccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbccccbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbb
    bbbbbbbcccccccbbbbbbbbbbbbbbbccccccccbbbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbccccbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbb
    bbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbcccbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbb
    bbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbcccbbbccccbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbb
    bbbbbcccccbbcccccccccccccccccccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbcccbbcccccbcccbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbb
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbccccbbccccbbccccbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbb
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbcccccbbcccbbbccccbbbbbbbbbbbbbbbbbbbcccccbcccbbbbbbbb
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbccccbbccccbbbbcccbbbbbbbbbbbbbbbbbbcccccbbcccbbbbbbbb
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbccccbbbccccbbbbcccbbbbbbbbbbbbbbbbbcccccbbbcccbbbbbbbb
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbbbcccccbccccbbbbbbbbbbbbcccccccccbbbbbbbbbbbcccccbbbcccbbbbbcccbbbbbbbbbbbbbbbccccccbbbbccccbbbbbbb
    bbbbbccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbbbccccccbccccbbbbbbbbbbbccccbccccbbbbbbbbbbbccccbbbccccbbbbbcccbbbbbbbbbbbbbbcccccccbbbbcccccbbbbbb
    bbbbbccccbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbccccccbbbbbbbbbbccccccccccccccbbbbbbbbbcccccbbccccbbbbbbbbbccccbbbcccccbbbbbcccccccbbbbbbbccccccccbbbbbbbcccccbbbbb
    bbbbbccccbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbcccccccbbbbbbbbbbcccccccccccccccbbbbbbbcccccbbbcccccbbbbbbbcccccbbcccccbbbbbbcccccccbbbbbccccccccbbbbbbbbbbcccccbccc
    bbbbbcccccbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbccccccccbbbbbbbbbbccccbbccccccccccccccccccccbbbbbccccccbbbbcccccbbbccccbbbbbbbbccccccbbbcccccccccbbbbbbbbbbbbcccccccc
    bbbbbcccccbbbbbbbbbbbbbbbbbbccccccccbbbbbbbccccbcccbbbbbbbbbbcccbbbbcccccccccccccccccccbbbbbbcccccccccccccbbbbcccbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbccccccc
    bbbbbccccccbbbbbbbbbbbbbbbbccccccccccbbbbbcccccbccccbbbbbbbbbcccbbbccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbcccccccc
    bbbbcccccccbbbbbbbbbbbbbbccccccbbcccccbbbbccccbbcccccbbbbbbbbcccbbbcccccccbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccbccccccccbbccccccccbbbbcccccccccccbb
    bbbbcccccccccccccccccccccccccccbbbcccccccccccbbbbcccccccccccccccbbbcccccccccccccccccccccccccccccccbbbbbccccccbbcccccccccccbbbbbbbbbbbbbbbcccccccccccccccccccbbbb
    bbbbcccccccccccccccccccccccccbbbbbbccccccccccbbbbbccccccccccccccbbbcccccccccccccccccccccccccccccccbbbbbcccccbbbbbbbbccccbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbb
    `)
mySprite = sprites.create(img`
    . . . f . . . . . . . . . . . . 
    . . . f f . . . . . . . . . . . 
    . . . f 1 f . . . . . . . . . . 
    . . . f 1 1 f . . . . . . . . . 
    . . . f 1 1 1 f . . . . . . . . 
    . . . f 1 1 1 1 f . . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . . f 1 1 1 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 1 1 1 f f . . . . . 
    . . . f 1 1 f f 1 f . . . . . . 
    . . . f 1 f . . f 1 f . . . . . 
    . . . . f . . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.z = 10
mySprite.setStayInScreen(true)
bingle = sprites.create(img`
    .......fffffffffffffffff................
    .......fffffffffffffffff................
    .......fffffffffffffffff................
    .......ff111ff555ff111ff................
    .......ff111ff555ff111ff................
    .......ff5555555555555ff................
    .......ff5555555555555ff................
    .......ff5555555555555ff................
    .......ff555fffffff555ff................
    .......ff555fffffff555ff................
    .......ff5555555555555ff................
    .......ff5555555555555ff................
    fffffffffffffffffffffffffffffff.........
    fffffffffffffffffffffffffffffff.........
    fffffffffffffffffffffffffffffff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    ff55555ff2222222222222ff55555ff.........
    fffffffffffffffffffffffffffffff.........
    fffffffffffffffffffffffffffffff.........
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......ff77777fff77777ff................
    .......fffffffffffffffff................
    .......fffffffffffffffff................
    ........................................
    ........................................
    `, SpriteKind.skin)
bingle.setPosition(130, 72)
sizzle = sprites.create(img`
    ........................................
    .....................11111..............
    .....................11111..............
    ................11111111................
    ................11111111................
    ................11111111................
    ..............1111111...................
    ..............1111111...................
    ...........111111111111111..............
    ...........111111111111111..............
    ...........111111111111111..............
    .........11111ffffffffff11..............
    .........11111ffffffffff11..............
    .........11fff22fff22fff11111...........
    .........11fff22fff22fff11111...........
    .......1111fffffffffffff11111...........
    .......1111fffffffffffff11111...........
    .......1111fffffffffffff11111...........
    .........11111111111111111..............
    .........11111111111111111..............
    ..............fffffff...................
    ..............fffffff...................
    ..............fffffff...................
    ...........11111111ff11111..............
    ...........11111111ff11111..............
    .......111111111555ff11111111...........
    ......1111111111555ff11111111...........
    .......11..11111111ff111..11111.........
    ........1..11111111ff111..11111.........
    ........1..11111111ff111..11111.........
    ...........11111555ff111.....11.........
    ...........11111555ff111.....11.........
    ..............ff.....fff................
    ..............ff.....fff................
    ..............ff.....fff................
    ...........fffff...fffff................
    ...........fffff...fffff................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.skin)
sizzle.setPosition(22, 72)
jimbob = sprites.create(img`
    ..............22........................
    ..............22........................
    ..............22........................
    ............22..........................
    ............22..........................
    ..............44........................
    ..............44........................
    ..............44........................
    ................22......................
    ................22......................
    ..............2222222...................
    ..............2222222...................
    ..............2222222...................
    ............224422......................
    ............224422......................
    .........222445555222...................
    .........222445555222...................
    .........222445555222...................
    ............225544222...................
    ............225544222...................
    .......22.....2222......................
    .......22.....2222......................
    .....................2222..ddd..........
    .....................2222..ddd..........
    .....................2222..ddd..........
    .......22............225522ddddd........
    .......22............225522ddddd........
    bbb..2255222.........224455ddddd........
    bbb..2255222.........224455ddddd........
    bbb..2255222.........224455ddddd........
    bbbbb22bb444bbbbbbbbbbbbb22bbbbbbb......
    bbbbb22bb444bbbbbbbbbbbbb22bbbbbbb......
    bbb....22..................ddddddd......
    bbb....22..................ddddddd......
    bbb....22..................ddddddd......
    .........................dd1111111dd....
    .........................dd1111111dd....
    .......................111111111111111..
    .......................111111111111111..
    ........................................
    `, SpriteKind.skin)
jimbob.setPosition(82, 70)
let start_button = sprites.create(img`
    ccccbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbccccccccccccccccccccc
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc
    ccbbb9ffffffff69fffffffff699ffff66699ffffff669fffffffff6bbbbbb
    bbb69fffffffff69fffffffff69fffff6669ffffffff69fffffffff66bbbbb
    bb69ffffffffff69fffffffff99ffffff669fffffffff9fffffffff666bbbb
    bb69fffff6666666999fff6669fffffff669fffffffff6669fff666666bbbb
    b669ffff66666666699fff6699fffffff669fff99ffff6669fff6666666bbb
    b669fffff6666666699fff669ffff9fff669ffff9ffff6669fff6666666bbb
    b669ffffffff6666699fff669ffff9ffff69fffffffff6669fff6666666bbb
    b6699ffffffff666669fff699ffff9ffff69fffffffff6669fff6666666bbb
    b66699ffffffff66669fff696fffffffff69ffffffff66669fff6666666bbb
    b66666999fffff66669fff699fffffffff69fffffff666669fff6666666bbb
    b666699999ffff66669fff69fffffffffff9ffffffff66669fff6666666bbb
    bb669ffff99fff66669fff69fff6669ffff9fffffffff6669fff666666bbbc
    bb669fffffffff66669fff99fff6669ffff9fff6fffff6669fff666666bbcc
    bbb69fffffffff66669fff99fff66669fff9fff69ffff6669fff66666bbccc
    bbbbb9fffffff666669cccc9fff66669fff9fff669fff6669fff666bbbcccc
    bbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbcccccc
    `, SpriteKind.Start_button)
start_button.setPosition(80, 107)
player_chosen = false
forever(function () {
    if (mySprite.overlapsWith(start_button)) {
        mySprite.setImage(img`
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f f . f . . . . . 
            . . . . . f 1 f 1 f 1 f f . . . 
            . . . . . f 1 1 1 f 1 f 1 f . . 
            . f f . . f 1 1 1 f 1 f 1 f . . 
            . f 1 f . f 1 1 1 1 1 1 1 f . . 
            . f 1 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 f . . . 
            . . . . . . f f f f f f . . . . 
            `)
    } else if (mySprite.overlapsWith(sizzle)) {
        mySprite.setImage(img`
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f f . f . . . . . 
            . . . . . f 1 f 1 f 1 f f . . . 
            . . . . . f 1 1 1 f 1 f 1 f . . 
            . f f . . f 1 1 1 f 1 f 1 f . . 
            . f 1 f . f 1 1 1 1 1 1 1 f . . 
            . f 1 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 f . . . 
            . . . . . . f f f f f f . . . . 
            `)
    } else if (mySprite.overlapsWith(bingle)) {
        mySprite.setImage(img`
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f f . f . . . . . 
            . . . . . f 1 f 1 f 1 f f . . . 
            . . . . . f 1 1 1 f 1 f 1 f . . 
            . f f . . f 1 1 1 f 1 f 1 f . . 
            . f 1 f . f 1 1 1 1 1 1 1 f . . 
            . f 1 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 f . . . 
            . . . . . . f f f f f f . . . . 
            `)
    } else if (mySprite.overlapsWith(jimbob)) {
        mySprite.setImage(img`
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . . f 1 f f . f . . . . . 
            . . . . . f 1 f 1 f 1 f f . . . 
            . . . . . f 1 1 1 f 1 f 1 f . . 
            . f f . . f 1 1 1 f 1 f 1 f . . 
            . f 1 f . f 1 1 1 1 1 1 1 f . . 
            . f 1 1 f 1 1 1 1 1 1 1 1 f . . 
            . . f 1 1 1 1 1 1 1 1 1 1 f . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 f . . . 
            . . . . . . f f f f f f . . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . f . . . . . . . . . . . . 
            . . . f f . . . . . . . . . . . 
            . . . f 1 f . . . . . . . . . . 
            . . . f 1 1 f . . . . . . . . . 
            . . . f 1 1 1 f . . . . . . . . 
            . . . f 1 1 1 1 f . . . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . . f 1 1 1 1 1 1 f . . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 f f . . . . . 
            . . . f 1 1 f f 1 f . . . . . . 
            . . . f 1 f . . f 1 f . . . . . 
            . . . . f . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
