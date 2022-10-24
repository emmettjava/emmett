let speed = 0
let gas = 10
info.setLife(3)
let spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 2 2 8 . . . . . . 
    . . . . . 8 8 2 2 8 8 . . . . . 
    . . . . . 8 2 2 2 2 8 . . . . . 
    . . . 8 8 8 2 8 8 2 8 8 8 . . . 
    . . . 8 8 2 2 8 8 2 2 8 8 . . . 
    . . . 8 8 2 8 8 8 8 2 8 8 . . . 
    . f f 8 8 2 8 8 8 8 2 8 8 f f . 
    . f f 8 8 8 8 8 8 8 8 8 8 f f . 
    . f f 8 8 8 8 8 8 8 8 8 8 f f . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 2 8 8 8 8 2 8 8 . . . 
    . . . . . 5 . . . . 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceship, 100, 100)
game.onUpdateInterval(500, function () {
    if (controller.up.isPressed()) {
        speed += 5
        gas -= 1
        if (gas == 0) {
            game.over(false)
        }
    } else if (!(controller.up.isPressed())) {
        speed += 0 - 3
    }
})
