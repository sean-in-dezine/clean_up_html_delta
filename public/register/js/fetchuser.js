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