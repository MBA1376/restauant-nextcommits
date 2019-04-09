import React, { Component } from 'react';

import Star from './Star';
import alarm from '../../img/alarm.png';
import delivery from '../../img/delivery.png';

class RestaurantInfo extends Component {
    constructor(props) {
        super(props);
        this.style ={
            paddingTop : "30px" ,
            paddingLeft : "15px" ,
            paddingRight : "30px" ,
            borderBottom : "1px solid #ddd" ,
            borderLeft : "1px solid #ddd" ,
            borderRight : "1px solid #ddd" ,
        }
        this.locationStyle = {
          fontSize : "20px" ,
          color : "#bbb" ,
          marginLeft : "10px" ,
          marginRight : "15px" ,
          marginTop : "7px"
        }
        this.clockStyle = {
          color : "#b00"
        }
        this.addressStyle = {
          marginTop : "-45px"  
        }
        this.addressLinkStyle = {
          textDecoration : "none" ,
          color : "red"
        }
   }


  render() {
      
    return (
      <div className="restaurant-info" style={this.style}>
        <div className="row">
            <div className="col-md-10"><h3><b>رستوران تعاون</b></h3></div>
            <div className="col-md-2"><p>آماده سفارش هستیم</p></div>
        </div>
        <div className="row">
          <Star />
        </div>
        <div className="row">
            <div className="col-md-9">
              <div className="row">
                <i className="fa fa-map-marker" style={this.locationStyle}></i>
                <p>تعاون</p>
              </div>
            </div>
            <div className="col-md-3" style={this.addressStyle}>
                <div className="row"> 
                  <div className="col-md-6">
                      <div className="row">
                      <img src={alarm}></img>
                      45 تا 70 دقیقه
                      </div>
                      <div className="row">
                        <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;میانگین زمان ارسال</small>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                        <img src={delivery}></img>
                        <a href="#" style={this.addressLinkStyle}>&nbsp;انتخاب آدرس</a>
                    </div>
                    <div className="row">
                      <small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;هزینه ارسال</small>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default RestaurantInfo;