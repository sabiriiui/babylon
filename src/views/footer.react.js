import React from 'react';
import { Link } from "react-router-dom";
import '../sass/footer.css'

export default class Footer extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (<div><div className="custom-footer">
            <div className="footer-sub-div">
                <h3 className="footer-div-heading">Contact</h3>
                <div style={{ color: "#ccc" }}>
                    <div className="mb10"><i class="fa fa-map-marker fa-fw"></i> Jalan bypass Ngurah rai no.77xx benoa</div>
                    <div className="mb10"><i class="fa fa-phone fa-fw"></i> +62287877976991 | +6287877976992  </div>
                    <div className="mb10"><i class="fa fa-envelope fa-fw"></i> info@babylonholidays.com</div>
                </div>
            </div>
            <div className="footer-sub-div ml50">
                <h3 className="footer-div-heading">Information</h3>
                <div className="footer-links-div">
                    <a href="#"><div className="footer-links noTopPadding"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Press Center</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Travel News</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">About Us</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Privacy Policy</span></div></a>
                    <Link to={"/contactus"}> <div className="footer-links noBorder"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Contact Us</span></div></Link>
                </div>
            </div>
            <div className="footer-sub-div ml50">
                <h3 className="footer-div-heading">Our Menu</h3>
                <div className="footer-links-div">
                    <a href="#"><div className="footer-links noTopPadding"><i class="fa fa-chevron-right"></i><span className="footer-link-text">About Us</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Carrer</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Terms</span></div></a>
                    <a href="#"><div className="footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Privacy Policy</span></div></a>
                    <Link to={"/contactus"}> <div className="footer-links noBorder"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Contact</span></div></Link>
                </div>
            </div>


            </div>
            <div className="footer-copyright-div">
                <div className="footer_icons">
                    <a href="https://www.facebook.com/babylonholidays/"><span className="floatLeft fa fa-facebook"></span></a>
                    <span className=" floatLeft fa fa-twitter"></span>
                    <span className="floatLeft fa fa-google"></span>
                    <span className="floatLeft fa fa-skype"></span>
                </div>
                <div className="copyright"> Copyright © 2013-2018 Babylon holidays, All rights reserved</div>
            </div>
        </div >);

    }

}
