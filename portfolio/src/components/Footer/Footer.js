import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Image1 from "./git.svg";
import Image2 from "./linkedin.svg";
import Image3 from "./mail.svg";

// CUSTOM COMPONENTS
import "./Footer.css";

// application footer
export default function Footer() {
    return (
        <div >
            <AppBar position="static" className="footer">
                <Container maxWidth="lrg" className="container">
                    <Toolbar>
                        <div className="footerLinks">
                            <a href="https://github.com/djwalto" target="_blank" rel="noopener noreferrer">
                                <img src={Image1} height="70"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/davidwaltonkc/" target="_blank" rel="noopener noreferrer">
                                <img src={Image2} height="70"></img>
                            </a>
                        </div>
                        <div className="copyright">
                            <h5 className="copy">     David Walton  |  Software Developer    </h5>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar >
        </div >
    );
};// end Footer