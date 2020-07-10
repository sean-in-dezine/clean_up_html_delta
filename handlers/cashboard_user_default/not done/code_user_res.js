exports.hoosiers = (req, res, next) => {
    if (req.method === "GET") {
        let timestamp = new Date()
        log(`\n\tfunction: \n`.brightBlue + ` exports.users`.grey + ` \n\t\tin handlers.js `.white + '\nfind ALL users '.brightBlue + `\n\n${timestamp}\n`.brightMagenta)
        const getUsers = () => {
            User.find({}, (err, result) => {
                if (err) {
                    log(err)
                } else {
                    res.json(result)
                }
            })
        }
        getUsers()
    } else if (req.method === "POST") {
        res.json({
            server: "say's hello",
        });
    } else {
        console.error("some sort of problem on ", req.url);
    }
};