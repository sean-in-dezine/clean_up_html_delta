// loop
/*



get/display
update/put/post
    - status
    - lifecycle
    - comments
    - owner
    - card


*/

// log
/*





*/

//      `transfer
/* add/update

user 1 from
user 2 to
assign/req/return (auto... if the last owner is the person it is returning to.. build a fn to check this())
transfer type (written on wood desk somewhere in box with all handlers written)
accepted: [user]
rejected: [user]
waiting_on_user:  
not_waiting_on_user:
date_sent: [added to log here]
time_elapsed_since_date_sent:
date_accepted: [added to log here]
date_rejected: [added to log here]
*/

//      `users
/* 
done
// xx-get all users-xx
// xx-create user-xx
done

delete all users
login
-
delete user(s)
update user(s)
-    -permissions
-    -password
-    -  -forgot
-    -  -change
-    -email
-    -  -forgot
-    -  -change
-    -update all info


*/


//  `card
/*

get/display card/all loop info
get loop
get log

*/

//  `comments
/*
get/post

user, tag, date, loop, transfer (look up), status
*/

//  `transfer{}
/* 

*/

// progression_tracker

/* 

to be added to status changes/transfers

for status
for transfer

[progression {true: progressed falsed: regressed}]
status_progression: boolean


lifecycle_progression: boolean


*/


// ` reports
/* get all data

____dump to .csv
*/


// !build middleware session log [%sean322]
// * front end > backend. ... so like front end [ main fnality clicked > all inputs by section > userid > ip > > permissions any changes to those 3 things 
let input = document.querySelector('input')
input = 'button element'
let section = {
    input: [{
        value: '1'
    }, {
        value: '2'
    }]
}
let inputsarray = []
section =
    () => {
        for (input in section) {
            let val = input.value
            inputsarray.push[{
                input: val
            }]
        }
    }

// *imports in {section: {for (input in section) {let val = input.value