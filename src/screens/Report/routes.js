import GradeReport from "screens/Report/GradeReport";
import StudentReport from "screens/Report/StudentReport";
import TimeReport from "screens/Report/TimeReport";
import FilesReport from "screens/Report/FilesReport";

// import Questions from "screens/Blocks/QuizQuestions";

var indexRoutes = [
  {
    path: "/report/group",
    exact: true,
    name: "Group",
    component: GradeReport,
    layout: "/admin",
  },
  {
    path: "/report/student",
    exact: true,
    name: "Student",
    component: StudentReport,
    layout: "/admin",
  },
  {
    path: "/report/time",
    exact: true,
    name: "Time",
    component: TimeReport,
    layout: "/admin",
  },
  {
    path: "/report/files",
    exact: true,
    name: "Files",
    component: FilesReport,
    layout: "/admin",
  },
];

export default indexRoutes;
