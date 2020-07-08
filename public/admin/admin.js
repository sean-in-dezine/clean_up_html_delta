let onnnnn
let param = {}
let admin_access_username_in_cntr = document.querySelector('.admin_access_username_in_cntr')
let id_admin_ax_user = document.getElementById('id_admin_ax_user')
let admin_access_password_in_cntr = document.querySelector('.admin_access_password_in_cntr')
let _id_admin_ax_pw = document.getElementById('_id_admin_ax_pw')
let display_admin_dv_cntr = document.querySelector('.display_admin_dv_cntr')
let display_admin = document.getElementById('display_admin')
let admin_access_id = document.getElementById('admin_access_id')

function setDisplays(param) {
    admin_access_id.style.paddingTop = '10em'
    admin_access_id.style.paddingBottom = '5em'
    admin_access_id.style.paddingBottom = '0em'
    admin_access_id.style.paddingTop = '0em'
    admin_access_id.autofocus = true
    if (param === 'on') {
        _id_admin_ax_pw.style.display = 'none'
        display_admin.style.display = 'none'
        id_admin_ax_user.style.display = 'none'

    } else if (param === 'off') {
        _id_admin_ax_pw.style.display = 'initial'
        display_admin.style.display = 'initial'
        id_admin_ax_user.style.display = 'initial'
    } else {
        console.error('error')
    }
}

function setDefaults(onnnnn) {
    onnnnn = 'off'
}

window.onload = setDefaults(onnnnn)

admin_access_id.addEventListener('click', getLoginOptsAdmin)

function getLoginOptsAdmin(ev) {
    let initial, none
    ev.preventDefault()
    // setDisplays(onnnnn)
    console.log(onnnnn, 'before')
    if (onnnnn === 'on') {
        initial = 'on'

        setDisplays(initial)
        onnnnn = 'off'
    } else {
        onnnnn = 'on'
        none = 'off'
        setDisplays(none)
    }
    console.log(onnnnn, 'after')


}