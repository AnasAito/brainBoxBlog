import AllUsers from "screens/Users/All";
import UploadUsers from "screens/Users/Upload";
import CreateUser from "screens/Users/Create";
import Groups from "screens/Users/Groups";

var indexRoutes = [
  {
    path: "/users/all",
    exact: true,
    name: "All Users",
    component: AllUsers,
    layout: "/admin",
  },
  {
    path: "/users/upload",
    exact: true,
    name: "Upload Users",
    component: UploadUsers,
    layout: "/admin",
  },
  {
    path: "/users/create",
    exact: true,
    name: "Create User",
    component: CreateUser,
    layout: "/admin",
  },
  {
    path: "/users/groups",
    exact: true,
    name: "Groups",
    component: Groups,
    layout: "/admin",
  }
];

export default indexRoutes;
