function activateCheckListeners() {
    const crossoutBtn = document.querySelectorAll(".checkBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    crossoutBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            inputs[i].classList.toggle("crossout");
            // Actualizar el estado de itemsArray para reflejar el tachado
            itemsArray[i].completed = !itemsArray[i].completed;
            localStorage.setItem("items", JSON.stringify(itemsArray));
        });
    });
}

