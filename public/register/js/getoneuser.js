let getoneuser = document.getElementById('getoneuser')
let oneuserform = document.getElementById('oneuserform')
let oneuserinput = document.getElementById('oneuserinput')
getoneuser.addEventListener('click', getOne)

function getOne(ev) {
    let onename = oneuserinput.value

    ev.preventDefault()

    let onenameparsed = JSON.stringify({
        onename
    })
    let params = {
        onename: onename,
        // parsed: onenameparsed,
        from: "_get-one-user_",
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