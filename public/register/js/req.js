postreq = document.getElementById('postreq')

postreq.addEventListener('click', postReq)

function postReq(e) {
    e.preventDefault()
    // log('postreq clicked')

    let url = window.location.href + '/log'
    const h = new Headers()
    h.append('Content-type', 'application/json')
    let req = new Request(url, {

        body: JSON.stringify({
            location: {
                set: ['pipe']
            }
        }),
        method: 'POST',
        headers: h
    })


    fetch(req)
        .then(res => {
            log(res.body)
            return res.text()
        })
        .then(data => log(data))
        .catch(err => console.error(err))


}