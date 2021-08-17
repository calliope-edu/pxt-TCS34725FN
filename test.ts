//Blocks Test
basic.forever(function () {
    serial.writeLine("Red:   " + (TCS34725.readRed()))
    serial.writeLine("Green: " + (TCS34725.readGreen()))
    serial.writeLine("Blue:  " + (TCS34725.readBlue()))
    serial.writeLine("Clear: " + (TCS34725.readClear()))
    basic.pause(1000)
})
