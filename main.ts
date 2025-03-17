basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            # # # # #
            . . # . #
            . # # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . #
            # # # # #
            # . # . .
            . # # . .
            . # . # .
            `)
    }
})
