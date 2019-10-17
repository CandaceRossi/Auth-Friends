import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import FriendList from "./FriendList";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={FriendList} />
    </Router>
  );
}

export default App;
