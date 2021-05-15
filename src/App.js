import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Todos from "./components/pages/Todos";
import Navbar from "./components/pages/Navbar";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
