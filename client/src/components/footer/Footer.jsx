import React from "react";
import "./Footer.scss";
import seller from "../../assets/seller.svg";
import advertise from "../../assets/advertise.svg";
import gift from "../../assets/gift.svg";
import help from "../../assets/help.svg";
import payment from "../../assets/payment.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="about menu-flex">
          <h3>ABOUT</h3>
          <div>Contact Us</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Flipkart Stories</div>
          <div>Press</div>
          <div>Flipkart Wholesale</div>
          <div>Corporate Information</div>
        </div>

        <div className="help menu-flex">
          <h3>HELP</h3>
          <div>Payments</div>
          <div>Shipping</div>
          <div>Cancellation & Returns</div>
          <div>FAQ</div>
          <div>Report Infringement</div>
        </div>

        <div className="consumer-policy menu-flex">
          <h3>CONSUMER POLICY</h3>
          <div>Return Policy</div>
          <div>Terms Of Use</div>
          <div>Security</div>
          <div>Privacy</div>
          <div>Sitemap</div>
          <div>Greivance Redressal</div>
          <div>EPR Compliance</div>
        </div>

        <div className="social menu-flex">
          <h3>SOCIAL</h3>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Youtube</div>
        </div>

        <div className="mail-us">
          <h3>Mail Us:</h3>
          <p>Flipkart Internet Private Limited, </p>
          <p> Buildings Alyssa, Begonia &amp; </p>
          <p> Clove Embassy Tech Village, </p>
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>
          <p> Bengaluru, 560103, </p>
          <p> Karnataka, India</p>
        </div>

        <div className="office">
          <h3>Registered Office Address:</h3>
          <p>Flipkart Internet Private Limited, </p>
          <p> Buildings Alyssa, Begonia &amp; </p>
          <p> Clove Embassy Tech Village, </p>
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>
          <p> Bengaluru, 560103, </p>
          <p> Karnataka, India </p>
          <p> CIN : U51109KA2012PTC066107 </p>
          <p className="telephone">
            {" "}
            Telephone: 
            <a href="tel:044-45614700"> 044-45614700</a>
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={seller} alt="" />
          <span>Become a Seller</span>
        </div>
        <div className="bottom-item">
          <img src={advertise} alt="" />
          <span>Advertise</span>
        </div>
        <div className="bottom-item">
          <img src={gift} alt="" />
          <span>Gift Cards</span>
        </div>
        <div className="bottom-item">
          <img src={help} alt="" />
          <span>Help Center</span>
        </div>
        <div className="bottom-item">
          <span>© 2007-2023 Flipkart.com</span>
        </div>
        <div className="bottom-item payment">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
