import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { registerUser } from '../../actions/authActions';

import Modal from 'react-modal';

import back from '../../img/back.png';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)' ,
      padding : "0" ,
      width : "50%" ,
      height : "450px" ,
      borderRadius : "10px" ,
      overflow : "none"
    } ,
    
    overlay: {
        backgroundColor: "rgba(0 , 0 , 0 , 0.6)"
    }
};

class Register extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            name : '' ,
            email : '' ,
            password : '' ,
            password2 : '' ,
            errors : {}
        }

        this.backButtonStyle = {
            backgroundColor : "#fff" ,
            border : "none" ,
            marginRight : "0px" ,
            marginTop : "10px" ,
            borderRadius : "10px"
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors : nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name : this.state.name ,
            email : this.state.email ,
            password : this.state.password ,
            password2 : this.state.password2
        }

        this.props.registerUser(newUser);
        
        /**this.props.history is for redirecting to another page */
        /*this.props.registerUser(newUser , this.props.history);*/

    }
    
    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        const {errors} = this.state;
        return (

            <Modal
                isOpen={this.props.signupModalIsOpen}
                // onAfterOpen={this.afterOpenModal} 
                onRequestClose={this.props.closeSignupModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 modal-sidebar"></div>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-10"></div>
                                <div className="col-sm-2">
                                    <button 
                                        onClick={this.props.closeSignupModal} 
                                        style={this.backButtonStyle} 
                                        className="button"
                                    >
                                        <img src={back}></img>
                                    </button></div>
                            </div>
                            <div className="container">
                                <div className="row text-center register-modal-title">
                                    <div className="col-sm-12">
                                        <h6>برای ثبت نام شماره ایمیل و رمز عبورت رو وارد کن</h6>
                                    </div>
                                </div>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <input 
                                                className = {classnames('register-input form-control' , {
                                                    'is-invalid' : errors.name
                                                })}
                                                placeholder="نام و نام خانوادگی" 
                                                name="name"
                                                type="name"
                                                value={this.state.name}
                                                onChange = {this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        
                                        <div className="col-sm-12">
                                            <input 
                                                className = {classnames('register-input form-control' , {
                                                    'is-invalid' : errors.email
                                                })}
                                                placeholder="ایمیل" 
                                                name="email"
                                                type="email"
                                                value={this.state.email}
                                                onChange = {this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <input 
                                                className={classnames('register-input form-control' , {
                                                    'is-invalid' : errors.password
                                                })}
                                                placeholder="پسورد"
                                                name="password"
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <input 
                                                className={classnames('register-input form-control' , {
                                                    'is-invalid' : errors.password2
                                                })}
                                                placeholder="تایید پسورد"
                                                name="password2"
                                                type="password"
                                                value={this.state.password2}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-sm-12">
                                            <button 
                                                // onClick={this.props.openLoginModal}
                                                className="button login-btn"
                                                type="submit"
                                            >
                                                ثبت نام
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>                                 
                        </div>
                    </div>
                </div>
            </Modal>
            )
        }
    }

    Register.propTypes = {
        registerUser : PropTypes.func.isRequired ,
        auth : PropTypes.object.isRequired,
        errors : PropTypes.object.isRequired
    };

    const mapStateToProps = state => ({
        auth : state.auth ,
        errors : state.errors
    })

    export default connect(mapStateToProps , {registerUser})(withRouter(Register)) ;

 