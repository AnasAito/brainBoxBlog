import Dashboard from "screens/Dashboard";
import Users from "screens/Users";
import Tests from "screens/Tests";
import Blocks from "screens/Blocks";
import Grade from "screens/Grade";
import Report from "screens/Report";
import Testing from "screens/Testing";

var indexRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/courses",
    name: "Courses",
    component: Tests,
    layout: "/admin",
  },

  { path: "/blocks", name: "Blocks", component: Blocks, layout: "/admin" },
  { path: "/grade", name: "Grade", component: Grade, layout: "/admin" },
  { path: "/report", name: "Report", component: Report, layout: "/admin" },
  { path: "/testing", name: "testing ", component: Testing, layout: "/admin" },
];

export default indexRoutes;
