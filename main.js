const elForm = document.querySelector(".form")
const elInput = document.querySelector(".input")
const elList = document.querySelector(".list")

const localData = JSON.parse(window.localStorage.getItem("todos"))

const todos = localData || []

let count = 1




elForm.addEventListener("submit", (e) => {
    e.preventDefault()


    const inputValue = elInput.value

    let todo = {
        name: inputValue,
        id: count++
    }

    todos.push(todo)
    window.localStorage.setItem("todos", JSON.stringify(todos))
    elList.innerHTML = null
    renderTodos()
})

const renderTodos = function(){
    for(item of todos){
        const newLi = document.createElement("li")
        const newP = document.createElement("p")
        const newDiv = document.createElement("div")
        newLi.textContent = item.name
        newP.textContent = item.author

        newDiv.setAttribute("clss", "div")
        newP.setAttribute("class", "desc")
        elList.appendChild(newDiv)
        newDiv.appendChild(newLi)
        newDiv.appendChild(newP)
    }
}

renderTodos(todos, elList)