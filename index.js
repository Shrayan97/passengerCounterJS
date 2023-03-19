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

        count = 0
        countElement.textContent = 0
    } else {
        saveElement.textContent += ", " + count

        count = 0
        countElement.textContent = 0
    }
    console.log(count)
}

function reset() {
    count = 0
    firstSaveCompleted = false
    countElement.textContent = count
    saveElement.textContent = "Previous Entries:"
}