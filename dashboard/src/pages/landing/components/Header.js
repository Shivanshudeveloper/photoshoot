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
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link className="page-scroll" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="page-scroll" to="/auth/login-unprotected">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <FacebookIcon style={{ color: '#ffffff', cursor: 'pointer' }} />
                                        </li>
                                        <li className="nav-item">
                                            <InstagramIcon style={{ color: '#ffffff', cursor: 'pointer' }} />
                                        </li>
                                    </ul> 
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
