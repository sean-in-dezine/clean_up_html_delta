let loopid_bt_cntr = document.querySelector('.loopid_bt_cntr')
let loopid_btn = document.getElementById('loopid_btn')
let system_bt_cntr = document.querySelector('.system_bt_cntr')
let system_btn = document.getElementById('system_btn')
let type_bt_cntr = document.querySelector('.type_bt_cntr')
let type_btn = document.getElementById('type_btn')
let due_date_bt_cntr = document.querySelector('.due_date_bt_cntr')
let date_btn_due = document.getElementById('date_btn_due')
let hydro_status_bt_cntr = document.querySelector('.hydro_status_bt_cntr')
let hydro_btn = document.getElementById('hydro_btn')
let hydro_remaining_bt_cntr = document.querySelector('.hydro_remaining_bt_cntr')
let hydro_remain_btn = document.getElementById('hydro_remain_btn')
let loop_status_bt_cntr = document.querySelector('.loop_status_bt_cntr')
let status_btn = document.getElementById('status_btn')
let test_packs_bt_cntr = document.querySelector('.test_packs_bt_cntr')
let test_packs_btn = document.getElementById('test_packs_btn')
let date_log_bt_cntr = document.querySelector('.date_log_bt_cntr')
let date_log_btn = document.getElementById('date_log_btn')
let card_sub_cntr = document.querySelector('.card_sub_cntr')
let car_id_sub = document.getElementById('card_id_sub')
let department_bt_cntr = document.querySelector('.department_bt_cntr')
let dept_btn = document.getElementById('dept_btn')
let owner_bt_cntr = document.querySelector('.owner_bt_cntr')
let loop_log_bt_cntr = document.querySelector('.loop_log_bt_cntr')
let loop_log_btn = document.getElementById('loop_log_btn')
let comments_bt_cntr = document.querySelector('.comments_bt_cntr')
let comments_btn = document.getElementById('comments_btn')
let owner_btn = document.getElementById('owner_btn')


let post_btn_card = document.getElementById('post_btn_card')

post_btn_card.addEventListener('click', post_btn_card_clicked)

function post_btn_card_clicked() {
    let params = {

        post: "card clicked",
        tired: "as hell"

    }
    params = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../card'
    let options = {
        method: 'POST',
        headers: h,
        body: params
    }
    console.log('test')
    let req = new Request(url, options)
    fetch(req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}