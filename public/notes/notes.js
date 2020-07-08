function removeTag() {

}

function addTag() {

}

function tagAdded() {

}


window.onload = function () {

    let log = console.log
    let super_notes_remove = document.getElementById('remove')
    let super_notes_add_added = document.getElementById('super_notes_add_added')
    let super_notes_inputs = document.querySelectorAll('.super_notes_input')
    let super_notes_tag_row = document.getElementById('super_notes_tags_input')

    super_notes_add_added.addEventListener('click', getInputs)

    function getInputs() {



    }
}



// !direct to you live from da cashboard

let lets_goALAMO = document.querySelector('#lets_goALAMO')
let get_it_on_notes = document.querySelector('.get_it_on_notes')


let super_notes_post_um_dv_cntr = document.querySelector('.super_notes_post_um_dv_cntr')
let rather_notes_id_of_you = document.getElementById('rather_notes_id_of_you')

function doThisRightHere() {
    window.onload = lets_goALAMO.addEventListener('click', handle_a_large_note_query)

    function handle_a_large_note_query(ev) {
        ev.preventDefault()

        postNotes()

    }
}


// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
function postNotes() {
    let params = {
        notes: "to, @, whatever",
        users: ["users",
            "more users", "and cant forget more users"
        ],
        tags: ["but what about tags?"]
    }
    params = JSON.stringify({
        params
    })
    let h = new Headers()
    h.append('content-type', 'application/json')
    let url = window.location.href + '../../../notes'
    let options = {
        method: 'POST',
        headers: h,
        body: params
    }
    let req = new Request(url, options)
    fetch(req)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
// !fetch mizzade
doThisRightHere()