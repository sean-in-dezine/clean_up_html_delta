const clearchanges = document.getElementById('clearchanges')
clearchanges.addEventListener('click', clearChanges)

// document.querySelector("#ul > li:nth-child(1)")

function clearChanges() {
    const uls_to_del = document.querySelectorAll('#ul > li:nth-child(n)')
    log(uls_to_del)
    const ul = document.getElementById('ul')
    uls_to_del.forEach(li => li.remove())
}