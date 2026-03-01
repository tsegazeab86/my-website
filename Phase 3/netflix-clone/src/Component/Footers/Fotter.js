import React from "react";
import "./Fotter.css";
// import "./Footer.css";
const Fotter = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          {/* facbook
          instarg
          yooy */}
        </div>
        <div className="footer-data">
          {" "}
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center </li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift card</li>
              <li>Terms of services</li>
              <li> Corporate INfo</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>service code</p>
        </div>
        <div className="copy-wright">&copy 1997-2024 Netflix clone</div>
      </div>
    </div>
  );
};

export default Fotter;
