// filter.js
document.getElementById('Urgent').addEventListener('click', function () {
    displayItems('Urgent');
});

document.getElementById('Important').addEventListener('click', function () {
    displayItems('Important');
});

document.getElementById('Medium').addEventListener('click', function () {
    displayItems('Medium');
});

document.getElementById('Not Important').addEventListener('click', function () {
    displayItems('Not Important');
});

document.getElementById('All').addEventListener('click', function () {
    displayItems();
});