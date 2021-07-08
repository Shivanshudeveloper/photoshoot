import React from 'react';

const Footer = () => {
    return (
        <>
        <footer id="footer" className="footer-area">
            <div className="copyright-area fixed-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright text-center">
                            <ul>
                                <li><a className="text-light" href="/funktionen">Funktionen</a></li>
                                
                                <li>
                                    |
                                </li>
                                
                                <li><a className="text-light" href="/preise">Preise</a></li>

                                <li>
                                    |
                                </li>

                                <li><a className="text-light" href="/impressum-datenschutzerklaerung">Datenschutzerklärung</a></li>

                                <li>
                                    |
                                </li>


                                <li><a className="text-light" href="/cookie-richtlinie-eu">Cookie-Richtlinie</a></li>

                                
                                <li>
                                    |
                                </li>


                                <li><a className="text-light" href="/impressum-datenschutzerklaerung">Impressum</a></li>


                                <li>
                                    |
                                </li>


                                <li><a className="text-light" href="/kontakt">Kontakt</a></li>


                            </ul>
                            </div>
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
