import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../enhance/home";

const Router = () => {
  return (
    <Suspense fallback>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Router;
