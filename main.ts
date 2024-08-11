input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Up), function () {
    if (input.buttonIsPressed(Button.AB) == false) {
        mode += -1
        if (mode == 0) {
            mode = 5
        }
        if (mode == 6) {
            mode = 1
        }
    } else {
        music.playTone(165, music.beat(BeatFraction.Eighth))
    }
})
input.onGesture(Gesture.LogoUp, function () {
    led.setBrightness(255)
    basic.pause(10000)
    led.setBrightness(68)
})
input.onSound(DetectedSound.Loud, function () {
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    music.play(music.stringPlayable("D C5 C B D C5 C B ", 220), music.PlaybackMode.UntilDone)
    basic.pause(5000)
    basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
})
input.onGesture(Gesture.Shake, function () {
    Schritte += 1
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Up), function () {
    if (input.buttonIsPressed(Button.AB) == false) {
        mode += 1
        if (mode == 0) {
            mode = 5
        }
        if (mode == 6) {
            mode = 1
        }
    } else {
        music.playTone(165, music.beat(BeatFraction.Eighth))
    }
})
let mode = 0
basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
music.play(music.createSoundExpression(WaveShape.Noise, 3689, 4296, 41, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
led.setBrightness(255)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(50)
}
let Schritte = 0
mode = 1
let count1 = 1
let modeIn = false
led.setBrightness(68)
input.setSoundThreshold(SoundThreshold.Loud, 187)
/**
 * Mainmenü
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) == true) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.AB) == false) {
            music.playTone(220, music.beat(BeatFraction.Eighth))
        } else {
            if (count1 == 1) {
                modeIn = true
            }
            if (count1 == 2) {
                modeIn = false
            }
            if (count1 == 1) {
                count1 = 2
            }
            if (count1 == 2) {
                count1 = 1
            }
        }
    }
    if (input.buttonIsPressed(Button.B) == true) {
        basic.pause(500)
        if (input.buttonIsPressed(Button.AB) == false) {
            music.playTone(220, music.beat(BeatFraction.Eighth))
        } else {
            if (count1 == 1) {
                modeIn = true
            }
            if (count1 == 2) {
                modeIn = false
            }
            if (count1 == 1) {
                count1 = 2
            }
            if (count1 == 2) {
                count1 = 1
            }
        }
    }
})
basic.forever(function () {
    if (modeIn == false) {
        if (mode == 1) {
            basic.showLeds(`
                . # # # .
                # . # . #
                # . # . #
                # . . # #
                . # # # .
                `)
        }
        if (mode == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                # . . # .
                # # # # #
                `)
        }
        if (mode == 3) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        }
        if (mode == 4) {
            basic.showLeds(`
                # # # # #
                . . . # .
                . . # . .
                . # . . .
                # # # # #
                `)
        }
        if (mode == 5) {
            basic.showLeds(`
                . # . . #
                # # # . .
                . # . . #
                . . . # .
                . . # . .
                `)
        }
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(50)
        if (mode == 3) {
            basic.showString("L")
            while (modeIn == true) {
                if (input.lightLevel() < 51) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        `)
                }
                if (input.lightLevel() < 102) {
                    if (input.lightLevel() >= 51) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            # # # # #
                            # # # # #
                            `)
                    }
                }
                if (input.lightLevel() < 153) {
                    if (input.lightLevel() >= 102) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
                if (input.lightLevel() < 204) {
                    if (input.lightLevel() >= 153) {
                        basic.showLeds(`
                            . . . . .
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
                if (input.lightLevel() <= 255) {
                    if (input.lightLevel() >= 204) {
                        basic.showLeds(`
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            # # # # #
                            `)
                    }
                }
            }
        }
        if (mode == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                # . . # .
                # # # # #
                `)
            basic.pause(50)
            while (modeIn == true) {
                basic.showString("" + (Schritte))
                basic.pause(3000)
            }
        }
    }
})
