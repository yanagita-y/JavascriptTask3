const taskscript = (taskname) => {
    const output = document.getElementById("output");
    const tasks = {name: taskA, status: '作業中'};
    if(taskname !== ''){
        const tr = document.createElement('tr');
        output.appendChild(tr);
        const td1 = document.createElement('td');
        const id = output.childElementCount;
        tr.appendChild(td1);
        td1.textContent = id-1;
        const td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.textContent = taskname;
        const td3 = document.createElement('td');
        tr.appendChild(td3);
        const button1 = document.createElement('button');
        td3.appendChild(button1);
        button1.textContent = "作業中";
        const td4 = document.createElement('td');
        tr.appendChild(td4);
        const button2 = document.createElement('button');
        td4.appendChild(button2);
        button2.textContent = "削除";
        document.getElementById("singletask").value = "";
    }
}
