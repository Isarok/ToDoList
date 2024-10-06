const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})


function createItem(item) {
    let priority = document.getElementById('priority').value;
    itemsArray.push({ text: item.value, completed: false, priority: priority });
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(currentFilter);
}

