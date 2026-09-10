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
