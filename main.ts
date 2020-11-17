/**
 * TCS3414   block
 */
//%color=#444444 icon="\uf185" block="TCS3414  "
namespace TCS3414   {
    
    function init(){
        pins.i2cWriteNumber(
        41,
        128,
        NumberFormat.Int8LE,
        true
        )
        pins.i2cWriteNumber(
        41,
        3,
        NumberFormat.Int8LE,
        false
        )
    }
    init()

    /**
     * Reads red color
     */
    //% weight=87 blockGap=8
    //% block="Read red" 
    //% blockId=read_Red
    export function readRed(): number{
        pins.i2cWriteNumber(
        41,
        182,
        NumberFormat.Int8LE,
        true
        )
        return pins.i2cReadNumber(41, NumberFormat.Int16LE, false)
    }

    /**
     * Reads green color
     */
    //% weight=87 blockGap=8
    //% block="Read green" 
    //% blockId=read_Green
    export function readGreen(): number{
        pins.i2cWriteNumber(
        41,
        184,
        NumberFormat.Int8LE,
        true
        )
        return pins.i2cReadNumber(41, NumberFormat.Int16LE, false)
    }

    /**
     * Reads blue color
     */
    //% weight=87 blockGap=8
    //% block="Read blue" 
    //% blockId=read_Blue
    export function readBlue(): number{
        pins.i2cWriteNumber(
        41,
        186,
        NumberFormat.Int8LE,
        true
        )
        return pins.i2cReadNumber(41, NumberFormat.Int16LE, false)
    }

    /**
     * Reads clear
     */
    //% weight=87 blockGap=8
    //% block="Read clear" 
    //% blockId=read_Clear
    export function readClear(): number{
        pins.i2cWriteNumber(
        41,
        180,
        NumberFormat.Int8LE,
        true
        )
        return pins.i2cReadNumber(41, NumberFormat.Int16LE, false)
    }
} 
