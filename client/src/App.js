import React from "react";
import "./App.scss";
import Header from "./component/Header/header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Body from "./component/Body/Body"

import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>StarTech</title>
      </Helmet>
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/" exact component={Home} />
            <Route path="/about" component={About} /> */}
          {/* <Route path="/videos/:id" component={HomePage} /> */}

        </Switch>
      </Router>
      <Body />
    </>
  );
}

export default App;
