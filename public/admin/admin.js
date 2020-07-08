let onnnnn
let param = {}
let admin_access_username_in_cntr = document.querySelector('.admin_access_username_in_cntr')
let id_admin_ax_user = document.getElementById('id_admin_ax_user')
let admin_access_password_in_cntr = document.querySelector('.admin_access_password_in_cntr')
let _id_admin_ax_pw = document.getElementById('_id_admin_ax_pw')
let display_admin_dv_cntr = document.querySelector('.display_admin_dv_cntr')
let display_admin = document.getElementById('display_admin')
let admin_access_id = document.getElementById('admin_access_id')

function FetchAdminAuth() {


    // !fetch mizzade
    // !fetch mizzade
    // !!!required here
    console.log('this is the fetch')

    let params = {
        admin: 'attempting to login'
    }
    params = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../admin'
    let options = {
        method: 'POST',
        headers: h,
        body: params
    }
    let req = new Request(url, options)
    fetch(req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

}

// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
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
        admin_login_axs_id.removeEventListener('click', FetchAdminAuth)

    } else if (param === 'off') {
        _id_admin_ax_pw.style.display = 'initial'
        display_admin.style.display = 'initial'
        id_admin_ax_user.style.display = 'initial'
        admin_login_axs_id.addEventListener('click', FetchAdminAuth)

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

        console.log(initial, 'initialllllllllll')
        if (initial === undefined) {
            console.log('oh yeah undefined there buddy %%log1sean')
        } else {
            console.log('initial: ', initial, '\n\n %%log1sean \n\n clearly not undefined \n')
        }
        initial = hereitis.skipHere(initial)
        console.log(initial, 'yeeeeet')
        return initial
    }).then((res => {
        if (initial === 'on' && initial === onnnnn) {
            admin_login_axs_id.addEventListener('click', FetchAdminAuth)
        }
        res = console.log(res)
        return res
    })).catch((err => {
        console.log('nope, didn\'t make it out\n\n\n', err)
    }))

}


window.onload = setDefaults(onnnnn)

admin_access_id.addEventListener('click', getLoginOptsAdmin)
let friend = {}

function thyGains(initial) {
    gains = onnnnn
    friend.gains = {
        'gains: ': gains,
        'initial: ': initial,
        'onnnnn: ': onnnnn
    }
    let loggy = console.log(gains, ': from thy gains')
    return gains, friend, loggy
}

function checkInitial(initial) {
    // !am pinging here
    new Promise((resolve, reject) => {
            sh = thyGains(initial)
            let logFriend = console.log(friend, sh)
            console.log('new promise initiated')
            if (initial === 'off') {
                console.log('shutting down')
                admin_login_axs_id.removeEventListener('click', FetchAdminAuth)
                console.log('shutting down')
            } else if (initial === 'on' && initial === onnnnn) {
                console.log('heroic')
                admin_login_axs_id.addEventListener('click', FetchAdminAuth)

                logFriend()
                resolve()
            } else if (initial === 'on' || initial === onnnnn && onnnnn !== undefined) {
                console.log('yolo brolo')
                console.log("FINALLY WE GOT ONE")
                console.log('initial: ', initial, " onnnn: ", onnnnn)
                logFriend()

            } else if (initial !== 'on' && initial !== onnnnn) {

            } else {
                console.log('you suck bruh')
                admin_login_axs_id.removeEventListener('click', FetchAdminAuth)
            }
            console.log('checkInitial(initial)promise ending')
            return initial
        }).then((res => {

            console.log('im in the ;;then;;')
            resolve()
        }))
        .catch(err => {

            console.log(err, gains)
        })
}

function getLoginOptsAdmin(ev) {

    let initial = onnnnn
    let none


    ev.preventDefault()
    console.log(onnnnn, 'before')
    if (onnnnn === 'on') {
        initial = 'on'
        checkInitial(initial)

        setDisplays(initial)
        onnnnn = 'off'
    } else {


        onnnnn = 'on'
        none = 'off'

        console.log('initial: ', initial)
        setDisplays(none)
        // checkInitial(none)
    }
    console.log(onnnnn, 'after')



}