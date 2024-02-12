import React from "react";
import logoimg from '../image/logo.svg'

const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 border-end">
              <h4>Media Releases</h4>
              <div className="fin-foot-sec d-flex">
                <p className="me-2">
                  <span>21</span> Apr
                </p>
                <a href="#">Exciting News: Grand Opening of Our New Branch in Ahmedabad!
                </a>
              </div>
              <div className="fin-foot-sec d-flex">
                <p className="me-2">
                  <span>22</span> Apr
                </p>
                <a href="#">
Milestone Achieved: Successfully Completed 100 Projects!
                </a>
              </div>
              <div className="fin-foot-sec d-flex">
                <p className="me-2">
                  <span>23</span> Apr
                </p>
                <a href="#">
Introducing Graphiglow Design: Your Ultimate Destination for Innovative Designs!
                </a>
              </div>
              <div className="foote-more">
                <a href="">More...</a>
              </div>
              <div className="foot-mail-sec">
                <input type="email" placeholder="Email Id" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="col-lg-4 border-end ">
                <div className=" d-flex justify-content-center">
                    <a className="navbar-brand" href="#"><img src={logoimg} className="img-fluid" alt="" /></a>
                </div>
                <div className="mech-fot-found">
                    <a href="#"> Mechodal Group: A leading name in engineering and construction services. With expertise in diverse sectors, we deliver exceptional projects, ensuring quality, innovation, and client satisfaction. Trust us for your next venture.</a>
                </div>
            </div>
            <div className="col-lg-4 foot-paddi-sec ">
              <h4>Quick Links</h4>
              <ul className="list-arrow">
                <li><a href="https://www.mechodal.com/" target="_blank"> Mechodal Technology</a></li>
                <li><a href="https://www.graphiglow.in/" target="_blank"> GraphiGlow Design</a></li>
                <li><a href="https://4born.info/" target="_blank">4Born Solutions</a></li>
                <li><a href="https://brihatisoftech.com/" target="_blank"> Brihati Softtech</a></li>
              </ul>
            </div>
          </div>
          <div className="row footer-copy-sec pt-2">
            <div className="col-md-5 footer-copy-text">
                <p>© 2023 Mechodal Group. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-end footer-privacy-text">
                <a href="#" className="">Privacy Policy</a>
                {/* <a href="#" className="border-end">Legal Notice</a>
                <a href="#" className="border-end">Site Map</a>
                <a href="#" >Report Security Issue</a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
