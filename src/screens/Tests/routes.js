// course routes
import CreateCourse from "./CreateCourse";
import EditCourse from "./EditCourse";
// level routes
import CreateLevel from "./CreateLevel";
import EditLevel from "./EditLevel";
// unit routes
import CreateUnit from "./CreateUnit";
import EditUnit from "./EditUnit";
// lesson routes
import CreateLesson from "./CreateLesson";
import EditLesson from "./EditLesson";
// activity routes
import CreateActivity from "./CreateActivity";
import EditActivity from "./EditActivity";

// templator route
import Templator from "./Templator";
var indexRoutes = [
  {
    path: "/courses/all",
    exact: true,
    name: "All Courses",
    component: CreateCourse,
    layout: "/admin",
  },

  {
    path: "/courses/edit/:id",
    exact: true,
    name: "Edit Course",
    component: EditCourse,
    layout: "/admin",
  },

  {
    path: "/courses/levels",
    exact: true,
    name: "Create Level",
    component: CreateLevel,
    layout: "/admin",
  },
  {
    path: "/courses/levels/edit/:id",
    exact: true,
    name: "Edit Level",
    component: EditLevel,
    layout: "/admin",
  },
  {
    path: "/courses/units",
    exact: true,
    name: "Create Unit",
    component: CreateUnit,
    layout: "/admin",
  },
  {
    path: "/courses/units/edit/:id",
    exact: true,
    name: "Edit Unit",
    component: EditUnit,
    layout: "/admin",
  },
  {
    path: "/courses/lessons",
    exact: true,
    name: "Create Unit",
    component: CreateLesson,
    layout: "/admin",
  },
  {
    path: "/courses/lessons/edit/:id",
    exact: true,
    name: "Edit Lesson",
    component: EditLesson,
    layout: "/admin",
  },
  {
    path: "/courses/activities",
    exact: true,
    name: "Create Activities",
    component: CreateActivity,
    layout: "/admin",
  },
  {
    path: "/courses/activities/edit/:id",
    exact: true,
    name: "Edit Activity",
    component: EditActivity,
    layout: "/admin",
  },
  {
    path: "/courses/templator/:id",
    exact: true,
    name: "Templator",
    component: Templator,
    layout: "/admin",
  },
];

export default indexRoutes;
