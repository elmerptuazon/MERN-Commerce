import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Material-ui modal
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

/*******All Components */
import ShopContent from "./component/ShopContent";
import ShopProfile from "./component/ShopProfile";
import ShopEditContent from "./component/ShopEditContent";
import ShopEditProfile from "./component/ShopEditProfile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isOpen: false
    };

    this.onOpenLogin = this.onOpenLogin.bind(this);
    this.onCloseLogin = this.onCloseLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      username: "",
      password: "",
      isOpen: false
    });
  }

  onOpenLogin() {
    this.setState({
      isOpen: true
    });
  }

  onCloseLogin() {
    this.setState({
      isOpen: false
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit() {
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);
  }

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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button className="btn btn-primary" onClick={this.onOpenLogin}>
                  Log In
                </button>
              </li>
            </ul>
          </nav>

          <Dialog onClose={this.onCloseLogin} open={this.state.isOpen}>
            <MuiDialogTitle>Sign in</MuiDialogTitle>
            <form>
              <MuiDialogContent>
                <div className="form-group">
                  <TextField
                    label="Username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    margin="normal"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    margin="normal"
                  />
                </div>
              </MuiDialogContent>
              <MuiDialogActions>
                <Button
                  onClick={this.onCloseLogin}
                  variant="contained"
                  color="secondary"
                >
                  Close
                </Button>
                <Button
                  onClick={this.onSubmit}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </MuiDialogActions>
            </form>
          </Dialog>
          <Route path="/" exact component={ShopContent} />
          <Route path="/profile" component={ShopProfile} />
          <Route path="/edit" exact component={ShopEditContent} />
          <Route path="/edit/profile" component={ShopEditProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
