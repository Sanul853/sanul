music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
})
basic.forever(function () {
    music.playMelody("G F G A - F E D ", 120)
})
