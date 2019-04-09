import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.style = {
            marginTop : "30px" ,
            marginRight : "40px"

        }
        this.heartStyle = {
            fontSize : "100px" ,
            color : "red"
        }
    }
  render() {
    return (      
        <button className="btn btn-secondary like-button" style={this.style}>
           <i className="fa fa-heart-o" style={this.heartStyle}></i> علاقه مندی
        </button>
    )
  }
}

export default LikeButton;