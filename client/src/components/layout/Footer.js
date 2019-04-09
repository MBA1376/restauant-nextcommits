import React, { Component } from 'react';

import instagram from '../../img/instagram.png';
import telegram from '../../img/telegram.png';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import youtube from '../../img/youtube.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div className="row">
            <div className="col-md-10">
              <ul className="nav nav-pills">
                  <li className="footer-li" ><a className="a-link"  href="#">وبلاگ تعاون</a></li>
                  <li className="footer-li" ><a className="a-link" href="#">درباره</a></li>
                  <li className="footer-li" ><a className="a-link" href="#">تماس با ما</a></li>
                  <li className="footer-li" ><a className="a-link" href="#">قوانین</a></li>
                  <li className="footer-li" ><a className="a-link" href="#">سوالات متداول</a></li>
                  <li className="footer-li" ><a className="a-link" href="#">حریم شخصی</a></li>
               </ul>
            </div>
            <div className="col-md-2">
              <ul className="nav nav-pills">
                  <li className="active" id="youtube" ><a  href="#"><img src={youtube}></img></a></li>
                  <li className="active" ><a  href="#"><img src={twitter}></img></a></li>
                  <li className="active" ><a  href="#"><img src={facebook}></img></a></li>
                  <li className="active" id="telegram"><a  href="#"><img src={telegram}></img></a></li>
                  <li className="active" ><a  href="#"><img src={instagram}></img></a></li>
               </ul>
            </div>
            <div className="container" id="copyright">
              <div className="row">
                  <div className="col-md-12 text-center">
                    <p>copyright &copy; {new Date().getFullYear()}</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer;