//*relevancy: [@button, (4)submitting, (y)name] //_class

let click = document.querySelector('.click')
/*.click{}*/
//*relevancy: [@button, (4)submitting, (y)name] //_id
let id_name = document.getElementById('id_name')
/*#id_name{}*/
id_name.addEventListener('click', clickEvent)

function clickEvent(ev) {
    ev.preventDefault()
}


//*relevancy: [@submit, (4)login, (y)entry] //_class
// !emmet
// button.submit_id_name_bt_cntr.login_height_adjustments#submit_id_nmae

// !css
/*.submit_id_name_bt_cntr{}*/
/*#submit_id_name{}*/

// !js
let submit_id_name_bt_cntr = document.querySelector('.submit_id_name_bt_cntr')
let login_height_adjustments = document.querySelector('.login_height_adjustments')
let submit_id_name = document.getElementById('submit_id_name')

submit_id_name.addEventListener('click', loginAttempt)

function loginAttempt(ev) {
    ev.preventDefault()
}



