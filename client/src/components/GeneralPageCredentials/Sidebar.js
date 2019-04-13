import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OrderedFood from '../sidebar-credentials/OrderedFood';

import {getCart} from '../../actions/menuActions';
import isEmpty from '../../validation/is-empty';
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
    const {addedItems , total} = this.props.menu;
    let sidebarContent;
    let foodItems = addedItems.map(item => <OrderedFood key={item._id} id={item._id} name={item.name} price={item.price} quantity={item.quantity}/>);
    console.log(foodItems);

    sidebarContent = isEmpty(addedItems) ? (
        <div className="row text-center" style={{position:'fixed'}}>
          <img src={figCartEmpty} style={this.emptyStyle}></img>
          <p>سبد خرید خالی است</p>
        </div>
      ) : (
          <div className="row text-center" style={{color:'gray'}}>
              {/* <OrderedFood /> */}
              {foodItems}
              <div className="col-md-6 text-left" style={{marginTop:'13px',marginRight:'13px'}}>هزینه کل</div>
              <div className="col-md-4 text-left" style={{marginTop:'13px'}}>{total} تومان</div>
              <div className="col-md-11" style={{marginLeft:'15px' , marginTop:'15px'}}>
                <button className="login-btn" style={{ cursor:'pointer' , color:'white' , width:'210px'}}>نهایی کردن سفارش</button>
              </div>
          </div> 
      );


    return (
      <div className="position-fixed">
          <div className=".container-fluid sidebar">
            {sidebarContent}
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