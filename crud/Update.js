function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", (event) => {
            event.stopPropagation();
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })
}

function activateSaveListeners() {
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", (event) => {
            event.stopPropagation();
            updateItem(inputs[i].value, i)
        })
    })
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", (event) => {
            event.stopPropagation();
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    })
}

function updateItem(text, i) {
    itemsArray[i].text = text;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    // Actualiza la interfaz de usuario
    displayItems('All');
}

function activateCheckListeners() {
    const crossoutBtn = document.querySelectorAll(".checkBtn");
    crossoutBtn.forEach((cb, i) => {
        cb.addEventListener("click", (event) => {
            event.stopPropagation();
            itemsArray[i].completed = !itemsArray[i].completed;
            localStorage.setItem("items", JSON.stringify(itemsArray));
            // Actualiza la interfaz de usuario
            displayItems(currentFilter);
        });
    });
}