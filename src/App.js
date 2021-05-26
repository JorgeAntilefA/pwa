import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ManifestsPage from "./Pages/ManifestsPage";
import PendingsPage from "./Pages/PendingsPage";
import ManageOrderPage from "./Pages/ManageOrderPage";
import { UserContextProvider } from "./Context/UserContext";
import { ManifestsContextProvider } from "./Context/ManifestsContext";
import { PendingContextProvider } from "./Context/PendingContext";
import Navigation from "./Navigation";
import "./App.css";

export default function App() {
  // const srv = "/Delivery";

  return (
    <UserContextProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/" //{process.env.NODE_ENV === "development" ? "/" : srv}
            component={LoginPage}
          />
          <ManifestsContextProvider>
            <Route
              exact
              path="/manifests" //{process.env.NODE_ENV === "development" ? "/manifests" : "/manifests"}
              component={ManifestsPage}
            />
            <PendingContextProvider>
              <Route
                exact
                path="/pendings" //{process.env.NODE_ENV === "development" ? "/manifests" : "/manifests"}
                component={PendingsPage}
              />
            </PendingContextProvider>
            <Route
              exact
              path="/manageOrders" //{process.env.NODE_ENV === "development" ? "/manifests" : "/manifests"}
              component={ManageOrderPage}
            />
          </ManifestsContextProvider>
        </Switch>
      </Router>
    </UserContextProvider>
  );
}
