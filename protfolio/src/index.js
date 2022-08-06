import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Jokes from "./Jokes";
import { createBrowserHistory } from "history";
import Header from "./Header";

const HomePage = (props) => {
  return (
    <>
      <Header>
        <App />
      </Header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BrowserRouter>
      <Routes history={createBrowserHistory()}>
        <Route exact path="/" render={<HomePage />} />

        <Route
          exact
          path="/jokes"
          render={() => (
            <Header>
              <Jokes />
            </Header>
          )}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

/*promises in async

new Promise((resolve, reject) => {
  reject(new Error("no bears"));

  setTimeout(() => {
    console.log("bears");
  },2000)

})

.then(() => {
  console.log("beets");
  console.log("beets2");
})

.catch((error)=>console.log('error',error))
*/
