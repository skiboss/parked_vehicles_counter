let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countArr = []

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count == 0) {
        return;
    }
    else {
        countArr.push(count)
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
    }
    console.log(countArr)
}

function getTotal () {
    let answer = prompt("Are you ready to close for the day?").toLowerCase()
    if (answer == "yes") {
        let sum = 0
        countArr.forEach(x => sum += x)
        console.log(sum);
        document.getElementById("sum").innerText = sum
    } else {
        alert("You should only get total when you're done for the day")
    }
}
