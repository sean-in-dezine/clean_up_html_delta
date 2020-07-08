let admin_sub_cntr = document.querySelector('.admin_sub_cntr')
let admin_bt_cntr = document.querySelector('.admin_bt_cntr')
let admin_access_id = document.getElementById('admin_access_id')
let admin_container = document.getElementById('admin_container')


function createAdminElements() {
    console.log('hello')
    const loginAdmin = () => {
        console.log('heeeeeei')
        let admin_username = document.createElement('input')
        let admin_password = document.createElement('input')
        let admin_certain = document.createElement('button')
        admin_username
            .id = 'admin_username'
        admin_password.id = 'admin_password'
        admin_certain.id = 'admin_certain'

        admin_container.insertBefore(admin_username, admin_access_id)
        admin_container.insertBefore(admin_password, admin_access_id)
        admin_container.insertBefore(admin_certain, admin_access_id)


        admin_username = document.getElementById('admin_username')
        admin_password = document.getElementById('admin_password')
        admin_certain = document.getElementById('admin_certain')
        admin_username.required = 'true'
        admin_username.placeholder = 'username'
        admin_password.style.backgroundColor = 'black'
        admin_password.style.color = 'grey'
        admin_password.required = 'true'
        admin_password.placeholder = 'password'
        admin_password.type = 'password'
        admin_certain.style.backgroundColor = 'blue'
        admin_certain.style.color = 'white'
        admin_certain.textContent = 'YES, ADMIN ACCESS IS WHAT I DESIRE'



        let admin_login = {
            user: admin_username.value,
            pass: admin_password.value,
            pass: admin_certain.value
        }

        console.log(admin_login)

        return admin_login
    }
    loginAdmin()

    console.log('elements created')

}

const addBack = () => {
    document.getElementById('admin_access_id').addEventListener('click', getAdminAxs)
}


const f = admin_access_id.addEventListener('click', getAdminAxs)
window.onload = f

let changeable = document.getElementById('admin_access_id')


function changeTextContent() {
    console.log('change text content!!!')
    if (changeable === null) {
        return
    } else if (changeable.id === 'admin_access_id') {
        changeable.id = 'admin_close_access'
        changeable.textContent = 'close admin access'
        console.log('\n')
        console.log('CHANGEABLE', changeable)

    } else if (changeable.id === 'admin_close_access') {

        changeable.textContent = 'get admin access'
        changeable.id = 'admin_access_id'
        console.log('\n')
        console.log('CHANGEABLE', changeable)

    } else {
        console.log(changeable)
    }
}

function getAdminAxs(ev) {
    ev.preventDefault()
    console.log('clicked')

    function deleteElementsIfPreviouslyAdded() {
        new Promise((resolve, reject) => {
            changeTextContent()
            if (document.getElementById('admin_username') !== null) {
                document.getElementById('admin_username').remove()


            }
            if (document.getElementById('admin_password') !== null) {
                document.getElementById('admin_password').remove()

            }
            if (document.getElementById('admin_certain') !== null) {
                document.getElementById('admin_certain').remove()

            }

        }).catch(err => {

            //? console.log here %%log
            let xybrand = console.log(
                'public/admin/admin.js > getAdminAxs(ev) > deleteElementsIfPreviouslyAdded() (/admin)',
                `\t\tcurrent_file`)
            console.log(err), xybrand
        })
    }

    // addBack()
    console.log('gooooooooooooochi')

    deleteElementsIfPreviouslyAdded()
    createAdminElements()


    let close_access_id = document.getElementById('admin_close_access')
    close_access_id.addEventListener('click', closeAdminAccess)

    function closeAdminAccess() {

        console.log('public/admin/admin.js > getAdminAxs(ev) > closeAdminAccess() (/admin)',
            `\t\tcurrent_file`)
        new Promise((resolve, reject) => {

            deleteElementsIfPreviouslyAdded()
            console.log('line 241')

            // addBack()
        }).catch(err => console.log('already removed, pressing on'))


    }

    function loginToAdmin() {

        console.log('hello  /..../././.')
    }
    // !two event listeners created... ~~>


    loginToAdmin()
    console.log('supppp')


}