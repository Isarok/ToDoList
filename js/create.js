const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function createItem(item) {
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateCheckListeners() {
    const crossoutBtn = document.querySelectorAll(".checkBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    crossoutBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            inputs[i].classList.addClass("crossout");
        })
    })
 }