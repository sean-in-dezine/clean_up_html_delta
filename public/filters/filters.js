let filters = document.querySelector('.filters')
let hidden = document.querySelector('.hidden')
let bg2 = document.querySelector('.bg2')
let filterone = document.querySelector('#filterone')
let filtergrid = document.querySelector('.filtergrid')
let FILTERGRID_li = document.querySelector('.filtergrid')
let user = document.querySelector('#user')

let filter_user = document.querySelector('#filter_user')
let filter_comment = document.querySelector('#filter_comment')
let filter_test = document.querySelector('#filter_test')
let filter_system = document.querySelector('#filter_system')
let filter_status = document.querySelector('#filter_status')
let filter_IO_LOCation = document.querySelector('#filter_IO_LOCation')
let filter_loop = document.querySelector('#filter_loop')
let filter_date = document.querySelector('#filter_date')

let filter_sub_cntr = document.querySelector('.filter_sub_cntr')
let filter = document.getElementById('filter')

// !not needed
function reqFilters() {
    let params = {
        request: 'filters',
        doIneedFilters: "probably not, i can just attach them to the body of whatever other request, and have the handlers sort it out on the backend.... Or make a MW function for the front end... but either way, it just needs to be passed in with the body. this is here in case i need it."
    }
    params = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '/filters'
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
// !not needed




function filtersOnLoad() {

    FILTERGRID_li.style.display = 'none'
    _btn_generate_filters_btns()
}



const addFiltersButton = () => {
    let temp_selector = document.createElement('button')
    temp_selector.id = '_btn_generate_filters_btns'
    //! console.log(temp_selector)
    temp_selector.class = "_btn_generate_filters_btns filters_target_button"
    temp_selector.name = "spectacular"
    temp_selector.textContent = 'yoyoyoyoyoyoyoyollllooo'
    filter_sub_cntr.appendChild(temp_selector)
    temp_selector = document.getElementById(temp_selector.id)
    return temp_selector

}
let _btn_generate_filters_btns = () => {
    addFiltersButton()

}

window.onload = filtersOnLoad()