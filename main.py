def on_pin_pressed_p0():
    basic.set_led_color(Colors.BLUE)
    basic.pause(100)
    basic.set_led_color(Colors.PURPLE)
    basic.pause(100)
    basic.set_led_color(Colors.RED)
    basic.pause(100)
    basic.set_led_color(Colors.ORANGE)
    basic.pause(100)
    basic.set_led_color(Colors.YELLOW)
    basic.pause(100)
    basic.set_led_color(Colors.GREEN)
    basic.turn_rgb_led_off()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p3():
    images.create_image("""
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        """).show_image(0)
    while input.is_gesture(Gesture.SHAKE):
        basic.set_led_color(Colors.RED)
        basic.pause(100)
        basic.set_led_color(Colors.ORANGE)
        basic.pause(100)
        basic.set_led_color(Colors.YELLOW)
        basic.pause(100)
        basic.set_led_color(Colors.GREEN)
        basic.pause(100)
        basic.turn_rgb_led_off()
input.on_pin_pressed(TouchPin.P3, on_pin_pressed_p3)

def on_button_pressed_a():
    basic.show_string("A")
    while input.pin_is_pressed(TouchPin.P1):
        basic.show_compass(5000)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    images.create_image("""
        . . . # #
        . . . # #
        . . . . .
        # # . . .
        # # . . .
        """).show_image(0)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_gesture_shake():
    basic.set_led_color(Colors.GREEN)
    basic.pause(100)
    basic.turn_rgb_led_off()
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    basic.show_string("AB")
    while input.pin_is_pressed(TouchPin.P0):
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            """)
        basic.show_leds("""
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            """)
        basic.show_leds("""
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . # #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            # . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            # . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . #
            """)
        basic.show_leds("""
            # . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . #
            """)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.clear_screen()
        basic.set_led_color(0x007fff)
        basic.turn_rgb_led_off()
    while input.pin_is_pressed(TouchPin.P3):
        music.play_tone(523, music.beat(BeatFraction.SIXTEENTH))
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . # . . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # . . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # . .
            . . # . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # . .
            . . # . .
            . . # . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # . .
            . . # . .
            . . # # .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # . .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # # # .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # . .
            . # # # .
            # # # # .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # # .
            . # # # .
            # # # # .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # # #
            . # # # .
            # # # # .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # .
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # .
            . . # # .
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . . # # .
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . . # . #
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . . . # #
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . . # # #
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . # # # #
            """)
        basic.show_leds("""
            . # # # #
            . # # # #
            # # # # #
            . . # # #
            . # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # # . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . #
            . # . # .
            . . # . .
            . # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . .
            """)
        basic.show_leds("""
            . . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . . . #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # . . . #
            . # . # .
            . . . . .
            . # . # .
            # . . . #
            """)
        basic.clear_screen()
        basic.show_string("ENDE")
        basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("B")
    basic.show_icon(IconNames.ARROW_NORTH)
    if input.is_gesture(Gesture.SCREEN_UP):
        basic.show_icon(IconNames.CHESSBOARD)
        basic.show_icon(IconNames.ARROW_SOUTH)
    elif input.is_gesture(Gesture.SCREEN_DOWN):
        music.ring_tone(262)
        basic.show_icon(IconNames.ARROW_WEST)
    elif input.is_gesture(Gesture.TILT_LEFT):
        music.play_melody("F E C G F E D C ", 140)
        basic.show_icon(IconNames.ARROW_EAST)
    elif input.is_gesture(Gesture.TILT_RIGHT):
        music.play_melody("C5 B A G F E D C ", 339)
        basic.show_icon(IconNames.YES)
    elif input.button_is_pressed(Button.B):
        music.start_melody(music.built_in_melody(Melodies.PUNCHLINE),
            MelodyOptions.ONCE)
        basic.turn_rgb_led_off()
        music.stop_melody(MelodyStopOptions.ALL)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    basic.show_string("1")
    basic.show_icon(IconNames.SMALL_SQUARE)
    images.create_image("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """).show_image(0)
    images.create_image("""
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        """).show_image(0)
    while input.button_is_pressed(Button.A):
        basic.set_led_color(0xff0000)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.GREEN)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """).show_image(0)
        basic.set_led_color(Colors.ORANGE)
        images.create_image("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.RED)
        images.create_image("""
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.ORANGE)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """).show_image(0)
        basic.set_led_color(Colors.GREEN)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            """).show_image(0)
        images.create_image("""
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            # . . . #
            """).show_image(0)
        images.create_image("""
            . . # . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.ORANGE)
        images.create_image("""
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.RED)
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            """).show_image(0)
        basic.set_led_color(Colors.OFF)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            """).show_image(0)
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # . # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            """).show_image(0)
        images.create_image("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
    while input.button_is_pressed(Button.B):
        basic.set_led_color(0x00ff00)
        images.create_image("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """).show_image(0)
        basic.set_led_color(Colors.OFF)
        images.create_image("""
            # . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . #
            """).show_image(0)
        images.create_image("""
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            """).show_image(0)
        images.create_image("""
            # . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . #
            """).show_image(0)
        images.create_image("""
            # . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . #
            """).show_image(0)
        images.create_image("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """).show_image(0)
        basic.set_led_color(Colors.OFF)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        music.play_tone(392, music.beat(BeatFraction.QUARTER))
        images.create_image("""
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0)
        images.create_image("""
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            """).show_image(0)
        images.create_image("""
            # # # # #
            # # # . #
            # # # # #
            # . # # #
            # # # # #
            """).show_image(0)
        images.create_image("""
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # # #
            # # # # #
            # # # # #
            . # # # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # # #
            # # . # #
            # # # # #
            . # # # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # # #
            # # . # #
            # # # . #
            . # # # #
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # # #
            # # . # #
            # # # . #
            . # # # .
            """).show_image(0)
        images.create_image("""
            . # # # #
            # . # # #
            # # . # #
            # # # . #
            . # # # .
            """).show_image(0)
        images.create_image("""
            . # # # #
            # . # # #
            # # . # #
            # # # . #
            # # # # .
            """).show_image(0)
        images.create_image("""
            . # # # #
            # . # # #
            # # . # #
            # . # . #
            # # # # .
            """).show_image(0)
        images.create_image("""
            . # # # #
            # . # . #
            # # . # #
            # . # . #
            # # # # .
            """).show_image(0)
        images.create_image("""
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            """).show_image(0)
        images.create_image("""
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            """).show_image(0)
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0)
        images.create_image("""
            . # . . .
            # # # # #
            . # . . .
            . # . . .
            . # . . #
            """).show_image(0)
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            """).show_image(0)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

basic.show_string("oN")
music.play_tone(277, music.beat(BeatFraction.HALF))
basic.set_led_color(Colors.RED)
basic.pause(100)
basic.set_led_color(Colors.GREEN)
basic.turn_rgb_led_off()