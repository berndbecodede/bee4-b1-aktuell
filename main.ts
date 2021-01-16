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
    music.playMelody("E D E C E D E C ", 140)
    basic.setLedColor(Colors.Blue)
    basic.pause(100)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `).showImage(0)
    music.playMelody("E D E C E D E C ", 140)
    basic.setLedColor(Colors.Blue)
    basic.pause(100)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        `).showImage(0)
    basic.setLedColor(Colors.Blue)
    basic.pause(100)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        # # . # #
        `).showImage(0)
    basic.setLedColor(Colors.Blue)
    images.createImage(`
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        # # . # #
        `).showImage(0)
    basic.setLedColor(Colors.Off)
    images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `).showImage(0)
    basic.pause(100)
    basic.showIcon(IconNames.Tortoise)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.showIcon(IconNames.ArrowNorth)
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showIcon(IconNames.ArrowSouth)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.ArrowSouthWest)
        music.playTone(494, music.beat(BeatFraction.Eighth))
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Heart)
        basic.setLedColor(0xff0080)
        basic.setLedColor(Colors.Off)
        basic.clearScreen()
    }
})
basic.clearScreen()
basic.setLedColor(0x00ff00)
basic.pause(100)
basic.turnRgbLedOff()
