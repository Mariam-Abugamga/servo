// created by; Mariam Abugamga
// date; sept 30, 2020
// this program moves the servo back and forth
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
})
