import { React } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-container">
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