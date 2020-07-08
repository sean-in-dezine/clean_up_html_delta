let major_form_id = document.getElementById('major_form_id')

function startForm() {

    window.onload = major_form_id.addEventListener('click', formSubmitFetch)

    function formSubmitFetch(ev) {
        ev.preventDefault()

        sendReqFormSubmit()
    }
}

// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
function sendReqFormSubmit() {
    let params = {
        form: "submit"
    }
    params = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../forms'
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
// !fetch mizzade
startForm()