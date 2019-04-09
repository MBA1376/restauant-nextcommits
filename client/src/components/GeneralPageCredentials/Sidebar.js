import React, { Component } from 'react';

import figCartEmpty from '../../img/fig-cart-empty.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.emptyStyle = {
      width : "100%", 
      height : "230px" 
    }
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

export default Sidebar;