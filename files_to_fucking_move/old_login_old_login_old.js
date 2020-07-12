// !not in use currently, example

const log = console.log
log('test   ..')

let email = document.getElementById('email')
let password = document.getElementById('password')
const submit = document.getElementById('submit')
submit.addEventListener('click', submitLogin)

email.value = 'text'
password.value = 'text'


function submitLogin() {

    let url = window.location.href
    let h = new Headers()

    checkNull = () => {
        if (email.value === undefined || email.value === '' || password.value === undefined || password.value === '') {
            log('value is bad')
            return 'bad'
        } else {
            log('value is good')
            log(email.value, password.value)
            return 'good'
        }
    }

    // checkEmailSyntax = () => {

    // }

    validate = () => {
        // switch good bad here
        if (checkNull() === 'good') {
            let x = {
                email: email.value,
                password: password.value
            }
            let y = JSON.stringify(x)
            h.append('content-type', 'application/json')
            let options = {
                method: 'POST',
                body: y,
                headers: h
            }
            let req = new Request(url, options)

            fetch(req)
                .then(res => res.json())
                .then(data => log(data))
                .catch(err => log(err))


        } else {
            alert('your data sucks')
        }
        // checkEmailSyntax()
    }

    log('validating...')
    validate()
}
