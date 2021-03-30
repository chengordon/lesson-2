let value = 0
input.onButtonPressed(Button.A, function () {
    value += 0
    basic.showIcon(IconNames.Square)
})
input.onGesture(Gesture.Shake, function () {
    value = randint(0, 2)
    if (0 == 0) {
        basic.showIcon(IconNames.Square)
    } else if (value == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    value = 2
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    value = 1
    basic.showIcon(IconNames.SmallSquare)
})
