import React, { useState } from "react";
import LotteryCard from "../components/card";
import Nav from "../components/nav";
import Header from "../components/header";
import AppContents from "./contents";
import NeoInvoker from "@neo-react/invoker";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "react-sidebar";

const App = () => {
  console.log("Render: App");
  const [isSidebarActive, setSidebarStatus] = useState(false);
  return (
    <NeoInvoker useLocalStorage={true}>
      <BrowserRouter>
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
              <LotteryCard />
              <hr />
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
      </BrowserRouter>
    </NeoInvoker>
  );
};

export default App;
// @ts-ignore
// function appDataLoader(
//   props: {
//     nlp2API: NLP2API;
//     wallet: ConnectedWallet;
//   },
//   onData: any
// ) {
//   const { wallet } = props;
//   NLP2API.getStatus(wallet ? wallet.address : undefined)
//     .then(data => {
//       onData(null, { nlp2API: new NLP2API(data) });
//     })
//     .catch(e => {
//       onData(e, null);
//     });
// }
//
// const App = compose(
//   appDataLoader,
//   {
//     // eslint-disable-next-line react/display-name
//     loadingHandler: () => <AppLoading />,
//     // eslint-disable-next-line react/display-name
//     errorHandler: (e: any) => <AppLoading error={e.message} />,
//   }
// )(AppLayout);
//
// export default App;
