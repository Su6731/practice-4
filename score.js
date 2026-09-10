
let studentsList = [];


while (true) {
    let name = prompt("请输入姓名");
    if (name === null) break;
    name = name.trim();
    if (name === "") {
        alert("姓名不能为空！");
        continue;
    }

    let scoreStr = prompt("请输入分数");
    if (scoreStr === null) break;
    let score = Number(scoreStr);
    if (Number.isNaN(score) || score < 0 || score > 100) {
        alert("分数无效，请输入 0~100 之间的数字！");
        continue;
    }

    let student = { name: name, score: score };
    studentsList.push(student);  
}



