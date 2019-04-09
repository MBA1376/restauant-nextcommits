import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';

import {loginUser} from '../../actions/authActions';

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

class Login extends Component {  
    constructor(props) {
         super(props);
        this.state = {
            email : '' ,
            password : '' ,
            errors : {}
        }

        this.backButtonStyle = {
            backgroundColor : "#fff" ,
            border : "none" ,
            marginRight : "0px" ,
            marginTop : "10px" ,
            borderRadius : "10px"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors : nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email : this.state.email ,
            password : this.state.password
        }

        this.props.loginUser(userData);
        /*axios.post('/api/users/login' , userData)
             .then(res => console.log(res))
             .catch(err => this.setState({
                 errors : err.response.data
             }));*/
        // console.log(userData);
       
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        const {errors} = this.state;

         return (
                <Modal
                    isOpen={this.props.loginModalIsOpen}
                    // onAfterOpen={this.afterOpenModal} 
                    onRequestClose={this.props.closeLoginModal}
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
                                        onClick={this.props.closeLoginModal}
                                        style={this.backButtonStyle} 
                                        className="button"
                                    >
                                        <img src={back}></img>
                                    </button></div>
                            </div>
                            <div className="container">
                                    <div className="row text-center login-modal-title">
                                        <div className="col-sm-12">
                                            <h6>برای ورود ایمیل و رمز عبورت رو وارد کن</h6>
                                        </div>
                                    </div>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input 
                                                    className={classnames('login-input form-control' ,{
                                                        'is-invalid' : errors.email
                                                    })}
                                                    placeholder="ایمیل"
                                                    name="email"
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input 
                                                    className={classnames('login-input form-control' ,{
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
                                                <button 
                                                    className="button login-btn"
                                                    type="submit"
                                                >
                                                        ورود 
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

Login.propTypes = {
    loginUser : PropTypes.func.isRequired ,
    errors : PropTypes.object.isRequired ,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors : state.errors ,
    auth : state.auth
});

export default connect(mapStateToProps , {loginUser})(Login);