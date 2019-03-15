import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopEditProfile extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <button className="btn border-primary">
          <Link to="/profile">Back</Link>
        </button>
      </div>
    );
  }
}

export default ShopEditProfile;
