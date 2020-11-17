//Blocks Test
basic.forever(function () {
    serial.writeLine("Red:   " + (TCS3414.readRed()))
    serial.writeLine("Green: " + (TCS3414.readGreen()))
    serial.writeLine("Blue:  " + (TCS3414.readBlue()))
    serial.writeLine("Clear: " + (TCS3414.readClear()))
    basic.pause(1000)
})
