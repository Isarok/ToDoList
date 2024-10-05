function displayItems(priority) {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        if (!priority || itemsArray[i].priority === priority) {
            items += `<div class="item">
                      <div class="input-controller">
                        <textarea class="task-textarea ${itemsArray[i].completed ? 'crossout' : ''}" disabled>${itemsArray[i].text}</textarea>
                        <div class="edit-controller">
                          <i class="fa-solid fa-check checkBtn"></i>
                          <i class="fa-regular fa-pen-to-square editBtn"></i>
                          <i class="fa-solid fa-trash deleteBtn"></i>
                        </div>
                      </div>
                      <div class="update-controller">
                        <button class="saveBtn">Save</button>
                        <button class="cancelBtn">Cancel</button>
                      </div>
                    </div>`;
        }
    }

    document.querySelector(".to-do-list").innerHTML = items;

    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
    activateCheckListeners();
}