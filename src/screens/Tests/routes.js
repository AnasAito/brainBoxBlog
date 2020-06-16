import CreateTests from "./CreateTests";
import EditTest from "./EditTest";
import CreateSection from "./CreateSection";
import EditSection from "./EditSection";
import CreateActivity from "./CreateActivity";
import EditActivity from "./EditActivity";
var indexRoutes = [
  {
    path: "/tests/all",
    exact: true,
    name: "All Tests",
    component: CreateTests,
    layout: "/admin",
  },
  {
    path: "/tests/edit/:id",
    exact:true,
    name: "Edit Test",
    component: EditTest,
    layout: "/admin",
  },
  {
    path: "/tests/sections",
    exact: true,
    name: "Create Section",
    component: CreateSection,
    layout: "/admin",
  },
  {
    path: "/tests/sections/edit/:id",
    exact:true,
    name: "Edit Section",
    component: EditSection,
    layout: "/admin",
  },
  {
    path: "/tests/activities",
    exact: true,
    name: "Create Activities",
    component: CreateActivity,
    layout: "/admin",
  },
  {
    path: "/tests/activities/edit/:id",
    exact:true,
    name: "Edit Activity",
    component: EditActivity,
    layout: "/admin",
  }
];

export default indexRoutes;
