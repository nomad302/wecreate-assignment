import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import Header from "./header/Header";
import FirstPage from "./homepage/firstPage";
import SecondPage from "./secondpage/SecondPage";

function App() {
  return (
    <Router history={history}>
      <div className="app-layout">
        <Header />
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/secondpage" component={SecondPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
