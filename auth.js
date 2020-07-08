// !fetchuser


let create_login = document.querySelector('create_login')
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
submit_id_name.addEventListener('click', loginAttempt)

function loginAttempt(ev) {
    ev.preventDefault()
}
let register_sub_cntr = document.querySelector('.register_sub_cntr')
let display_register_dv_cntr = document.querySelector('.display_register_dv_cntr')
let or_register = document.querySelector('.or_register')
let register_from_login = document.querySelector('.register_from_login')
let register_from_login_id = document.getElementById('register_from_login_id')
let convincing_argument = document.querySelector('convincing_argument')
register_from_login_id.addEventListener('click', registerFromLogin)

function registerFromLogin(ev) {
    ev.preventDefault()
}
//*relevancy: [@targeting, (4)parent, (y)grid] //_class
let register_sub_cntr = document.querySelector('.register_sub_cntr')
let sub_register_id = document.getElementById('sub_register_id')
let register_button_dv_cntr = document.querySelector('register_button_dv_cntr')
let blocksfive = document.querySelector('.blocks5')
let blocks = document.querySelector('.blocks')
let email_in_cntr = document.querySelector('.email_in_cntr')
let username = document.getElementById('username')
let blocks1 = document.querySelector('.blocks1')
let forgot = document.querySelector('.forgot')
let request = document.querySelector('.request')
let request_login_button = document.getElementById('.request_login')
let forgot_id = document.getElementById('forgot_id')
let submit_users = document.querySelector('.submit_users')
let user_id = document.getElementById('user')
let not_so_wide = document.querySelector('.not_so_wide')
let input_class = document.querySelector('.input')
let submit_users_id = document.getElementById('submit_users_id')
let tabulated = document.querySelector('.tabulated')
let tabular = document.querySelector('.tabular')
let row = document.querySelector('.row')




const username = document.getElementById("username");
const badge = document.getElementById("badge");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
let eco //errorcode passed from server
submit.addEventListener("click", createUser);

function createUser(ev) {
    ev.preventDefault()
    let createform = ev.target
    let fd = new FormData(form)
    let json = convertFD2JSON(fd)
    // log(json)
    let url = '/register'
    const h = new Headers()
    h.append('Content-type', 'application/json')
    const req = new Request(url, {
        headers: h,
        body: json,
        method: 'POST'
    })
    getHeaders = () => {
        for (let key of h.keys()) {
            console.log(key, h.get(key))
        }
        console.log('hiiiii')
    }
    getReqHeaders = () => {
        for (let key of req.headers.keys()) {
            log('HEADERS SENDING:', key, ':', req.headers.get(key))
        }
    }
    getReqHeaders()
    fetch(req)
        .then(res => res.json())
        .then(data => {
            // !will eventually be an exported module, with all eco's
            // TODO: move to registervalidation.js
            registerValidation = (data) => {

                // ? %sean <<<< this may not work anymore... tried to add 1337, didn't get response on client side. will investigate 
                let eco = data.errorcode
                const appendeco = () => {
                    if (eco === '0011') {
                        alert('your data sucks')
                    } else if (eco === '1337') {
                        alert('your data may not suck, but there\'s a server error')
                    }
                }
                appendeco()
            }
            registerValidation(data)
            console.log(data)
        }).catch(err => {
            console.error(`the current error is  : ${err}`)
            console.warn(`${err.name}, ${err.number}, ${err.message}, ${err.lineNumber}, ${err.stack}`)



        }).catch(err => log('err of da err'))
}

function convertFD2JSON(formData) {
    let obj = {}
    for (let key of formData.keys()) {
        obj[key] = formData.get(key)
    }
    return JSON.stringify(obj)
}