import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import FeaturePage from "./containers/Feature/Loadable";
import Home from "./containers/Home/home";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feature" component={FeaturePage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
