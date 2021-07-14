import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id="home" className="header-area pt-100">
            <div className="navigation-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png" alt="Logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                    <span style={{backgroundColor: "white"}} className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link className="page-scroll" to="/" style={{textDecoration: "none"}}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="page-scroll link" to="/auth/login-unprotected" style={{textDecoration: "none"}}>
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <FacebookIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none" }} />
                                        </li>
                                        <li className="nav-item">
                                            <InstagramIcon style={{ color: '#ffffff', cursor: 'pointer', textDecoration: "none" }} />
                                        </li>
                                    </ul> 
                                </div>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body offcanvas-text">
                                        <div>
                                            <div style={{margin: "20px"}}>
                                                <Link className="h1" to="/" style={{textDecoration: "none"}}>
                                                    Home
                                                </Link>
                                                <br></br>
                                            </div>
                                            <div style={{margin: "20px"}}>
                                                <Link className="h1" to="/auth/login-unprotected" style={{textDecoration: "none"}}>
                                                    Login
                                                </Link>
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
            </header>
        </>
    )
}

export default Header
