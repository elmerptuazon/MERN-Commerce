import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      shop_completed: false,
      shop_getData: []
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
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log("Title: " + this.state.shop_file);
    // console.log("Title: " + this.state.shop_title);
    // console.log("Price: " + this.state.shop_price);
    // console.log("Completed: " + this.state.shop_completed);

    const newShop = {
      shop_file: this.state.shop_file,
      shop_title: this.state.shop_title,
      shop_price: this.state.shop_price,
      shop_completed: this.state.shop_completed
    };

    axios
      .post("http://localhost:4000/shop/edit/profile", newShop)
      .then(res => console.log(res.data));

    this.setState({
      shop_title: "",
      shop_price: "",
      shop_file: null,
      shop_completed: false
    });
  }

  onShowShopList() {
    return this.state.shop_getData.map(function(val, i) {
      console.log(val.shop_file);
      return (
        <tr className="border border-primary">
          <td>
            <img src={`data:image/jpeg;base64,${val.shop_file}`} alt="Sample" />
            <div>{val.shop_price}</div>
            <div>{val.shop_title}</div>
          </td>
        </tr>
      );
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/shop")
      .then(res => {
        this.setState({
          shop_getData: res.data
        });
      })
      .catch(function(err) {
        console.log(err);
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
        {this.state.shop_getData == "" ? (
          <div>Please connect to your server</div>
        ) : (
          <div>
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
                <button
                  onClick={this.onHandlePreview}
                  className="btn btn-primary"
                >
                  Preview
                </button>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit Item"
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
              <table style={{ marginTop: 20 }}>
                <tbody>{this.onShowShopList()}</tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShopContent;
