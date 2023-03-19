let countElement = document.getElementById("count-el")
let count = Number(countElement.textContent)

let saveElement = document.getElementById("save-el")
let firstSaveCompleted = false

function increment() {
    count += + 1
    countElement.textContent = count
}

function decrement() {
    count -= 1
    countElement.textContent = count
}

function save() {
    if(firstSaveCompleted == false){
        saveElement.textContent += " " + count
        firstSaveCompleted = true
    } else {
        saveElement.textContent += ", " + count
    }
    console.log(count)
}

function reset() {
    count = 0
    firstSaveCompleted = false
    countElement.textContent = count
    saveElement.textContent = "Previous Entries:"
}