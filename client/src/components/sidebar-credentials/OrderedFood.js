import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class OrderedFood extends Component {
  render() {
    return (        
            <div className="col-md-12" style={{padding:'8px 13px',borderBottom:'1px solid #ddd',marginRight:'15px' , width:'80%' , color:'gray'}}>
                
                <div className="row" style={{width:'320px'}}>
                    <div className="col-md-5 text-left" style={{marginRight:'7px'}}>
                        <div className="row">
                            <div style={{fontSize:'13px'}} className="col-sm-12"><h6>{this.props.name}</h6></div>
                        </div>
                        <div className="row" style={{marginTop:'-10px'}}>
                            <div className="col-sm-12"><small>{this.props.price}</small></div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ marginLeft:'45px',marginTop:'6px'}}>
                        <div className="row">
                            <div className="col-sm-3">
                                <button 
                                    style={{border:'1px solid red', backgroundColor:'white' , borderRadius:'50px' , padding:'0px 8px',cursor:'pointer'}}
                                >
                                    -
                                </button>
                            </div>
                            <div className="col-sm-4" style={{marginRight:'7px'}}>
                                1
                            </div>
                            <div className="col-sm-3" style={{marginRight:'-13px'}}>
                                <button
                                    style={{border:'1px solid red', backgroundColor:'white', borderRadius:'50px',transform:'scale(.95)', padding:'0px 6px',cursor:'pointer'}}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
    )
  }
}

export default OrderedFood;
