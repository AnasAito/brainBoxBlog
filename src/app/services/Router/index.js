import React from "react";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

// var hist = createBrowserHistory();

const myRouter = App =>
  function Routered() {
    return (
      <Router>
        <App />
      </Router>
    );
  };

export default myRouter;
