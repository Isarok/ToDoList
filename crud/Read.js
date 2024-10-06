function displayItems(filter) {
  let items = "";
  const filteredItems = itemsArray.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return item.completed;
    if (filter === 'Uncompleted') return !item.completed;
    return item.priority === filter;
  });

  for (let i = 0; i < filteredItems.length; i++) {
    items += `<div class="item">
                  <div class="input-controller">
                    <textarea class="task-textarea ${filteredItems[i].completed ? 'crossout' : ''}" disabled>${filteredItems[i].text}</textarea>
                    <div class="edit-controller" style="${filter !== 'All' ? 'display: none;' : ''}">
                      <i class="fa-solid fa-check checkBtn" data-id="${filteredItems[i].id}"></i>
                      <i class="fa-regular fa-pen-to-square editBtn" data-id="${filteredItems[i].id}"></i>
                      <i class="fa-solid fa-trash deleteBtn" data-id="${filteredItems[i].id}"></i>
                    </div>
                  </div>
                  <div class="update-controller" style="${filter !== 'All' ? 'display: none;' : ''}">
                    <button class="saveBtn" data-id="${filteredItems[i].id}">Save</button>
                    <button class="cancelBtn" data-id="${filteredItems[i].id}">Cancel</button>
                  </div>
                </div>`;
  }

  document.querySelector(".to-do-list").innerHTML = items;

  if (filter === 'All') {
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
    activateCheckListeners();
  }
}