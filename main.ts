input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smilee")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(2)
