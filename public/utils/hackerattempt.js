// !sort of like a front end middleware, currently works, throw's it's own error, and fetches as a result.

// ?has yet to be implemented ??>><<><>?><?

// !the idea is, that, if there's a function that should only be accessed while a button is visible, and someone tries to access that function but display: 'none' or something is in effect... then hackerattempt is logged.

// !we might could just send the user a "u stumbled on a bug" thing tho




let hackerattempt = document.getElementById('hackerattempt')
hackerattempt.style.marginTop = '5em'
hackerattempt.style.height = '15vh'

hackerattempt.addEventListener('click', hackerAttempt)

function functionCalled() {

    new Promise((resolve, reject) => {

        throw new Error('hacker attempt')
    }).catch(err => {

        function getX(err) {

            let x = console.trace(err)
            let p = JSON.stringify(x)

            let y = {
                error: {
                    err: p,
                    message: 'houston, we have a probbbblem'
                }
            }
            z = JSON.stringify(y)
            let url = window.location.href + '../../../hackerattempt'
            let h = new Headers()
            h.append('content-type', 'application/json')
            let options = {
                method: 'POST',
                headers: h,
                body: z
                // body: y
            }
            let req = new Request(url, options)
            fetch(req)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
        }
        x = getX(err)
        return x
    })

}

function hackerAttempt(ev) {
    ev.preventDefault()
    functionCalled()
}