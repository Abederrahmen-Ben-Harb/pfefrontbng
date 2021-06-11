import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import UserService from "../services/user.service";
import AddVisite from "./visite/add-visite.components";
import SideNav from "./side-nav.components"
import Register from "../components/register.component";
import VisitesList from './visite/liste-visite.components';

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Router>
            <SideNav />
            <Switch>
              <Route path="/add-visite/_addV" exact Component={AddVisite} />
              <Route path="/register" exact Component={Register} />
              <Route path="/visites" exact Component={VisitesList} />
            </Switch>
          </Router>
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
