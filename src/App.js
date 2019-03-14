import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/*******All Components */
import ShopContent from "./component/ShopContent";
import ShopProfile from "./component/ShopProfile";
import ShopEditContent from "./component/ShopEditContent";
import ShopEditProfile from "./component/ShopEditProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={ShopContent} />
          <Route path="/profile" component={ShopProfile} />
          <Route path="/edit/:id" component={ShopEditContent} />
          <Route path="/edit/profile/:id" component={ShopEditProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
