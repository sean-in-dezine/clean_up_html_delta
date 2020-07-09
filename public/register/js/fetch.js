function fixUrl() {
    let currentUrl = window.location.href
    log(currentUrl)
    let y = []
    let p = 0
    for (x in currentUrl) {
        y.push(currentUrl[x])
        p += 1
    }
    urlCheck = y[p - 1]
    if (urlCheck === '/') {

        window.location = window.location.href - '/'
        log('dope')
    } else {
        // window.location = window.location.href + '/'
        log('not dope')
    }
}
fixUrl()


// !getusers
document.querySelector("#getusers").addEventListener(
    'click',
    getUsers
)

function getUsers(ev) {
    btn = document.getElementById('getusers')
    let url = window.location.href + '/users/'
    let h = new Headers()
    h.append('content-type', 'application/json')
    let req = new Request(url, options = {
        headers: h,
        method: 'GET'
    })
    log('1')
    fetch(req)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`response not good.. ${res.status}`)
            }
        })
        .then(jsonData => {
            log(jsonData)
            for (data in jsonData) {
                if (data < 10) {
                    log(jsonData[data])
                    let x = data
                    let y = jsonData[data]
                    log(y)
                    let z = JSON.stringify({
                        y
                    }, null, '\t')


                    document.getElementById('ul')
                        .appendChild(document.createElement('li'))
                        .textContent = `${x}: ${z}, ${y._id}, ${y.username}`

                }

            }
        })
}


// !clickfilters
document.querySelector('#togglefilters').addEventListener('click', clickFilters)
let bool = false

function clickFilters() {
    log('filters toggled')
    bool = true
    log(bool)
    let url = window.location.href + 'filters'
    fetch(url)
        .then(res => res.text())
        .then(data => log(data))

}


// !go 2 cashboard
const cashbtn = document.getElementById('gocashboard')
cashbtn.addEventListener('click', goCash)

function goCash() {
    log('redirected to cashboard')
}