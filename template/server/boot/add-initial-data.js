// import initialProf from '../../server/initial-data/example1-teacher';
// import initialClassroom from '../../server/initial-data/example1-classroom';
// import initialStudent from '../../server/initial-data/example1-student';

/**
 * Create the initial data of the system
 */
export default function addInitialData(server) {
//   const Teacher = server.models.Teacher;
//   const Classroom = server.models.Classroom;
//   const Student = server.models.Student;

//   const createTeacher = () => {
//     return Teacher.create(initialProf);
//   };
//   const createStudent = teacher => {
//     initialStudent.teacherId = teacher.id;
//     return Student.create(initialStudent)
//       .then(student => ({teacher, student}));
//   };
//   const createClassroom = ({student, teacher}) => {
//     initialClassroom.studentId = student.id;
//     initialClassroom.teacherId = teacher.id;
//     return Classroom.create(initialClassroom).then(classroom => ({
//       teacher,
//       student,
//       classroom,
//     }));
//   };

//   return createTeacher()
//     .then(createStudent)
//     .then(createClassroom);
}
