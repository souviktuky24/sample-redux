import {  useEffect } from 'react';
function App({ ...props }) {
  console.log(props);
  useEffect(() => {
    props.startAction()
  }, []);
  return (
      <div className="App">
      <p>This is a sample project.</p>
      <p>Redux with Typescript</p>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import "./assets/styles/bootstrap.min.css";
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { Router, Route } from "react-router-dom";
// import browserHistory from './utils/browserHistory';
// import { Provider } from "react-redux";
// import CoreRouter from './router';
// import { store as rootStore } from './redux/store';

// function getCookie(c_name: any) {
//   var i,
//     x,
//     y,
//     ARRcookies = document.cookie.split(";");
//   for (i = 0; i < ARRcookies.length; i++) {
//     x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
//     y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
//     x = x.replace(/^\s+|\s+$/g, "");
//     if (x == c_name) {
//       return unescape(y);
//     }
//   }
// }

// function checkLogin() {
//   if (!getCookie("user")) {
//     // window.location = "/login";
//   } else {
//     return;
//   }
// }

// function App() {
//   return (
//     <Provider store={rootStore}>
//       <Router  history={browserHistory}>
//         <Route path="/app/beginners-table-ui" component={CoreRouter} />
//       </Router>
//     </Provider>
//   );
// }

// export default App;

