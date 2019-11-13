import React from "react";
import {
  NavLink,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import AllEntries from "./scenes/all-tickets";
import Winners from "./scenes/winners";
import { NLP2API } from "@ftw-js/api";

interface Props {
  nlp2API: NLP2API;
}

const Entries = (props: Props & RouteComponentProps) => {
  return (
    <div className={"box"}>
      <div className="tabs">
        <ul>
          <li
            className={
              props.location.pathname === "/entries" ? "is-active" : ""
            }
          >
            <NavLink to={`/entries`}>All entries</NavLink>
          </li>
          <li
            className={
              props.location.pathname === "/entries/winnings" ? "is-active" : ""
            }
          >
            <NavLink activeClassName="is-active" to={`/entries/winnings`}>
              Winning tickets
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Route
          exact={true}
          path={`/entries`}
          component={() => <AllEntries {...props} />}
        />
        <Route
          exact={true}
          path={`/entries/winnings`}
          component={() => <Winners {...props} />}
        />
      </div>
    </div>
  );
};

export default withRouter(Entries);
