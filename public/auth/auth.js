// !selectors up here

// !top down starting here:
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

// !top down ending here


// !javascript territory at the bottom






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





// !selectors end


// !event listeners


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
            //? console.log here %%log
            console.log('public/js/auth.js > fetchUrl(req) (/register)', data)
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
        console.log(data)

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