
let container_main = document.querySelector('.container_main')
let login_sub_cntr = document.querySelector('.login_sub_cntr')
let create_login = document.querySelector('#create_login')
let create_login_other = document.querySelector('create')
let create__id = document.getElementById('create_login')
let blocks1 = document.querySelector('blocks1')
let forgot = document.querySelector('forgot')
let request = document.querySelector('request')
let request_login_button = document.getElementById('request_login')
let forgot_id = document.getElementById('forgot_id')
let tabulated = document.querySelector('.tabulated')
let tabular = document.querySelector('.tabular')
let row = document.querySelector('.row')
let email_in_cntr = document.querySelector('.email_in_cntr')
let email = email_in_cntr
email.name = 'email'
email.required = 'true'
email.placeholder = 'your@email.domain'
let label_email = document.createElement('label')
label_email.htmlFor = 'email'
label_email.id = 'label_email_id'
email.parentNode.append(label_email)
let = document.querySelector('.email_in_cntr')
let = document.getElementById('email_id')
let password_in_cntr = document.querySelector('.password_in_cntr')
let password = document.getElementById('password')
password.name = 'password'
password.required = 'true'
password.placeholder = 'password'
let label_password = document.createElement('label')
label_password.htmlFor = 'password'
label_password.id = 'label_password_id'
password.parentNode.append(label_password)
let submit_id_name_bt_cntr = document.querySelector('.submit_id_name_bt_cntr')
let login_height_adjustments = document.querySelector('.login_height_adjustments')
let submit_id_name = document.getElementById('submit_id_name')
let register_sub_cntr = document.querySelector('.register_sub_cntr')
let display_register_dv_cntr = document.querySelector('.display_register_dv_cntr')
let or_register = document.querySelector('.or_register')
let register_from_login = document.querySelector('.register_from_login')
let register_from_login_id = document.getElementById('register_from_login_id')
let convincing_argument = document.querySelector('convincing_argument')
let sub_register_id = document.getElementById('sub_register_id')
let register_button_dv_cntr = document.querySelector('register_button_dv_cntr')
let blocksfive = document.querySelector('.blocks5')
let blocks = document.querySelector('.blocks')
let username = document.getElementById('username')
let submit_users = document.querySelector('.submit_users')
let user_id = document.getElementById('user')
let not_so_wide = document.querySelector('.not_so_wide')
let input_class = document.querySelector('.input')
let submit_users_id = document.getElementById('submit_users_id')


// !listener(ev)'s

// !users
submit_users_id.addEventListener('click', getUsers)

function getUsers(ev, req) {
    ev.preventDefault()

    let body = {
        user: user.value,
        code: "index/getUser",
        fetch: {
            fn: 'getUsers',
            route: '/users',
            from: window.location.href,
            file: "auth.js",
            html: "auth.html",
            user_action: "submit one user\'s name"
        }
    }
    console.log('not stringified: body')
    console.log(body)
    body = JSON.stringify({
        body
    })
    console.log('JSON.stringify(body)')
    console.log(body)

    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + 'users'
    let options = {
        method: 'POST',
        headers: h,
        body: body
    }
    req = new Request(url, options)
    fetch(req)
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}



// !register
function fetchUrl(req) {
    new Promise((resolve, reject) => {
        fetch(req).then(res => {
            let data = res.json()
            return data
        }).then(data => {
            RETURN_REGISTRATION(data)
        }).catch(err => console.trace(err))
    })
}
submit_id_name.addEventListener('click', loginAttempt)
function loginAttempt(ev) {

    ev.preventDefault()
    submitId_Name()
}
let submit_registration = document.getElementById('submit_registration_id')
console.log(submit_registration)
if (submit_registration !== null) {
    console.log(submit_registration)
    submit_registration.addEventListener('click', submitRegistration)
    let phone = document.getElementById('phone')
    let badge = document.getElementById('badge')
    let secretkey = document.getElementById('secretkey')
    function submitRegistration(ev, param) {
        bdg = badge.value
        phn = phone.value
        key = secretkey.value
        pwd = register_password.value
        eml = username.value
        let data = {
            bdg,
            phn,
            key,
            pwd,
            eml,
            code: 'register/give-em-hell'
        }
        data = JSON.stringify(data)
        // console.log(data)
        // validation(data)
        const req = POST_REGISTRATION(data)
        fetchUrl(req)
        return req
        // fetch_auth()
    }
}
create_login.addEventListener('click', registerFromLogin)
register_from_login_id.addEventListener('click', registerFromLogin)
function registerFromLogin(ev) {
    ev.preventDefault()
    otherwiseRegister()
}

// !event listeners end
function submitId_Name() {
    let data = getValues('login')
    console.log(data)
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + 'login'
    let options = {
        method: 'POST',
        headers: h,
        body: data
    }
    let req = new Request(url, options)
    //     fetch(req)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err))

    fetch(req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))


}

function otherwiseRegister() {

    let data = getValues('register')

}

function POST_REGISTRATION(data) {

    let url = window.location.href + 'register'
    // let url = '/register'
    let h = new Headers()
    h.append('content-type', 'application/json')
    let options = {
        method: 'POST',
        headers: h,
        body: data
    }
    let req = new Request(url, options)



    return req
}

function RETURN_REGISTRATION(res) {
    let registration_data = res

    //? console.log here %%log
    console.log('public/js/fetch_auth.js > RETURN_REGISTRATION(res) > registration_data (/register)', registration_data)

}

function submitId_Name() {
    let data = getValues('login')
    console.log(data)
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + 'login'
    let options = {
        method: 'POST',
        headers: h,
        body: data
    }
    let req = new Request(url, options)
    fetch(req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

function otherwiseRegister() {

    let data = getValues('register')

}
function POST_REGISTRATION(data) {

    let url = window.location.href + 'register'
    // let url = '/register'
    let h = new Headers()
    h.append('content-type', 'application/json')
    let options = {
        method: 'POST',
        headers: h,
        body: data
    }
    let req = new Request(url, options)
    return req
}

function RETURN_REGISTRATION(res) {
    let registration_data = res

    //? console.log here %%log
    console.log(registration_data)

}

blocksfive = document.querySelectorAll('.blocks5:not(:focus)')
function getValues(param) {

    // !i sense a snippet coming for getting the values of inputs
    if (param === 'login') {
        let pwd = password.value
        let eml = email_id.value
        let ver = 'false'
        let atmp = 'true'
        let prms = 'unset'

        let login_data = {
            login: [{
                pwd,
                eml,
                ver,
                atmp,
                prms
            }]
        }
        login_data = JSON.stringify(login_data)
        return login_data

    } else if (param === 'register') {
        let phone = document.getElementById('phone')
        let badge = document.getElementById('badge')
        let secretkey = document.getElementById('secretkey')
        // let phone = document.createElement('input')
        phone.id = 'phone'
        phone.placeholder = 'phone number'
        phone.required = 'true'

        // let badge = document.createElement('input')
        badge.id = 'badge'
        badge.placeholder = 'badge number'
        badge.required = 'true'
        let sub = submit_registration_id
        let il = submit_registration_id.parentNode
        if (secretkey === null) {
            let secretkey = document.createElement('input')
            il.insertBefore(secretkey, sub)
        }
        secretkey.id = 'secretkey'
        secretkey.placeholder = 'secretkey'
        secretkey.type = 'password'
        secretkey.required = 'true'

        if (param = 'clicksubmit') {

            let eml = username.value
            let pwd = register_password
            pwd = password.value
            let phn = phone.value
            let bdg = badge.value
            secretkey = secretkey.value
            let ver = 'false'
            let atmp = 'true'
            let prms = 'unset'

            let register_data = {
                register: [{
                    eml,
                    pwd,
                    phn,
                    bdg,
                    secretkey,
                    ver,
                    atmp,
                    prms

                }]
            }
            register_data = JSON.stringify(register_data)
            console.log(register_data)
            return (register_data)
        }
    }

}

function validation(data) {
    console.log('test')
}