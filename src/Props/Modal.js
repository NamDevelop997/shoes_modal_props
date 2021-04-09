import React, { Component } from 'react'

export default class Modal extends Component {
    render() {

        let {content} = this.props
        return (

            <div>
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text text-center" id="staticBackdropLabel">{content.shoesDetail.name} </h5>
                                <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body row">
                                <img className="col-4" src={content.shoesDetail.image}>
                                </img>
                               <table class="table col-8">
                                   <thead>
                                       <tr>
                                           <th>Alias</th>
                                           <th>Price</th>
                                           <th>ShortDescription</th>
                                         
                                           
                                       </tr>
                                   </thead>
                                   <tbody>
                                       <td>{content.shoesDetail.alias}</td>
                                       <td>{content.shoesDetail.price}</td>
                                       <td>{content.shoesDetail.shortDescription}</td>
                                      

                                   </tbody>
                                  
                               </table>
                             </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
