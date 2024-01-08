export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.filter((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: grades.length > 0 ? grades[0].grade : 'N/A',
      };
    });
}
