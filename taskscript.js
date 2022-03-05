const tasks = [];

const addTask = (param) => {
    if(param !== ''){
        const task = {name: param, status: '作業中'};
        tasks.push(task);
        showTasks();
    }
}

const DelTask = (index) =>{
    tasks.splice(index,1);
    showTasks();
}

const makeDelButton = (TableData4, index) =>{
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener("click", () => {
        DelTask(index);
    })
    deleteButton.textContent = "削除";
    TableData4.appendChild(deleteButton);
}

const makeStatusButton = (TableData3, status ,index) =>{
    const statusButton = document.createElement('button');
    statusButton.textContent = status;
    TableData3.appendChild(statusButton);
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
    return tasks[index].status;
}

const makeTaskInfo = (TableData1,TableData2,index,taskname) =>{
    TableData1.textContent = index;
    TableData2.textContent = taskname;
}

const showTasks = () => {
    const output = document.getElementById("output");
    output.textContent = '';
    document.getElementById("singletask").value = "";
    tasks.forEach((task, index) => {
        const TableRow = document.createElement('tr');
        const TableData1 = document.createElement('td');
        const TableData2 = document.createElement('td');
        const TableData3 = document.createElement('td');
        const TableData4 = document.createElement('td');
        makeTaskInfo(TableData1,TableData2,index,task.name);
        makeStatusButton(TableData3,task.status,index);
        makeDelButton(TableData4,index);
        output.appendChild(TableRow);
        TableRow.appendChild(TableData1);
        TableRow.appendChild(TableData2);
        TableRow.appendChild(TableData3);
        TableRow.appendChild(TableData4);
    });
}
