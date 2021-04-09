import React, { Component } from 'react'
import DataShoes from './Data/data.json'
import Modal from './Props/Modal'
import ProductItems from './Props/ProductItems'

export default class App extends Component {

  renderItem = () => {
    return (
      DataShoes.map((item, index) => {
        return (
          <div className="col-3 mb-3 ml-5 w3-animate-zoom" key={index}>
            <ProductItems showDetail = { this.showDetails} dataProduct={item} />
          </div>

        )
      })
    )
  }



  state = {
    shoesDetail: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  showDetails = (newProduct) => {
    this.setState({
      shoesDetail: newProduct,
    })

  }


  render() {

    return (
      <div className="row container " >
        <Modal content={this.state} showDetail={this.showDetails} />
        <div className="col-3" style={{ paddingTop: '20%'}}>
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="v-pills-shop" aria-selected="false">Shop</a>

          </div>
        </div>
        <div className="col-9">
          <h3 className="display-4 text-center">List item</h3>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="row">
                {this.renderItem()}
              </div>
            </div>
            <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">shop</div>

          </div>
        </div>
      </div>

    )
  }
}
