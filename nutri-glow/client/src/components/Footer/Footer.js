import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footerContainer">
        <div className="descriptionContainer">
          <div className="logoFooter">
            <h4 className="text1">NUTRI</h4>
            <h4 className="text2">GLOW</h4>
          </div>
          <p>
            NutriGlow is the pioneer <br /> of bringing together scientifically{' '}
            <br /> proven pregnancy nutrition and <br />
            health guidance with a focus on <br /> achieving realistic outcomes.
          </p>
          <br />
          <p>&copy; {new Date().getFullYear()} Copyright NutriGlow</p>
        </div>
        <div className="featureContainer">
          <h4 className="headerFeature">Feature</h4>
          <Link to="/tracker">
            <h5 className="pregTracker">Pregnancy Tracker</h5>
          </Link>
          <Link to="/recipes">
            <h5>Recipe Planner</h5>
          </Link>
          <Link to="/signup">
            <h5>Sign Up</h5>
          </Link>
          <Link to="/articles">
            <h5>Articles</h5>
          </Link>
        </div>
        <div className="touchContainer">
          <h4 className="headerTouch">Get in Touch</h4>
          <div className="location">
            <LocationOnIcon className="iconFooter" />
            <h5>Birmigham</h5>
          </div>
          <div className="email">
            <MailOutlineIcon className="iconFooter" />
            <h5>hello@nutriglow.com</h5>
          </div>
          <div className="phone">
            <PhoneIcon className="iconFooter" />
            <h5>+ 44 121 000 0000</h5>
          </div>
        </div>
        <div className="socialMedia">
          <div className="socialMediaIcons">
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <a
              className="github-logo"
              href="https://github.com/SchoolOfCode/w20_final-project-team-f"
            >
              <GitHubIcon />
            </a>
            <h4>Follow our Social Media</h4>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="createdBy">
        <p>
          Created by Team NutriGlow &#91;
          <i>Shola Quadri, Alina Savin, Jack Browne &#38; Amina Afzal</i>&#93;
          for School of Code Bootcamp Final Project &copy;
          {new Date().getFullYear()} | All rights Reserved
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
