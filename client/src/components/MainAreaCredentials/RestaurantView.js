import React, { Component } from 'react';

import Menu from '../MainAreaCredentials/Menu';

class RestaurantView extends Component {
    constructor(props) {
       super(props);
      
       this.style = {
           paddingRight : "30px" ,
           borderRight : "1px solid #ddd" ,
           borderLeft : "1px solid #ddd" , 
           borderBottom : "1px solid #ddd" ,
           paddingTop : "20px" ,
           paddingBottom : "20px"
       }

       this.tabContainerStyle = {
           marginLeft : "10px" 
       }

       this.aStyle = {
           textDecoration : "none" ,
           color : "#234"
       }

       this.menuBarStyle = {
           marginBottom : "30px"
       }
    }

    render() {
      

        return (
        <div className="restaurant-view" style={this.style}>
            <div className="row" style={this.menuBarStyle}>
                <div className="col-md-12">
                <ul className="nav nav-pills">
                    <li className="active" style={this.tabContainerStyle}><a  style={this.aStyle} href="#">منوی رستوران</a></li>
                    <li className={''} style={this.tabContainerStyle}><a style={this.aStyle} href="#">نظرات کاربران</a></li>
                    <li className={''} style={this.tabContainerStyle}><a style={this.aStyle} href="#">اطلاعات کلی</a></li>
                </ul>
                </div>
            </div>
            <div className="row">
                <Menu />
            </div>
        </div>
        )
    }
}

export default  RestaurantView;