// ===== 成绩统计工具 =====
// 场景：给定一组学生成绩（含非法值），清洗后做统计分析

// 原始数据：数组 + 对象组织，故意混入非法值用于测试清洗
const students = [
  { name: '李四', score: 92 },
  { name: '王五', score: 45 },
  { name: '赵六', score: 77 },
  { name: '孙七', score: 59 },
  { name: '周八', score: 88 },
  { name: '吴九', score: 105 },   // 非法：超过满分100
  { name: '郑十', score: -3 },     // 非法：负分
  { name: '钱三', score: 'abc' },  // 非法：非数字
];

// 清洗函数：只保留 score 为 0~100 之间数字的记录
// 职责单一——仅做过滤，不做统计
const cleanScores = (list) =>
  list.filter(s =>
    typeof s.score === 'number' &&
    !Number.isNaN(s.score) &&
    s.score >= 0 && s.score <= 100
  );

// ===== 统计函数 =====

// 平均分：用 reduce 求和后除以人数，空数组返回 0 防止除零
const average = (list) => {
  if (list.length === 0) return 0;
  const total = list.reduce((sum, s) => sum + s.score, 0);
  return (total / list.length).toFixed(2);
};

// 最高分：用 reduce 逐个比较，返回完整对象
const highest = (list) =>
  list.reduce((max, s) => (s.score > max.score ? s : max), list[0]);

// 不及格名单：用 filter 筛选后 map 提取姓名
const failedNames = (list) =>
  list.filter(s => s.score < 60).map(s => s.name);

// 初步验证（开发阶段自测）
const validStudents = cleanScores(students);
console.log('清洗后有效数据：', validStudents);
console.log('平均分：', average(validStudents));
console.log('最高分：', highest(validStudents));
console.log('不及格名单：', failedNames(validStudents));
