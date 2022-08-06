import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./Com/App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
   
       <App/>
      
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
