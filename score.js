
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
const cleanScores = (list) =>
    list.filter(s => s.score >= 0 && s.score <= 100);

const average = (list) => {
    if (list.length === 0) return 0;
    const total = list.reduce((sum, s) => sum + s.score, 0);
    return (total / list.length).toFixed(2);
};


const failedNames = (list) =>
    list.filter(s => s.score < 60).map(s => s.name);

const valid = cleanScores(studentsList);
console.log("全部记录：", studentsList);
console.log("有效记录：", valid);
console.log("平均分：", average(valid));
console.log("不及格名单：", failedNames(valid));        

