import React, { ReactElement, Suspense } from "react";
import { Route } from "react-router";
import { RouteProps, routes } from "./routes";
import Nav from "../components/nav";
import LotteryCard from "../components/card";

interface AppContentsProps {
  toggleSidebar: (status: boolean) => void;
}

const AppContents = (props: AppContentsProps) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div
            style={{ width: "250px", paddingTop: 0 }}
            className="column is-narrow is-hidden-touch"
          >
            <div className="box">
              <LotteryCard />
            </div>
          </div>
          <div
            className="column"
            style={{ position: "relative", paddingTop: 0 }}
          >
            {routes.map(
              (route: RouteProps): ReactElement => {
                return (
                  <Route
                    exact={route.exact}
                    key={route.path}
                    path={route.path}
                    render={() => {
                      const SubComponent = React.lazy(() =>
                        import("" + route.component)
                      );
                      return (
                        <Suspense fallback={<div />}>
                          <SubComponent {...props} />
                        </Suspense>
                      );
                    }}
                  />
                );
              }
            )}
          </div>
          <div
            className="column is-narrow is-hidden-touch"
            style={{ width: "250px", paddingTop: 0 }}
          >
            <div className="box">
              <Nav toggleSidebar={props.toggleSidebar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContents;
