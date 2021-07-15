import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import {
    isBrowser
} from "react-device-detect";
const Footer_ = () => {
    return (
        <>
        <footer style={{position: 'fixed', bottom: "-20px", width: "100%"}} id="footer" className="footer-area ifooter">
            <div className={isBrowser ? "copyright-area fixed-bottom" : "copyright-area mobilefooter"} style={{zIndex: "auto"}}>
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
                            // For Mobile
                            <Grid className="mb-1 text-center" container spacing={3}>
                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/funktionen">
                                        Funktionen
                                    </Link>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/preise">
                                        Preise
                                    </Link>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Datenschutzerklärung
                                    </Link>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/cookie-richtlinie-eu">
                                        Cookie-Richtlinie
                                    </Link>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/impressum-datenschutzerklaerung">
                                        Impressum
                                    </Link>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Link style={{textDecoration: "none"}} className="text-light" to="/kontakt">
                                        Kontakt
                                    </Link>
                                </Grid>
                            </Grid>
                        )
                    }
                    
                    <div className="row mt-2">
                        <div className="col-lg-12">
                            <div className="copyright text-center">
                                <p className="text-light">© 2021 photoshooted. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div> 
            </div>
        </footer>
        </>
    )
}

export default Footer_
