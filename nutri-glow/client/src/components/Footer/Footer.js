import { React } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./Footer.scss"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="description-paragraph">
                    <h4 id="nutri-text">Nutri</h4><h4 id="glow-text">Glow</h4>
                    <p>NutriGlow is the pioneer<br /> of bringing together scientifically<br /> proven pregnancy nutrition and<br /> health guidance with a focus on<br /> achieving realistic outcomes.</p>
                    <br />
                    <p>NutriGlow &copy; {new Date().getFullYear()}</p>
                </div>
                <div id="feature-container" className="row">
                    <div className="col">
                        <h4 className="header-text">Feature</h4>
                        <ul className="list-unstyled">
                            <li>Pregnancy Tracker</li>
                            <li>Recipe Planner</li>
                            <li>Sign Up</li>
                            <li>Articles</li>
                        </ul>

                    </div>
                    <div className="col">
                        <h4 className="header-text">Get In Touch</h4>
                        <ul className="list-unstyled">
                            <li>Birmingham</li>
                            <li>hello@nutriglow.com</li>
                            <li>+ 44 121 000 0000</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Get In Touch</h4>
                        <ul className="list-unstyled">
                            <li><InstagramIcon /></li>
                            <li><LinkedInIcon /></li>
                            <li><TwitterIcon /></li>
                        </ul>

                    </div>
                </div>
                <hr />
                <div id="team-info" className="row">
                    <p>Created by Team NutriGlow &#91;<i>Shola Quadri, Alina Savin, Jack Browne &#38; Amina Afzal</i>&#93; for School of Code Bootcamp Final Project &copy;{new Date().getFullYear()} | All rights reserved | Terms of Service | Privacy</p>
                    <a className="github-logo" href="https://github.com/SchoolOfCode/w20_final-project-team-f">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;


{/* */ }