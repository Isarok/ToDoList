document.getElementById('Urgent').addEventListener('click', function () {
    currentFilter = 'Urgent';
    displayItems(currentFilter);
});

document.getElementById('Important').addEventListener('click', function () {
    currentFilter = 'Important';
    displayItems(currentFilter);
});

document.getElementById('Medium').addEventListener('click', function () {
    currentFilter = 'Medium';
    displayItems(currentFilter);
});

document.getElementById('Not Important').addEventListener('click', function () {
    currentFilter = 'Not Important';
    displayItems(currentFilter);
});

document.getElementById('All').addEventListener('click', function () {
    currentFilter = 'All';
    displayItems(currentFilter);
});

document.getElementById('Completed').addEventListener('click', function () {
    currentFilter = 'Completed';
    displayItems(currentFilter);
});

document.getElementById('Uncompleted').addEventListener('click', function () {
    currentFilter = 'Uncompleted';
    displayItems(currentFilter);
});