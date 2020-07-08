let user
let enabled = true
let disabled = false


let permissions = {

    level: {
        app: {
            xfersto: [app, admin, girls, gen4, fold4, tech, qc], //transfer ability, or which levels of user can this person transfer to?
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]

        },
        admin: {
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        },
        girls: {
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        },
        gen4: {
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        },
        fold4: {
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        },
        tech: {
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        },
        office: {},
        qc: {
            xfersto: [girls, admin], //can assign to girls
            reqfrom: [app, admin, girls, gen4, fold4, tech, qc], //can receive from [users/type]
        }
    },
    access: {

    },
    global: {
        inception: enabled, //fn
        requestany: enabled //request any loop from anyone
    },

}