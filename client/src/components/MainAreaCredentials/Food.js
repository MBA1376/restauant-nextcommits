import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addToCart} from '../../actions/menuActions';

class Food extends Component {
    constructor(props) {
         super(props);
         this.style = {
             backgroundColor : "white" ,
             padding : "20px 30px 20px 30px" ,
             borderRadius : "10px" ,
             marginBottom : "10px"
            //  width : "500px"
         }
        this.buttonStyle = {
            borderRadius : "50px" ,
            color : "red" ,
            border : "1px solid red" ,
            backgroundColor : "white"
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
      e.preventDefault();
      this.props.addToCart(this.props.id);
    }
  render() {
    return (
      <div className="food col-md-6 card" style={this.style}>
        <div className="row">
            <h6>{this.props.name}</h6>
        </div>
        <div className="row">
            <small>{this.props.description}</small>
        </div>
        <div className="row">
            <div className="col-md-11 price">{this.props.price}</div>
            <div className="col-md-1">
                <button onClick={this.onClick} className="button" style={this.buttonStyle}>+</button>
            </div>
        </div>
      </div>
    )
  }
}

Food.propTypes = {
  addToCart : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  menu : state.menu
});

export default connect(mapStateToProps , {addToCart})(Food);