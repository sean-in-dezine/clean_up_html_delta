let seen = true

let date = Date.now

let type = 'transfer'

const displayNotification = () => {
    log('display')
}
const inNotificationsLog = () => {
    log('in notif log')
}
if (seen !== true) {
    displayNotification()
} else {
    inNotificationsLog()

}