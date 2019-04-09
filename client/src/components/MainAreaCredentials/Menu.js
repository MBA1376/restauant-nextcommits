import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SearchFieldGroup from '../common/SearchFieldGroup';
import { getFoods } from '../../actions/menuActions';

import Food from './Food';

class Menu extends Component {
    constructor(props) {
         super(props);
        this.state = {
            searchValue : '' ,
            errors : {}
        }

        this.style = {
            backgroundColor : "#f8f8f8" ,
            marginRight : "-30px" ,
            marginBottom : "-20px" ,
            padding : "35px 100px 130px 100px" ,
            width: "101%"
        }
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        this.props.getFoods();
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        const {foods} = this.props.menu;
        
        const foodItems = foods.map(food => (
           <Food key={food._id} name={food.name} description={food.description} price={food.price}/> 
        ))
        
        return (
        <div className="menu" style={this.style}>
            <div className="row">
                <div className="col-md-3">
                    <SearchFieldGroup 
                        placeholder = "جستجوی در منو"
                        type="text" 
                        name="searchValue"
                        value={this.state.searchValue}
                        onChange={this.onChange}
                    />
                </div>
            </div>
            <div className="row">
                {foodItems}
            </div>
        </div>
        )
    }
}

Menu.propTypes = {
    getFoods : PropTypes.func.isRequired ,
    menu : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    menu : state.menu
});

export default connect(mapStateToProps , {getFoods})(Menu);