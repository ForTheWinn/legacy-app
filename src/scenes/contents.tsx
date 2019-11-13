import React, { ReactElement, Suspense, useContext } from "react";
import { Route } from "react-router";
import { RouteProps, routes } from "./routes";
import Nav from "../components/nav";
import LotteryCard from "../components/card";
import { InvokerContext } from "@neo-react/invoker";

interface AppContentsProps {
  toggleSidebar: (status: boolean) => void;
}

const narrowColStyle = { width: "250px", paddingTop: 0 };

const AppContents = (props: AppContentsProps) => {
  const { state } = useContext(InvokerContext);
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div
            style={narrowColStyle}
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
                          <SubComponent wallet={state.wallet} {...props} />
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
            style={narrowColStyle}
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
