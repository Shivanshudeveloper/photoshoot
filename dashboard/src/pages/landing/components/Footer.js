import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer id="footer" className="footer-area">
            <div className="copyright-area fixed-bottom" style={{zIndex: "auto"}}>
                <div className="container">
                    <div className="row">
                            <div className="copyright text-center">
                            <ul>
                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/funktionen">
                                        Funktionen
                                    </Link>
                                </li>
                                
                                <li>
                                    |
                                </li>
                                
                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/preise">
                                        Preise
                                    </Link>
                                </li>

                                <li>
                                    |
                                </li>

                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Datenschutzerklärung
                                    </Link>
                                </li>

                                <li>
                                    |
                                </li>


                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/cookie-richtlinie-eu">
                                        Cookie-Richtlinie
                                    </Link>
                                </li>

                                
                                <li>
                                    |
                                </li>


                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Impressum
                                    </Link>
                                </li>


                                <li>
                                    |
                                </li>


                                <li>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/kontakt">
                                        Kontakt
                                    </Link>
                                </li>


                            </ul>
                            </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-12">
                            <div className="copyright text-center">
                                <p className="text-light">© 2021 photoshooted. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </footer>
        </>
    )
}

export default Footer
