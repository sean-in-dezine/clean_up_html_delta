// let reports_bt_cntr = document.querySelector('.reports_bt_cntr')
// let reports_btn_id = document.getElementById('reports_btn_id')
// let reports_input_in_cntr = document.querySelector('.reports_input_in_cntr')
// let reports_input_id = document.getElementById('reports_input_id')
reports_btn_id.addEventListener('click', runReportClicked)

function runReportClicked(ev) {
    ev.preventDefault()

    let params = {
        reports: "running"
    }
    params = JSON.stringify(
        params
    )
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../reports'
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