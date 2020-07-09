// !new var scope
let log = console.log
let addloops = document.getElementById('addloops')
addloops.addEventListener('click', addLoops)

function addLoops(ev) {
    ev.preventDefault()
    let constants
    let lifecycle
    let appear
    let input
    let z_index
    let system
    let owner
    let log_id
    let from
    let to
    let status
    let event
    let loopid
    let submitadd
    let closedisplay
    let logid = {
        logid: log_id,
        event: event,
        status: status,
        from: from,
        to: to
    }

    let loop = logid

    let logged = {
        recent: logid.log_id
    }
    let card

    let info = {

        system: system,
        loop: logid,
        owner: owner,
        logged: logged.recent
    }

    loop.info = info
    log(loop.info)



    const displayInputScreen = () => {
        const createInputs = (loopid, system, owner, status) => {

            let div = document.createElement('div')
            div.id = 'div'
            let originalbody = document.querySelector('body')
            originalbody.appendChild(div)
            loopid = document.createElement('input')
            system = document.createElement('input')
            owner = document.createElement('input')
            status = document.createElement('input')
            constants = document.createElement('input')
            lifecycle = document.createElement('input')

            loopid.id = 'loopid'
            system.id = 'system'
            owner.id = 'owner'
            status.id = 'status'
            constants.id = 'constants'
            lifecycle.id = 'lifecycle'

            loopid.name = 'loopid'
            system.name = 'system'
            owner.name = 'owner'
            status.name = 'status'
            lifecycle.name = 'lifecycle'
            constants.name = 'lifecycle'

            loopid.placeholder = 'loopid'
            system.placeholder = 'system'
            owner.placeholder = 'owner'
            status.placeholder = 'status'
            constants.placeholder = 'constants'
            lifecycle.placeholder = 'lifecycle'


            body = document.querySelector('body > #div')
            body.appendChild(loopid)
            body.appendChild(status)
            body.appendChild(owner)
            body.appendChild(system)
            body.appendChild(lifecycle)
            body.appendChild(constants)

            submitadd = document.createElement('button')
            submitadd.id = submitadd
            submitadd.textContent = 'submit loop'
            submitadd.style.backgroundColor = 'green'
            submitadd.style.color = 'white'
            body.appendChild(submitadd)

            closedisplay = document.createElement('button')
            closedisplay.id = 'closedisplay'
            closedisplay.textContent = 'close display'
            closedisplay.style.backgroundColor = 'red'
            closedisplay.style.color = 'white'
            body.appendChild(closedisplay)

        }
        createInputs(loopid, system, owner, status)
    }
    displayInputScreen()

    submitadd.addEventListener('click', submitLoop)

    function submitLoop() {
        log('submit loop')

        // get the data
        // input it into the shit

    }
    let inputitems = document.querySelector('#div')
    inputitems = inputitems.childNodes
    closedisplay.addEventListener('click', closeInputScreen)

    function closeInputScreen() {
        log('close input screen')
        log(inputitems)
        inputitems.forEach(id => id.remove())
        inputitems.forEach(id => id.remove())
        inputitems.forEach(id => id.remove())
    }


}