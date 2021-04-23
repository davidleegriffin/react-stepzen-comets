import React from "react"
import { render } from "react-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./utils/client"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fireballs from './pages/Fireballs'
import WelcomePage from "./pages/WelcomePage"

import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/fireballs" component={Fireballs} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)