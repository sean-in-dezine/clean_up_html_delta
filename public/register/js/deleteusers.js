//* delete all users

const deloneuser = document.getElementById('deloneuser')
const delusers = document.getElementById('delusers')
delusers.addEventListener('click', delUsers)
// !enable delete all here
delusers.style.display = 'none'

function delUsers(ev) {
    let onename = oneuserinput.value
    ev.preventDefault()

    let params = {
        onename: onename,
        from: "_del-all-users_",
        log: "userid",
        autocomplete: false
    }

    let xparams = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let purl = window.location.href + 'oneuser=*/'
    let options = {
        method: 'POST',
        headers: h,
        body: xparams
    }
    let req = new Request(purl, options)

    fetch(req)
        .then(res => res.json())
        .then(data => log(data))
        .catch(err => log(err))

}

deloneuser.addEventListener('click', delOneUser)

function delOneUser(ev) {
    let onename = oneuserinput.value
    ev.preventDefault()

    let params = {
        onename: onename,
        from: "_del-one-user_",
        log: "userid",
        autocomplete: false
    }

    let xparams = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let purl = window.location.href + 'oneuser=*/'
    let options = {
        method: 'POST',
        headers: h,
        body: xparams
    }
    let req = new Request(purl, options)

    fetch(req)
        .then(res => res.json())
        .then(data => log(data))
        .catch(err => log(err))
}