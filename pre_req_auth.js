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
        let phone = document.createElement('input')
        phone.id = 'phone'
        phone.placeholder = 'phone number'
        phone.required = 'true'

        let badge = document.createElement('input')
        badge.id = 'badge'
        badge.placeholder = 'badge number'
        badge.required = 'true'

        let secretkey = document.createElement('input')
        secretkey.id = 'key'
        secretkey.placeholder = 'key'
        secretkey.type = 'password'
        secretkey.required = 'true'

        let sub = submit_registration_id
        let il = submit_registration_id.parentNode
        il.insertBefore(phone, sub)
        il.insertBefore(badge, sub)
        il.insertBefore(secretkey, sub)


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