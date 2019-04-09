import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };

    this.style = {
        marginRight : "10px" ,
        marginLeft : "4px" ,
        backgroundColor : "green" ,
        paddingRight : "10px" ,
        paddingLeft : "10px" ,
        fontSize : "15px" ,
        color : "white" ,
        borderRadius : "4px"
    }

    this.starStyle = {
        marginRight : "15px" ,
        marginLeft : "4px" ,
        marginTop : "10px"
    }
    this.buttonStyle = {
        border : "1px solid #f00" ,
        borderRadius : "5px" ,
        backgroundColor : "white" ,
        color : "red" ,
        fontSize : "12px" ,
        marginTop : "-3px" ,
        padding : "0px 4px" ,
        height : "30px"
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div className="row" style={this.starStyle}>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                style={this.style}
            />
            <a href="#"><b style={this.style}>{rating}</b></a>
            <button className="button" style={this.buttonStyle}>مشاهده {10} نظر</button>
      </div>
    );
  }
}

export default Star;