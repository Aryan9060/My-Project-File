const inputBox = document.querySelector('#input-box')
const list = document.querySelector('#list-container')
const button = document.querySelector('.btn')


button.addEventListener('click', () => {

    if (inputBox.value === "") {
        alert("Please enter a task")
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        list.prepend(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
})

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

let saveData = () => {
    localStorage.setItem('data', list.innerHTML);
}


let showTask = () => {
    list.innerHTML= localStorage.getItem("data")
}
showTask()