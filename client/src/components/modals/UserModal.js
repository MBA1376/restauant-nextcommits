import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

import { logoutUser } from '../../actions/authActions';

import user_icon from '../../img/user.png'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)' ,
      padding : "0" ,
      width : "20%" ,
      height : "550px" ,
      borderRadius : "15px" ,
      overflow : "none"
    } ,
    overlay: {
        backgroundColor: "rgba(0 , 0 , 0 , 0.6)"
    }
};


class UserModal extends Component {
    constructor(props) {
        super(props);
        
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }
    
  render() {
    const {user} = this.props.auth;

    return (
      <Modal
        isOpen={this.props.userModalIsOpen}
        // onAfterOpen={this.afterOpenModal} 
        onRequestClose={this.props.closeUserModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
            <div className="row"  style={{paddingTop:'20px' ,paddingBottom: '20px', borderBottom : '1px solid lightGray' , marginBottom:'15px'}}>
                <div className="col-sm-4">
                    <img
                         src={user_icon}
                         style={{width:'70px' , marginRight:'5px' , borderRadius:'50px'}} 
                         alt={user.name}
                         title="you must have a gravatar connected
                                    to your email to display an image"/>
                    
                </div>
                <div className="col-sm-8 text-left">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5>{user.name}</h5>
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col-sm-12">
                            <small 
                                style={{border:'1px solid lightGray' , borderRadius : '20px' , padding : '7px'}}
                            >
                                اعتبار : 0 تومان
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        پیام ها&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&ensp;&thinsp;
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        علاقه مندی ها&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&thinsp;&thinsp;
                        <i class="fas fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        اطلاعات من&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        <i class="fas fa-info-circle"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        آدرس ها&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        &thinsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        سفارشات من&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        بن تخفیف رایگان&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        <i class="fas fa-dollar-sign"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px' , borderBottom : '1px solid lightGray' , paddingBottom : '15px'}}>
                <div className="col-sm-12">
                    <a className="link" href="#" style={{fontSize:'19px'}}>
                        تعییر رمز&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;&thinsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&thinsp;&thinsp;&thinsp;&thinsp;
                        &nbsp;&nbsp;&thinsp;&thinsp;&thinsp;&nbsp;&nbsp;&thinsp;
                        <i class="fas fa-cog"></i>
                    </a>
                </div>
            </div>
            <div className="row" style={{marginBottom : '20px'}}>
                <div className="col-sm-12">
                    <a 
                        onClick={this.onLogoutClick}
                        className="link" href="#" style={{fontSize:'19px'}}
                    >
                        خروج
                    </a>
                </div>
            </div>
        </div>
      </Modal>
    )
  }
}

UserModal.propTypes = {
    auth : PropTypes.object.isRequired ,
    logoutUser : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth : state.auth
});

export default connect(mapStateToProps , {logoutUser})(UserModal);