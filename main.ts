let Face = 0
input.onGesture(Gesture.Shake, function () {
    Face = randint(1, 6)
    basic.showNumber(Face)
})
basic.forever(function () {
	
})
