function getGrade(...grade) {
  const avgGrade =
    grade.reduce((acc, curVal) => acc + curVal, 0) / grade.length;
  if (avgGrade >= 90) {
    return "A";
  } else if (avgGrade >= 80) {
    return "B";
  } else if (avgGrade >= 70) {
    return "C";
  } else if (avgGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
