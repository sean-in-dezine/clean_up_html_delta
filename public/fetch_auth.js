function submitId_Name() {


    let data = getValues('login')
    console.log(data)
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + ''
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
}

function otherwiseRegister() {




    let data = getValues('register')

    // new Promise((resolve, reject) => {
    //         // !   set time out

    //         resolve()
    //     }).then(() => {
    //         console.log('hello')
    //     }).then(() => {
    //         throw new Error('oops')
    //     }).catch(err => console.warn(err))
    //     .then(() => {
    //         console.log('do this other thing')
    //     }).catch(err => console.error(err))


    // new Promise((resolve, reject) => {
    //         // !    add event listener

    //         resolve()
    //     }).then(() => {
    //         console.log('hello')
    //     }).then(() => {
    //         throw new Error('oops')
    //     }).catch(err => console.warn(err))
    //     .then(() => {
    //         console.log('do this other thing')
    //     }).catch(err => console.error(err))

    // let params = {}
    // params = JSON.stringify({
    //     params
    // })
    // let h = new Headers()
    // h.append('content-type', 'application/json')
    // let url = window.location.href + ''
    // let options = {
    //     method: 'POST',
    //     headers: h,
    //     body: params
    // }
    // let req = new Request(url, options)
    // fetch(req)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))
}


function POST_REGISTRATION(data) {

    let url = '/'
    let h = new Headers()
    h.append('content-type', 'application/json')
    let options = {
        method: 'POST',
        headers: h,
        body: data
    }
    let req = new Request(url, options)



    return req




    // new Promise((resolve, reject) => {

    //     (fetch(req) !== undefined) {
    //          fetch(req).then(res => res.text()).then(data => console.log(data, 'hi'))
    //      }
    // }).catch(err => console.log(err))





}

function RETURN_REGISTRATION(res) {
    let registration_data = res

    console.log(registration_data)
}