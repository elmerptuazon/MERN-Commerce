import React, { Component } from "react";
import { Link } from "react-router-dom";

const ImagePreview = props => (
  <div className="col-md-3">
    <Link to="/edit">
      <img
        src={props.shop_file}
        style={{
          border: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 5,
          width: 150
        }}
        alt="Uploaded File"
      />
      <p>{props.shop_title}</p>
      <p>{props.shop_price}</p>
    </Link>
  </div>
);

class ShopContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shop_title: "",
      shop_price: "",
      shop_file: null,
      shop_completed: false
    };

    this.onChangeShopTitle = this.onChangeShopTitle.bind(this);
    this.onChangeShopPrice = this.onChangeShopPrice.bind(this);
    this.onChangeShopImage = this.onChangeShopImage.bind(this);
    this.onHandlePreview = this.onHandlePreview.bind(this);
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

  onChangeShopImage(e) {
    this.setState({
      shop_file: URL.createObjectURL(e.target.files[0])
    });
  }

  onHandlePreview(e) {
    e.preventDefault();

    this.setState({
      shop_completed: true
    });

    console.log("Title: " + this.state.shop_title);
    console.log("Price: " + this.state.shop_price);
    console.log("Completed: " + this.state.shop_completed);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Title: " + this.state.shop_title);
    console.log("Price: " + this.state.shop_price);
    console.log("Completed: " + this.state.shop_completed);

    this.setState({
      shop_title: "",
      shop_price: "",
      shop_file: null,
      shop_completed: false
    });
  }

  componentWillUnmount() {
    this.setState({
      shop_title: "",
      shop_price: "",
      shop_file: null,
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
              <input type="file" onChange={this.onChangeShopImage} />
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
            <button onClick={this.onHandlePreview} className="btn btn-primary">
              Preview
            </button>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit Item"
              className="btn btn-success"
            />
          </div>
        </form>
        <div className="row">
          {this.state.shop_completed && (
            <ImagePreview
              shop_file={this.state.shop_file}
              shop_title={this.state.shop_title}
              shop_price={this.state.shop_price}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ShopContent;
