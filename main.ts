function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        buttonVal = 1
    } else if (buttonVal < 597) {
        buttonVal = 2
    } else if (buttonVal < 725) {
        buttonVal = 3
    } else if (buttonVal < 793) {
        buttonVal = 4
    } else if (buttonVal < 836) {
        buttonVal = 5
    } else if (buttonVal < 938) {
        buttonVal = 6
    } else {
        buttonVal = 0
    }
}
let buttonVal = 0
buttonVal = 0
basic.forever(function () {
    button()
    if (buttonVal) {
        basic.showNumber(buttonVal)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        basic.showString("-X")
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("+X")
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        basic.showString("-Y")
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showString("+Y")
    } else {
        basic.clearScreen()
    }
})
