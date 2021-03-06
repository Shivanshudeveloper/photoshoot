import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { a } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
    isBrowser
} from "react-device-detect";

import { experimentalStyled as styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../../components/animate';

import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      alignItems: 'center'
    }
}));

const Header2 = ({ title }) => {
    return (
        <>
        {
        isBrowser ? (
            <header id="home" className="header-area pt-100 curve">
            <div className="navigation-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png" alt="Logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        {/* <li className="nav-item active">
                                            <a className="page-scroll" href="/" style={{textDecoration: "none"}}>
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/funktionen" style={{textDecoration: "none"}}>
                                                Funktionen
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/preise" style={{textDecoration: "none"}}>
                                                Preise
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/kontakt" style={{textDecoration: "none"}}>
                                                Kontakt
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="/auth/login-unprotected" style={{textDecoration: "none"}}>
                                                Login
                                            </a>
                                        </li> */}
                                        <li className="nav-item">
                                            <Button style={{ borderRadius: '25px', backgroundColor: 'white', color: 'rgb(104, 82, 237)', fontSize: '14px', marginTop: '-2px'}} variant="contained">jetzt starten</Button>
                                        </li>
                                        <li className="nav-item">
                                            <FacebookIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none"}} />
                                        </li>
                                        <li className="nav-item">
                                            <InstagramIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none"}} />
                                        </li>
                                        <li>
                                        {/* <button style={{display: "block", padding: "0"}}  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                            <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                            <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                            <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                        </button> */}

                                        <IconButton style={{display: "block", padding: "0"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                            <MenuIcon fontSize="large" style={{ color: '#fff' }} />
                                        </IconButton>      
                                        </li>
                                    </ul> 
                                </div>
                                <div style={{textAlign: "center"}} class="offcanvas offcanvas-end menu-bg" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                                        <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
                                            <CloseIcon style={{ color: '#fff' }} />
                                        </IconButton>
                                    </div>
                                    <div className="offcanvas-body offcanvas-text">
                                        <div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/" style={{textDecoration: "none", color: "white"}}>
                                                    Home
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/funktionen" style={{textDecoration: "none", color: "white"}}>
                                                    Funktionen
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/preise" style={{textDecoration: "none", color: "white"}}>
                                                    Preise
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/auth/login-unprotected" style={{textDecoration: "none", color: "white"}}>
                                                    Login
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/kontakt" style={{textDecoration: "none", color: "white"}}>
                                                    Kontact
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/agb" style={{textDecoration: "none", color: "white"}}>
                                                    AGB
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/cookie-richtlinie-eu" style={{textDecoration: "none", color: "white"}}>
                                                    Cookie-Richtlinie
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/cookie-richtlinie-eu" style={{textDecoration: "none", color: "white"}}>
                                                    Impressum
                                                </a>
                                                <br></br>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </nav>
                            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                            <center>
                                {
                                    isBrowser ? (
                                        <motion.div variants={varFadeIn}>
                                        <h1 style={{ color: "white", fontWeight: '100' }}>{title}</h1>
                                        </motion.div>
                                    ) : (
                                        <motion.div variants={varFadeIn}>
                                            <center>
                                                <h2 style={{color: "white", marginTop: '28px', marginRight: '-24px'}}>{title}</h2>
                                            </center>
                                        </motion.div>
                                    )
                                }
                            
                            </center>
                            </RootStyle>
                        </div>
                    </div> 
                </div>
            </div> 
            </header>
        ):(
            <header id="home" className="header-area pt-100 curve2">
            <div style={{backgroundColor: "white", padding: "0"}} className="navigation-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378077/photoshooted/Photoshooted_A_u2hjii.png" alt="Logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                    <span  className="toggler-icon"></span>
                                    <span  className="toggler-icon"></span>
                                    <span  className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/" style={{textDecoration: "none"}}>
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/funktionen" style={{textDecoration: "none"}}>
                                                Funktionen
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/preise" style={{textDecoration: "none"}}>
                                                Preise
                                            </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="page-scroll" href="/kontakt" style={{textDecoration: "none"}}>
                                                Kontakt
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="page-scroll" href="/auth/login-unprotected" style={{textDecoration: "none"}}>
                                                Login
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <FacebookIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none"}} />
                                        </li>
                                        <li className="nav-item">
                                            <InstagramIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none"}} />
                                        </li>
                                    </ul> 
                                </div>
                                <div style={{textAlign: 'center'}} class="offcanvas offcanvas-end menu-bg" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                                        <IconButton data-bs-dismiss="offcanvas" aria-label="Close">
                                            <CloseIcon style={{ color: '#fff' }} />
                                        </IconButton>
                                    </div>
                                    <div className="offcanvas-body offcanvas-text">
                                        <div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/" style={{textDecoration: "none", color: "white"}}>
                                                    Home
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/funktionen" style={{textDecoration: "none", color: "white"}}>
                                                    Funktionen
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a href="/preise" style={{textDecoration: "none", color: "white"}}>
                                                    Preise
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/auth/login-unprotected" style={{textDecoration: "none", color: "white"}}>
                                                    Login
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/kontakt" style={{textDecoration: "none", color: "white"}}>
                                                    Kontact
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/agb" style={{textDecoration: "none", color: "white"}}>
                                                    AGB
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/cookie-richtlinie-eu" style={{textDecoration: "none", color: "white"}}>
                                                    Cookie-Richtlinie
                                                </a>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <a  href="/cookie-richtlinie-eu" style={{textDecoration: "none", color: "white"}}>
                                                    Impressum
                                                </a>
                                                <br></br>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div> 
                </div>
            </div> 
                <RootStyle  initial="initial" animate="animate" variants={varWrapEnter}>
                    <center>
                        {
                            isBrowser ? (
                                <motion.div variants={varFadeIn}>
                                <h1 style={{ color: "white", fontWeight: '100' }}>{title}</h1>
                                </motion.div>
                            ) : (
                                <motion.div variants={varFadeIn}>
                                <h2 style={{color: "white", marginTop: '28px', marginRight: '-32px'}}>{title}</h2>
                                </motion.div>
                            )
                        }
                            
                    </center>
                </RootStyle>
            </header>
        )
        }
        </>
    )
}

export default Header2
