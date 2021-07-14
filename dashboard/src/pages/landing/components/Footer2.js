import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import {
    isBrowser
} from "react-device-detect";
const Footer2 = () => {
    return (
        <>
            <footer id="footer" class="footer-area">
                <div class="copyright-area footerBg">
                    <div class="container">
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
                                <Grid className="mb-5 text-center" container spacing={3}>
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
                        <div class="row mt-2">
                            <div class="col-lg-12">
                                <div class="copyright text-center">
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

export default Footer2
