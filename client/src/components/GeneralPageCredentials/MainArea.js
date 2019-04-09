import React, { Component } from 'react'

import RestaurantImageArea from '../MainAreaCredentials/RestaurantImageArea';
import RestaurantInfo from '../MainAreaCredentials/RestaurantInfo';
import RestaurantView from '../MainAreaCredentials/RestaurantView';
import Footer from '../layout/Footer';

class MainArea extends Component {
  render() {
    return (
      <div>
         <RestaurantImageArea /> 
         <RestaurantInfo />
         <RestaurantView />
         <Footer />
      </div>
    )
  }
}


export default MainArea;