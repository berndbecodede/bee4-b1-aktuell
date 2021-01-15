input.onPinPressed(TouchPin.P0, function () {
    basic.showCompass(5000)
})
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
    basic.showString("a-b")
    images.createImage(`
        # . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `).showImage(0)
    while (input.buttonIsPressed(Button.B)) {
        basic.setLedColor(0x00ff00)
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `).showImage(0)
        basic.setLedColor(Colors.Indigo)
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
        basic.setLedColor(Colors.Purple)
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
        basic.setLedColor(Colors.Off)
        images.createImage(`
            . . . . .
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
            . . . . .
            `).showImage(0)
        music.playTone(392, music.beat(BeatFraction.Quarter))
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
        music.playTone(494, music.beat(BeatFraction.Quarter))
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
        music.playTone(262, music.beat(BeatFraction.Quarter))
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
        music.playTone(262, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `).showImage(0)
        basic.setLedColor(0xff0000)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        basic.turnRgbLedOff()
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.setLedColor(0xff8000)
        images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `).showImage(0)
        basic.setLedColor(Colors.Green)
        images.createImage(`
            . . . . #
            . . . # .
            . . . . .
            . # . . .
            # . . . .
            `).showImage(0)
        music.playTone(659, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `).showImage(0)
        basic.setLedColor(Colors.Violet)
        images.createImage(`
            . . . . #
            . . . # .
            . . . . .
            . # . . .
            # . . . .
            `).showImage(0)
        music.playTone(165, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `).showImage(0)
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
        basic.setLedColor(Colors.Yellow)
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
            # . . . .
            `).showImage(0)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `).showImage(0)
        images.createImage(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `).showImage(0)
        music.playTone(784, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            # . . . .
            # . . . .
            # # # . .
            # # # . .
            `).showImage(0)
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        images.createImage(`
            . # # # .
            # . . # .
            # . . . .
            # # # . .
            # # # . .
            `).showImage(0)
        music.playTone(494, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . . . . .
            # # # # .
            # . . # .
            # # # . .
            # # # . .
            `).showImage(0)
        basic.setLedColor(0xff8000)
        basic.pause(100)
        images.createImage(`
            . . . . .
            # . . . .
            # # # # .
            # # # # .
            # # # . .
            `).showImage(0)
        basic.turnRgbLedOff()
        images.createImage(`
            . . . . .
            # . . . .
            # . . . .
            # # # # .
            # # # # .
            `).showImage(0)
        images.createImage(`
            . . . . .
            # . . . .
            # # # . .
            # # # # .
            # # # # .
            `).showImage(0)
        images.createImage(`
            . . . . .
            # . # # #
            # # . # #
            # # # . #
            # # # # .
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
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        music.playTone(784, music.beat(BeatFraction.Quarter))
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
        basic.setLedColor(0xff0000)
        basic.showString("ERROR")
        basic.turnRgbLedOff()
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
        music.playTone(262, music.beat(BeatFraction.Quarter))
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `).showImage(0)
        basic.setLedColor(0xff0000)
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        basic.turnRgbLedOff()
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
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("2")
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
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("p1")
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
})
basic.clearScreen()
basic.setLedColor(0x00ff00)
basic.pause(100)
basic.turnRgbLedOff()
