import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Register from '../auth/Register';
import Login from '../auth/Login';
import UserModal from '../modals/UserModal';

import logo from '../../img/brand.png';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            signupModalIsOpen: false ,
            loginModalIsOpen: false ,
            userModalIsOpen : false
        };

        this.openSignupModal = this.openSignupModal.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);

        this.openUserModal = this.openUserModal.bind(this);
        this.closeUserModal = this.closeUserModal.bind(this);
    }

    openSignupModal() {
        this.setState({loginModalIsOpen: false});
        this.setState({signupModalIsOpen: true});
    }
    openLoginModal() {
        this.setState({signupModalIsOpen: false});
        this.setState({loginModalIsOpen: true});
    }

    closeSignupModal() {
        this.setState({signupModalIsOpen: false});
    }
    closeLoginModal() {
        this.setState({loginModalIsOpen: false});
        // this.setState({signupModalIsOpen : true});
    }

    /**open user modal */
    openUserModal() {
        this.setState({userModalIsOpen : true});
    }
    closeUserModal() {
        this.setState({userModalIsOpen : false});
    }

    render() {
        const {isAuthenticated , user} = this.props.auth;

        const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={this.openLoginModal} href="#"><span className="login">ورود</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={this.openSignupModal} href="#"><span className="signup">ثبت نام</span></a>
                </li>
            </ul>
        );

        const authLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a 
                        href="#" 
                        onClick = {this.openUserModal}
                        className="nav-link">
                        <img 
                            className="rounded-circle"
                            src={user.avatar} 
                             alt={user.name}
                             style={{width:'50px' , marginRight:'5px'}} 
                             title="you must have a gravatar connected
                                    to your email to display an image"/>
                        {' '}
                        {user.name}
                    </a>
                </li>

            </ul>
        );

        return (
            <div>
                {/* <ul className="restaurant-navbar navbar bg-white navbar-expand-lg navbar-fixed-top" role="navigation">
                    
                    <ul className="list-inline">
                        <li className="list-inline-item"><a onClick={this.openLoginModal} href="#"><span className="login">ورود</span></a></li>
                        <li className="list-inline-item"><a onClick={this.openSignupModal} href="#"><span className="signup">ثبت نام</span></a></li> 
                    </ul>

                    <li className="camera"><a href="#" className="nav-link navbar-brand"><img src={logo} /></a></li>

                    
                    <li><i className="fa fa-user-circle-o"></i></li>
                    <li> 
                        <a href="#">
                            <span className="fa-stack fa-2x has-badge" data-count="1">
                                <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                                <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                            </span>
                        </a>
                    </li>
                </ul> */}
                <nav className="d-flex justify-content-between restaurant-navbar navbar navbar-expand-lg bg-white navbar-fixed-top" rol="navigation">

                        {isAuthenticated ? authLinks : guestLinks}
                        <ul className="navbar-nav">
                            <li className="camera nav-item"><a href="#" className="nav-link navbar-brand"><img src={logo} /></a></li>
                        </ul>
                        <ul className="navbar-nav">
                            {/* <li className="nav-item"><i className="fa fa-user-circle-o"></i></li> */}
                            <li className="nav-item"> 
                                <a className="nav-link" href="#">
                                    <span className="fa-stack fa-2x has-badge" data-count="1">
                                        <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                                        <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                </nav>
               
                <Register
                    signupModalIsOpen={this.state.signupModalIsOpen} 
                    closeSignupModal={this.closeSignupModal}
                    openLoginModal={this.openLoginModal}
                />
                <Login
                    loginModalIsOpen={this.state.loginModalIsOpen}
                    closeLoginModal={this.closeLoginModal}
                />
                <UserModal
                    userModalIsOpen={this.state.userModalIsOpen}
                    closeUserModal={this.closeUserModal}
                />
                
            </div>
        )
    }
}

Navbar.propTypes = {
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth 
});

export default connect(mapStateToProps)(Navbar);


{/* <li><form><input placeholder="search twitter"/><i className="fa fa-search"></i></form></li> */}