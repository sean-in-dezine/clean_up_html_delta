let current_file = './public/search/search.js'


let search_button_id = document.getElementById('search_button_id')
let search = document.getElementById('search')
let search_bt_cntr = document.querySelector('.search_bt_cntr')
let search_sub_cntr = document.querySelector('.search_sub_cntr')
let search_in_cntr = document.querySelector('.search_in_cntr')

window.onload = search_button_id.addEventListener('click', searchClicked)

// !handle the response [called in the fetch]
function handleSearchRes() {
    console.log('handling search res')
}



// !send the request
function searchClicked(ev) {
    ev.preventDefault()
    let body = search.value
    let example = []
    let filters = 'inactive'
    let code = 'search'
    if (filters !== 'inactive') {

        code = 'search/filters'
    } else {
        code = 'search'
    }

    body = {
        body: body,
        filters: filters,
        code: code

    }


    body = JSON.stringify(body)
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../search'
    let options = {
        method: 'POST',
        headers: h,
        body: body
    }
    let req = new Request(url, options)
    fetch(req)
        .then(res => res.json())
        .then(data => {
            let x = handleSearchRes()
            //? console.log here %%log
            let y = console.log('public/search/search.js > searchClicked(ev) > handleSearchRes >  fetch(/search)', `\t\tcurrent_file`)
            return x, console.log(data), y
        })
        .catch(err => console.error(err))

}