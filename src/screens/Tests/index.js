import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useQuery } from "services/Client";
import SearchBar from "shared/components/SearchBox";
import withStore from "services/Store";
import routes from "./routes";

function Dashboard({ store }) {
  const {
    data: { testViewTitle },
  } = useQuery({ event: "testViewTitle" });

  React.useEffect(() => {
    store.set("searchLike", "");
    store.set("testViewTitle", "Tests");
  }, [store]);
  return (
    <div>
      <div className="hidden sm:block">
        <div className="hidden sm:block pt-10">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-black">{testViewTitle}</h2>
            <SearchBar />
          </div>
          <div className="border-t border-gray-100" />
        </div>
      </div>
      <div className="pt-10">
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              key={route.name}
              path={route.layout + route.path}
              component={route.component}
            />
          ))}
          <Redirect to="courses/all?page=0&pageSize=7" />
        </Switch>
      </div>
    </div>
  );
}

export default withStore(Dashboard);
