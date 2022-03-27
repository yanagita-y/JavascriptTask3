'use strict';

const tasks = [];

const addTask = (param) => {
    if(param !== ''){
        const task = {name: param, status: '作業中'};
        tasks.push(task);
        showTasks();
    }
}

const delTask = (index) => {
    tasks.splice(index,1);
    showTasks();
}

const makeDelButton = (deleteButtonTable, index) => {
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', () => {
        delTask(index);
    })
    deleteButton.textContent = '削除';
    deleteButtonTable.appendChild(deleteButton);
}

const makeStatusButton = (statusButtonTable, status ,index) => {
    const statusButton = document.createElement('button');
    statusButton.textContent = status;
    statusButtonTable.appendChild(statusButton);
    statusButton.addEventListener('click', () => {
        statusButton.textContent = changeStatus(index);
    })
}

const changeStatus = (index) => {
    if(tasks[index].status === '作業中'){
        tasks[index].status = '完了';
    } else {
        tasks[index].status = '作業中';
    }
    showTasks();
    return tasks[index].status;
}

const makeTaskInfo = (indexTable,tasknameTable,index,taskname) => {
    indexTable.textContent = index;
    tasknameTable.textContent = taskname;
}

const showTasks = () => {
    let input_choice = document.querySelector('input[name=choice]:checked');
    const output = document.getElementById('output');
    output.textContent = '';
    document.getElementById('singletask').value = '';
    tasks.forEach((task, index) => {
        const titleTable = document.createElement('tr');
        const indexTable = document.createElement('td');
        const tasknameTable = document.createElement('td');
        const statusButtonTable = document.createElement('td');
        const deleteButtonTable = document.createElement('td');
        makeTaskInfo(indexTable,tasknameTable,index,task.name);
        makeStatusButton(statusButtonTable,task.status,index);
        makeDelButton(deleteButtonTable,index);
        if((input_choice.value === 'working' && task.status === '作業中')
        || (input_choice.value === 'done' && task.status === '完了')
        || (input_choice.value === 'all')){
            output.appendChild(titleTable);
        }
        titleTable.appendChild(indexTable);
        titleTable.appendChild(tasknameTable);
        titleTable.appendChild(statusButtonTable);
        titleTable.appendChild(deleteButtonTable);
    });
}


