import Dashboard from "screens/Dashboard";
import Users from "screens/Users";
import Tests from "screens/Tests";
import Blocks from "screens/Blocks";

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
    path: "/tests",
    name: "Tests",
    component: Tests,
    layout: "/admin",
  },
  { path: "/blocks", name: "Blocks", component: Blocks, layout: "/admin" },
];

export default indexRoutes;
