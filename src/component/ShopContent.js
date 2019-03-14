import React, { Component } from "react";

class ShopContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shop_title: "",
      shop_price: "",
      shop_completed: false
    };

    this.onChangeShopTitle = this.onChangeShopTitle.bind(this);
    this.onChangeShopPrice = this.onChangeShopPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeShopTitle(e) {
    this.setState({
      shop_title: e.target.value
    });
  }

  onChangeShopPrice(e) {
    this.setState({
      shop_price: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Title: " + this.state.shop_title);
    console.log("Price: " + this.state.shop_price);
    console.log("Completed: " + this.state.shop_completed);

    this.setState({
      shop_title: "",
      shop_price: "",
      shop_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add Item</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="btn btn-primary">
              <input type="file" />
            </div>
          </div>
          <div className="form-group">
            <label>Product Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.shop_title}
              onChange={this.onChangeShopTitle}
            />
          </div>
          <div className="form-group">
            <label>Product Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.shop_price}
              onChange={this.onChangeShopPrice}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit Item"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ShopContent;
