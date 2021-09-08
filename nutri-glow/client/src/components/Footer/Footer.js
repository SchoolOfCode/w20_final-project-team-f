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
                    <h4>NutriGlow</h4>
                    <p>NutriGlow is the pioneer of bringing together scientifically proven pregnancy nutrition and health guidance with a focus on achieving realistic outcomes.</p>
                    <p>NutriGlow &copy;2021</p>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Feature</h4>
                        <ul className="list-unstyled">
                            <li>Pregnancy Tracker</li>
                            <li>Recipe Planner</li>
                            <li>Sign Up</li>
                            <li>Articles</li>
                        </ul>

                    </div>
                    <div className="col">
                        <h4>Get In Touch</h4>
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



                <p>Created by Team NutriGlow &#91;<i>Shola Quadri, Alina Savin, Jack Browne &#38; Amina Afzal</i>&#93; for School of Code Bootcamp Final Project &copy;2021</p>
                <a className="github-logo" href="https://github.com/SchoolOfCode/w20_final-project-team-f">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}

export default Footer;


{/* */ }