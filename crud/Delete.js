function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(index) {
    itemsArray.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(currentFilter);
}