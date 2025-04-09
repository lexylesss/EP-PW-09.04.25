function addListItem() {
    const list = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New item';
    list.appendChild(newItem);
}

document.getElementById('addButton').addEventListener('click', addListItem);