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

const showTasks = () => {
    const output = document.getElementById("output");
    output.textContent = '';
    document.getElementById("singletask").value = "";
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const button1 = document.createElement('button');
        const td4 = document.createElement('td');
        const button2 = document.createElement('button');
        button2.value = index;
//        button2.setAttribute('onclick', `deltask(${index})`);
        // ここで「削除」をおした時にイベントを走らせたい
        // https://teratail.com/questions/243340
        button2.addEventListener("click", () => {
            deltask(index);
        })
        button1.textContent = "作業中";
        button2.textContent = "削除";
        td1.textContent = index;
        td2.textContent = task.name;
        output.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td3.appendChild(button1);
        tr.appendChild(td4);
        td4.appendChild(button2);
    });
}
