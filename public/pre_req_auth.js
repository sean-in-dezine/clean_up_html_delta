blocksfive = document.querySelectorAll('.blocks5:not(:focus)')


// function die(data, data_todie) {
//     data = data_todie[data].id
//     data = document.getElementById(data)
//     data.remove()
// }
// function live(data, data_tolive) {

// }

// function killData(data_todie) {
//     for (let data in data_todie) {

//         new Promise((resolve, reject) => {
//                 die(data, data_todie)
//             }).then(() => {


//                 console.log('should never see this in the console.')
//             })
//             .catch(err => {
//                 if (data === null || data === 'null' || data === 'undefined' || data === undefined) {
//                     err = {
//                         err: 'it appears there are no lements'
//                     }
//                     console.log(err)
//                 }
//             }).catch(err => err)
//             .finally(() => {

//                 console.log('done')
//             })
//     }
// }

function getValues(param) {

    // !i sense a snippet coming for getting the values of inputs
    if (param === 'login') {
        let pwd = password.value
        let eml = email_id.value
        let ver = 'false'
        let atmp = 'true'
        let prms = 'unset'

        let login_data = {
            login: [{
                pwd,
                eml,
                ver,
                atmp,
                prms
            }]
        }
        login_data = JSON.stringify(login_data)
        return login_data

    } else if (param === 'register') {
        let phone = document.getElementById('phone')
        let badge = document.getElementById('badge')
        let secretkey = document.getElementById('secretkey')
        // let phone = document.createElement('input')
        phone.id = 'phone'
        phone.placeholder = 'phone number'
        phone.required = 'true'

        // let badge = document.createElement('input')
        badge.id = 'badge'
        badge.placeholder = 'badge number'
        badge.required = 'true'
        let sub = submit_registration_id
        let il = submit_registration_id.parentNode
        if (secretkey === null) {
            let secretkey = document.createElement('input')
            il.insertBefore(secretkey, sub)

        }
        secretkey.id = 'secretkey'
        secretkey.placeholder = 'secretkey'
        secretkey.type = 'password'
        secretkey.required = 'true'



        // phone.remove()
        // badge.remove()
        // secretkey.remove()
        // killData({
        //     phone,
        //     badge,
        //     secretkey
        // })




        // il.insertBefore(phone, sub)
        // il.insertBefore(badge, sub)



        if (param = 'clicksubmit') {

            let eml = username.value
            let pwd = register_password
            pwd = password.value
            let phn = phone.value
            let bdg = badge.value
            secretkey = secretkey.value
            let ver = 'false'
            let atmp = 'true'
            let prms = 'unset'




            let register_data = {
                register: [{
                    eml,
                    pwd,
                    phn,
                    bdg,
                    secretkey,
                    ver,
                    atmp,
                    prms
                }]
            }
            register_data = JSON.stringify(register_data)
            console.log(register_data)
            return (register_data)
        }



        // let eml = username.value
        // let pwd = register_password
        // pwd = password.value
        // let phn = phone.value
        // let bdg = badge.value
        // secretkey = secretkey.value
        // let ver = 'false'
        // let atmp = 'true'
        // let prms = 'unset'




        // let register_data = {
        //     register: [{
        //         eml,
        //         pwd,
        //         phn,
        //         bdg,
        //         secretkey,
        //         ver,
        //         atmp,
        //         prms
        //     }]
        // }
        // register_data = JSON.stringify(register_data)
        // console.log(register_data)
        // return (register_data)
    }




}




function validation(data) {
    console.log('test')
}

