input.onPinPressed(TouchPin.P3, function () {
    basic.showString("3")
    basic.showIcon(IconNames.SmallSquare)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        # . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `).showImage(0)
    while (input.buttonIsPressed(Button.B)) {
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `).showImage(0)
        images.createImage(`
            # . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . #
            `).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        images.createImage(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `).showImage(0)
        images.createImage(`
            # . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . #
            `).showImage(0)
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . #
            `).showImage(0)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `).showImage(0)
        images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        images.createImage(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `).showImage(0)
        images.createImage(`
            # # # # #
            # # # . #
            # # # # #
            # . # # #
            # # # # #
            `).showImage(0)
        images.createImage(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # #
            `).showImage(0)
        images.createImage(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # #
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . # # #
            # # # # #
            # # # # #
            . # # # #
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . # # #
            # # . # #
            # # # # #
            . # # # #
            `).showImage(0)
        images.createImage(`
            . # # # .
            # . # # #
            # # . # #
            # # # . #
            . # # # .
            `).showImage(0)
        images.createImage(`
            . # # # #
            # . # # #
            # # . # #
            # # # . #
            # # # # .
            `).showImage(0)
        images.createImage(`
            # # # # #
            # # # # #
            . # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . # . . .
            # # # # #
            . # . . .
            . # . . .
            . # . . #
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0xff0000)
    basic.showString("car")
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(0xff8000)
    images.createImage(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `).showImage(0)
    music.playTone(440, music.beat(BeatFraction.Eighth))
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Green)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `).showImage(0)
    basic.setLedColor(Colors.Orange)
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Red)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Orange)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `).showImage(0)
    basic.setLedColor(Colors.Green)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        # . . . #
        `).showImage(0)
    images.createImage(`
        . . # . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Orange)
    images.createImage(`
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Red)
    images.createImage(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Orange)
    images.createImage(`
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.setLedColor(Colors.Green)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `).showImage(0)
    basic.setLedColor(Colors.Blue)
    basic.pause(1000)
    music.playMelody("B D B D B D B D ", 140)
    basic.setLedColor(Colors.Blue)
    basic.pause(1000)
    basic.setLedColor(Colors.Blue)
    basic.turnRgbLedOff()
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        `).showImage(0)
    basic.setLedColor(Colors.Blue)
    basic.pause(1000)
    basic.setLedColor(Colors.Blue)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        # # . # #
        `).showImage(0)
    basic.turnRgbLedOff()
    images.createImage(`
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        # # . # #
        `).showImage(0)
    basic.setLedColor(Colors.Blue)
    music.playMelody("B D B D B D B D ", 174)
    basic.pause(1000)
    basic.setLedColor(Colors.Blue)
    images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `).showImage(0)
    basic.setLedColor(Colors.Off)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        # . . # .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        . # . # .
        . . . . .
        # . . . #
        . . . # #
        `)
    basic.showLeds(`
        # # . # .
        . # . . .
        . . . . .
        . . . . #
        # . . # #
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . # . . #
        . . . . .
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        . . . . #
        . . . . .
        . # . . .
        . . . # #
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        # . . # .
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        # . . # .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . # .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . #
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . # . #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        . . # . #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # . .
        . . # . .
        . . # . #
        `)
    basic.clearScreen()
})
basic.clearScreen()
basic.setLedColor(0x00ff00)
basic.pause(100)
basic.turnRgbLedOff()
