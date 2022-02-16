const tasks = [];

const addTask = (param) => {
    if(param !== ''){
        const task = {name: param, status: '作業中'};
        tasks.push(task);
        showTasks();
    }
}

const deltask = (index) =>{
    tasks.splice(index,1);
    showTasks();
}

const mkdelbutton = (td4, index) =>{
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener("click", () => {
        deltask(index);
    })
    deleteButton.textContent = "削除";
    td4.appendChild(deleteButton);
}

const mkstatbutton = (td3, status ,index) =>{
    const statusButton = document.createElement('button');
    statusButton.textContent = status;
    td3.appendChild(statusButton);
    statusButton.addEventListener("click", () => {
        statusButton.textContent = transtask(index);
    })
}

const transtask = (index) =>{
    if(tasks[index].status === "作業中"){
        tasks[index].status = "完了";
    }else{
        tasks[index].status = "作業中";
    }
    return tasks[index].status;
}

const mktaskinfo = (td1,td2,index,taskname) =>{
    td1.textContent = index;
    td2.textContent = taskname;
}

const showTasks = () => {
    const output = document.getElementById("output");
    output.textContent = '';
    document.getElementById("singletask").value = "";
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        mktaskinfo(td1,td2,index,task.name);
        mkstatbutton(td3,task.status,index);
        mkdelbutton(td4,index);
        output.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    });
}
