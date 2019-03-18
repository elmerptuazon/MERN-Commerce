import React, { Component } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <tr>
      <td>Sample Image</td>
      <td>Sample Title</td>
      <td>Sample Price</td>
      <td>
        <Link to="">Edit</Link>
      </td>
    </tr>
  );
};

class ShopProfile extends Component {
  shopList() {
    return <Shop />;
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h4>Name</h4>
        <h5>List of Items</h5>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.shopList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ShopProfile;
