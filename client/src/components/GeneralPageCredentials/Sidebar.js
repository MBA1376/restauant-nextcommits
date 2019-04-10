import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCart} from '../../actions/menuActions';

import figCartEmpty from '../../img/fig-cart-empty.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.emptyStyle = {
      width : "100%", 
      height : "230px" 
    }
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <div className="container sidebar" >
        <div className="row text-center" style={{position : "fixed"}}>
          <img src={figCartEmpty} style={this.emptyStyle}></img>
          <p>سبد خرید خالی است</p>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  getCart : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  menu : state.menu
});

export default connect(mapStateToProps , {getCart})(Sidebar);