import React, { useContext, useState } from "react";
import LotteryCard from "../components/card";
import Nav from "../components/nav";
import Header from "../components/header";
import AppContents from "./contents";
import NeoInvoker from "@neo-react/invoker";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import Sidebar from "react-sidebar";

const App = () => {
  console.log("Render: App");
  const [isSidebarActive, setSidebarStatus] = useState(false);
  return (
    <MemoryRouter>
      <Sidebar
        styles={{
          sidebar: {
            backgroundColor: "white",
            padding: "70px 12px 20px 12px",
          },
        }}
        rootClassName="has-background-light"
        sidebarClassName="sidebar"
        sidebar={
          <>
            <Nav toggleSidebar={setSidebarStatus} />
          </>
        }
        open={isSidebarActive}
        onSetOpen={() => setSidebarStatus(!isSidebarActive)}
      >
        <Header
          isSidebarActive={isSidebarActive}
          toggleSidebar={setSidebarStatus}
        />
        <AppContents toggleSidebar={setSidebarStatus} />
      </Sidebar>
    </MemoryRouter>
  );
};

// eslint-disable-next-line react/display-name
export default () => (
  <NeoInvoker useLocalStorage={true}>
    <App />
  </NeoInvoker>
);
