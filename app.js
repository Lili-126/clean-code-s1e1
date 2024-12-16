const taskInput = document.getElementById('new-task');//Add a new task.
const addButton = document.getElementById('add-btn');//first button
const incompleteList = document.getElementById('incomplete');//ul of #incompleteTasks
const completedList = document.getElementById('completed');//completed-tasks

addButton.className = 'buttons';

const createNewTaskElement = (taskString) => {

    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');//checkbx
    const label = document.createElement('label');//label
    const editInput = document.createElement('input');//text
    const editButton = document.createElement('button');//edit button
    const deleteButton = document.createElement('button');//delete button
    const deleteButtonImg = document.createElement('img');//delete button image

    listItem.className = 'list';

    label.innerText = taskString;
    label.className = 'task list-item';

    checkBox.type = 'checkbox';
    checkBox.className = 'task-checkbox';

    editInput.type = 'text';
    editInput.className = 'task task__text';

    editButton.innerText = 'Edit';
    editButton.className = 'buttons edit';

    deleteButton.className = 'buttons delete';
    deleteButtonImg.src = './remove.svg';
    deleteButtonImg.className = 'delete__img';

    deleteButton.appendChild(deleteButtonImg);
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
};

const addTask = () => {
    console.log('Add Task...');
    if (!taskInput.value) {
        return;
    };

    const listItem = createNewTaskElement(taskInput.value);
    incompleteList.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = '';

};

const editTask = function () {
    console.log('Edit Task...');
    console.log('Change "edit" to "save"');

    const listItem = this.parentNode;
    const editInput = listItem.querySelector('input[type=text]');
    const label = listItem.querySelector('.list-item');
    const editBtn = listItem.querySelector('.edit');
    const containsClass = listItem.classList.contains('edit-mode');

    if (containsClass) {
        label.innerText = editInput.value;
        editBtn.innerText = 'Edit';
    } else {
        editInput.value = label.innerText;
        editBtn.innerText = 'Save';
    };

    listItem.classList.toggle('edit-mode');
};

const deleteTask = function () {
    console.log('Delete Task...');

    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
};

const taskCompleted = function () {
    console.log('Complete Task...');

    let listItem = this.parentNode;
    completedList.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};

const taskIncomplete = function () {
    console.log('Incomplete Task...');
    let listItem = this.parentNode;
    incompleteList.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

const ajaxRequest = () => {
    console.log('AJAX Request');
};

addButton.onclick = addTask;
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
    console.log('bind list item events');

    const checkBox = taskListItem.querySelector('input[type=checkbox]');
    const editButton = taskListItem.querySelector('button.edit');
    const deleteButton = taskListItem.querySelector('button.delete');

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
};

for (let i = 0; i < incompleteList.children.length; i++) {
    bindTaskEvents(incompleteList.children[i], taskCompleted);
};

for (let i = 0; i < completedList.children.length; i++) {
    bindTaskEvents(completedList.children[i], taskIncomplete);
};