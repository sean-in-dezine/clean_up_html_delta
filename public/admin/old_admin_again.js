let onnnnn
let param = {}
let admin_access_username_in_cntr = document.querySelector('.admin_access_username_in_cntr')
let id_admin_ax_user = document.getElementById('id_admin_ax_user')
let admin_access_password_in_cntr = document.querySelector('.admin_access_password_in_cntr')
let _id_admin_ax_pw = document.getElementById('_id_admin_ax_pw')
let display_admin_dv_cntr = document.querySelector('.display_admin_dv_cntr')
let display_admin = document.getElementById('display_admin')
let admin_access_id = document.getElementById('admin_access_id')

function setDisplays(param) {
    admin_access_id.style.paddingTop = '10em'
    admin_access_id.style.paddingBottom = '5em'
    admin_access_id.style.paddingBottom = '0em'
    admin_access_id.style.paddingTop = '0em'
    admin_access_id.autofocus = true
    if (param === 'on') {
        _id_admin_ax_pw.style.display = 'none'
        display_admin.style.display = 'none'
        id_admin_ax_user.style.display = 'none'

    } else if (param === 'off') {
        _id_admin_ax_pw.style.display = 'initial'
        display_admin.style.display = 'initial'
        id_admin_ax_user.style.display = 'initial'
    } else {
        console.error('error')
    }
}
let defaultGains

function setDefaults(onnnnn) {
    onnnnn = 'off'
    return defaultGains = switchGains(onnnnn)
}
console.log(defaultGains)
let gains

let hereitis = function skipHere(initial) {

    new Promise((resolve, reject) => {

        function rebellious(initial, none) {

            return initial, none
        }

        return initial
    }).then((res => {

        return console.log(friend.gains, initial, onnnnn)

    })).then((data => {

        // check data
        if (initial === onnnnn) {
            console.log('good')
        } else {
            throw new Error('not equals')
        }
    })).catch((err => console.log(err)))
}


async function switchGains(hereitis) {
    const waitingOnInitial = await new Promise((resolve, reject) => {
        initial = hereitis.skipHere(initial)
        return initial
    }).then((
        disasterStragetgy()

    ))

    const disasterStragetgy = () => {

        console.log('skiphere:   ', initial)
        rebellious(initial, none)
        if (initial === undefined) {

            new Promise((resolve, reject) => {
                if (initial === 'on') {

                    gains = onnnnn
                    friend.gains = {
                        'gains: ': gains
                    }, {
                        'initial: ': initial
                    }, {
                        'onnnnn: ': onnnnn
                    }
                    console.log(gains)
                    resolve()
                }

            }).catch(err => console.log(err, gains))


        }
    }

    window.onload = setDefaults(onnnnn)

    admin_access_id.addEventListener('click', getLoginOptsAdmin)

    function getLoginOptsAdmin(ev) {

        let initial, none


        ev.preventDefault()
        // setDisplays(onnnnn)
        console.log(onnnnn, 'before')
        if (onnnnn === 'on') {
            initial = 'on'

            setDisplays(initial)
            onnnnn = 'off'
        } else {
            onnnnn = 'on'
            none = 'off'
            setDisplays(none)
        }
        console.log(onnnnn, 'after')

        let friend = {}



    }
}