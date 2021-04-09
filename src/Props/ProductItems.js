import React, { Component } from 'react'

export default class ProductItems extends Component {

    render() {
        let { dataProduct } = this.props;
        
        return (
            <div className="card text-dark" style={{ border: 'none', width: '350px' }}>
                <img className="card-img-top" src={dataProduct.image} alt={dataProduct.image} style={{ width: '150px', height: '150px' }} />
                <div className="card-body" >
                    <h5 className="card-title" style={{ fontSize: '15px' }} >{dataProduct.name} </h5>
                    <p className="card-text">Price {dataProduct.price}$</p>
                    <button onClick={() => {
                        this.props.showDetail(dataProduct)
                    }} className="btn btn-warning " data-toggle="modal" data-target="#staticBackdrop">View more</button>
                </div>
            </div>
        )
    }
}
