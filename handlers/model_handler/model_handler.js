exports.register = (req, res, next) => {
    if (req.method === 'GET') {
        res.send('create')
    } else if (req.method === 'POST') {
        let obj = req.body
        const createUser = () => {
            const name = obj.username
            const badge = obj.badge
            const email = obj.email
            const password = obj.password
            try {
                const user = User.create({
                    name: obj.username,
                    badge: obj.badge,
                    email: obj.email,
                    password: obj.password
                }).catch(err => log(`${err}`.red))
            } catch (err) {
                res.json({
                    response: 'err'
                })
            }
        }
        createUser()
    } else {
        res.json({
            success: 'failed'
        })
    }
}

exports.getAllUsers = (req, res, next) => {
    const getUsers = () => {
        if (req.method !== undefined) {
            if (req.method === 'GET') {
                try {
                    // !replace with get users
                    const user = User.create({
                        name: obj.username,
                        badge: obj.badge,
                        email: obj.email,
                        password: obj.password
                    }).catch(err => console.log(err))
                } catch (err) {
                    res.json({
                        response: 'err'
                    })
                }
            }
        }
    }
    getUsers()
}






exports.getAllUsers = (req, res, next) => {
    const getUsers = () => {
        if (req.method !== undefined) {
            if (req.method === 'GET') {
                try {
                    // !replace with get users
                    const user = User.create({
                        name: obj.username,
                        badge: obj.badge,
                        email: obj.email,
                        password: obj.password
                    }).catch(err => console.log(err))
                } catch (err) {
                    res.json({
                        response: 'err'
                    })
                }
            }
        }
    }
    getUsers()
}


