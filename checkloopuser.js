const log = console.log
let usera
let userb
let statusa
let statusb
let datetime
let loopid = '77-HOS-4872a'
let event = [
    transaction = {
        from: usera,
        to: userb,
        date: datetime
    },
    comment = {
        user: user,
        tags: tags,
        date: datetime,
        loop: loopid,
        event: transaction
    },
    statuschange = {
        from: statusa,
        to: statusb,
        date: datetime
    }
]
let lifecycle


let user = {
    name: 'sean',
    loops: [{
        loopid: loopid,
        lifecycle: 'prelooped',
        status: 'waiting for ...',
        comments: [{
            time: datetime,
            user: 'comment by user',
            status: 'prelooped',
            lifecycle: 'prelooped',
            onevent: [event.transaction, comment, statuschange] // in this case, status changed, transaction, and comment all executed together

        }]
    }]
}