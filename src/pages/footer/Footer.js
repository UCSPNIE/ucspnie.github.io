import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => (
  <div className="ucsp__footer section__padding">
    <div className="ucsp__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="ucsp__footer-btn">
      <p><Link to="/register">JOIN US</Link></p>
    </div>

    <div className="ucsp__footer-links">
      <div className="ucsp__footer-links_logo">
        <div className="image">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQFurjQnxyo2Og/company-logo_200_200/0/1565109886767?e=1647475200&v=beta&t=3l5foUIY5asrcnV1lKMbWaJp_9aziQy4NN-mASf7YB8"
            alt="ucsp_logo"
          />
        </div>

        <div className="info">
          <p className="space">Group Info</p>
          <p>Dept. of ECE, NRN Block</p>
          <p>THE NATIONAL INSTITUTE OF ENGINEERING</p>
          <p>Mananthavady Road</p>
          <p>Mysuru - 570008</p>
          <p>Karnataka</p>
        </div>
      </div>

      <div className="ucsp__footer-links_div">
        <h4 className="space">Get in touch</h4>
        <p>Teja Jampani</p>
        <p>+91 73489 68996</p>
        <p>ucsp.nie@gmail.com</p>
        <div className="handles">
          <span className="instagram">
            <a href="https://www.instagram.com/ucsp_research_group_nie/">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
          <span className="twitter">
            <a href="https://twitter.com/UCSP_NIE?s=20">
              <i class="fab fa-twitter"></i>
            </a>
          </span>
          <span className="linkedin_">
            <a href="https://www.linkedin.com/company/ucsp/mycompany/">
              <i class="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </div>

    <div className="ucsp__footer-copyright">
      <p>&#169; UCSP</p>
    </div>
  </div>
);

export default Footer;
