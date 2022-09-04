let scoreEl = document.getElementById("home-score")
let addEl = document.getElementById("add-one-home")
let guestEl = document.getElementById("guest-score")
 countHome= 0 
 countGuest= 0

function addOne (){
    countHome += 1
    scoreEl.textContent = countHome
}

function addTwo (){
    countHome += 2
    scoreEl.textContent = countHome
}

function addThree (){
    countHome += 3
    scoreEl.textContent = countHome
}

function addOneGuest (){
    countGuest += 1
    guestEl.textContent = countGuest
}

function addTwoGuest (){
    countGuest += 2
    guestEl.textContent = countGuest
}

function addThreeGuest (){
    countGuest += 3
    guestEl.textContent = countGuest
}

