const body = document.querySelector('body');
const ul = document.querySelector('.list');
const listContainer = document.querySelector('.list-container')
const input = document.querySelector('#item-input');
const addButton = document.querySelector('.add-item')


function addItem() {
    if (input.value.length > 0) {
        let inputValue = document.querySelector('#item-input').value;
        let li = document.createElement('li');
        li.textContent = inputValue;
        let remove = document.createElement('span');
        let done = document.createElement('span')
        done.textContent = `\u{2714}`
        done.classList.add('signs');
        remove.textContent = '\u{274C}';
        remove.classList.add('remove');
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container')
        itemContainer.append(li, remove, done);
        ul.appendChild(itemContainer);
        input.value = "";
    } else {
        input.classList.add('red')
    }
}

function handleKeyEvent(e) {
    if (e.keyCode === 13) {
        addItem();
    }
}

function removeItem(e) {
    if(e.target.className === 'remove') {
        e.target.closest('div').remove();
    }
}

function done(e) {
    console.log(e.target.parentElement.firstChild)
     if(e.target.className === 'signs') {
         e.target.parentElement.firstChild.classList.toggle('line-through');
     }
}
addButton.addEventListener('click', addItem);
window.addEventListener('keydown', handleKeyEvent);
ul.addEventListener('click', removeItem);
ul.addEventListener('click', done);
