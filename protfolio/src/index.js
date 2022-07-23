import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import {Router,BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Jokes from './Jokes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Router>
    <BrowserRouter>
        <Route path='/' element={App}></Route>
        <Route path='/jokes' element={Jokes}></Route>
    </BrowserRouter>
</Router>);
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
