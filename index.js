let countElement = document.getElementById("count-el")
let count = Number(countElement.innerText)

let saveElement = document.getElementById("save-el")
let firstSaveCompleted = false

function increment() {
    count += + 1
    countElement.innerText = count
}

function decrement() {
    count -= 1
    countElement.innerText = count
}

function save() {
    if(firstSaveCompleted == false){
        saveElement.innerText += " " + count
        firstSaveCompleted = true
    } else {
        saveElement.innerText += ", " + count
    }
    console.log(count)
}

function reset() {
    count = 0
    firstSaveCompleted = false
    countElement.innerText = count
    saveElement.innerText = "Previous Entries:"
}