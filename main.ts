input.onGesture(Gesture.Shake, function () {
    sweet = randint(1, 2)
    if (sweet == 1) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("sweet")
})
let sweet = 0
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
	
})
