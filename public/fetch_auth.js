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