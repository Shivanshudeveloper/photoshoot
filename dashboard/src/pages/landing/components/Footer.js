import React from 'react';
import { Link } from 'react-router-dom';
import {
    isBrowser
} from "react-device-detect";
const Footer = () => {
    return (
        <>
        <footer id="footer" className="footer-area">
            <div  className={isBrowser ? "copyright-area fixed-bottom" : "copyright-area mobilefooter"} style={{zIndex: "auto"}}>
                <div className="container">
                    {
                        isBrowser ? (
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
                        ) : (
                            <div className="row text-center mb-5">
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/funktionen">
                                        Funktionen
                                    </Link>
                                </div>
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/preise">
                                        Preise
                                    </Link>
                                </div>
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Datenschutzerklärung
                                    </Link>
                                </div>
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/cookie-richtlinie-eu">
                                        Cookie-Richtlinie
                                    </Link>
                                </div>
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Impressum
                                    </Link>
                                </div>
                                <div className="col mt-3">
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/kontakt">
                                        Kontakt
                                    </Link>
                                </div>
                                

                                
                            </div>
                        )
                    }
                    
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
