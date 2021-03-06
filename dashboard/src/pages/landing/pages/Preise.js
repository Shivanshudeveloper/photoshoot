import React from 'react';
import Button from '@material-ui/core/Button';

// Components
import Header from '../components/Header';
import Footer2 from '../components/Footer2';
import Footer from './Footer';

import { experimentalStyled as styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../../components/animate';

import {
    isBrowser
} from "react-device-detect";


const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      alignItems: 'center'
    }
}));

const Preise = () => {
    return (
        <>
        <div style={{overflowX: "hidden"}}>
            <section className="forprices">
                <Header />
                <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>

                {
                    isBrowser ? (
                        <center style={{ marginTop: '10%' }}>
                            <motion.div variants={varFadeInUp}>
                                <h1 style={{ fontWeight: '100' }} className="text-light">
                                    Bei unseren Abos <br /> ist für jeden etwas dabei.
                                </h1>
                            </motion.div>
                        </center>
                    ) : (
                        <center style={{ marginTop: '25%' }}>
                            <motion.div variants={varFadeInUp}>
                                <h2 style={{ fontWeight: '100', fontSize: '50px' }} className="text-light">
                                    Bei unseren Abos <br /> ist für jeden etwas dabei.
                                </h2>
                            </motion.div>
                        </center>
                    )
                }

                


                <br />
                <div style={{ marginBottom: '50px', maxWidth: '1360px' }} className="container mt-5">
                    <div className="row">

                        <div style={{ marginBottom: '100px' }} className="col-md">
                        <motion.div variants={varFadeInUp}>
                        <div className="card card-body shadow">
                                <h3 className="gb">5GB</h3>
                                <div class="el-title uk-heading-large uk-margin-top uk-margin-remove-bottom">8,99<span class="uk-text-top uk-h3">€</span></div>
                                <h6 className="text-secondary mt-4 mb-4">
                                    monatliche Zahlung <br />
                                    Mindestlaufzeit 6 Monate
                                </h6>
                                <br />
                                
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>1 Benutzer</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Lightroom / Capture One Plugins</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>20 % Transaktionsgebühr</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>max.2 Fotoalben</span>
                                </span>
                                
                                <center>
                                    <Button style={{ borderRadius: '25px', marginTop: '20px' }} className="uk-button-primary" size="large" fullWidth variant="contained">HOL DIR 1 MONAT GRATIS</Button>
                                </center>

                            </div>
                        </motion.div>
                        </div>


                        <div style={{ marginBottom: '100px' }} className="col-md">
                        <motion.div variants={varFadeInUp}>
                        <div className="card card-body shadow">
                                <h3 className="gb">20GB</h3>
                                <div class="el-title uk-heading-large uk-margin-top uk-margin-remove-bottom">18,99<span class="uk-text-top uk-h3">€</span></div>
                                <h6 className="text-secondary mt-4 mb-4">
                                    monatliche Zahlung <br />
                                    Mindestlaufzeit 6 Monate
                                </h6>
                                <br />
                                
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>1 Benutzer</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Lightroom / Capture One Plugins</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>10 % Transaktionsgebühr</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}> Unlimitierte Fotoalben</span>
                                </span>
                                
                                <center>
                                    <Button style={{ borderRadius: '25px', marginTop: '20px' }} className="uk-button-primary" size="large" fullWidth variant="contained">HOL DIR 1 MONAT GRATIS</Button>
                                </center>

                            </div>
                        </motion.div>
                        </div>
                        
                        
                        <div style={{ marginBottom: '100px' }} className="col-md">
                        <motion.div variants={varFadeInUp}>
                        <div className="card card-body shadow">
                                <h3 className="gb">5GB</h3>
                                <div class="el-title uk-heading-large uk-margin-top uk-margin-remove-bottom">89,99<span class="uk-text-top uk-h3">€</span></div>
                                <h6 className="text-secondary mt-4 mb-4">
                                    monatliche Zahlung <br />
                                    Mindestlaufzeit 6 Monate
                                </h6>
                                <br />
                                
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Unlimitierte Benutzer</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Lightroom / Capture One Plugins</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Keine Transaktionsgebühr</span>
                                </span>

                                <span className="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="26" height="26"
                                        viewBox="0 0 172 172"
                                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    <span style={{ marginLeft: '6px', fontFamily: 'Varela Round' }}>Unlimitierte Fotoalben</span>
                                </span>
                                
                                <center>
                                    <Button style={{ borderRadius: '25px', marginTop: '20px' }} className="uk-button-primary" size="large" fullWidth variant="contained">HOL DIR 1 MONAT GRATIS</Button>
                                </center>
                            </div>
                        </motion.div>
                        </div>
                        
                    </div>
                </div>
                </RootStyle>
            </section>

            <section>
                <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                <div style={{ marginBottom: '50px', marginTop: '10%', maxWidth: '1360px' }} className="container">
                    <motion.div variants={varFadeInUp}>
                    <h2 style={{ color: '#6852ed', fontWeight: 'normal' }}>
                        Übersicht aller
                        <br />
                        Funktionen
                    </h2>

                    <div  style={!isBrowser ? {overflowX: "scroll"} : null}  >
                    <table style={{ color: '#5c5c5c' }} class="table table-borderless mt-5">
                    <thead>
                        <tr>
                        <th style={{ color: '#6852ed', width: '40%' }} scope="col">FUNKTIONEN</th>
                        <th style={{ color: '#6852ed' }} scope="col">ESSENTIAL</th>
                        <th style={{ color: '#6852ed' }} scope="col">STANDARD</th>
                        <th style={{ color: '#6852ed' }} scope="col">AGENTUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Benutzer</td>
                            <td>1 Users</td>
                            <td>2 Users</td>
                            <td>Unlimitiert</td>
                        </tr>

                        <tr>
                            <td>Speicherplatz</td>
                            <td>5 GB</td>
                            <td>20 GB</td>
                            <td>250 GB</td>
                        </tr>

                        <tr>
                            <td>Fotoalben</td>
                            <td>2</td>
                            <td>Unlimitiert</td>
                            <td>Unlimitiert</td>
                        </tr>


                        <tr>
                            <td>Lightroom und Capture One Plugin</td>
                            <td>
                                <img src="https://img.icons8.com/color/26/000000/delete-sign.png"/>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="26" height="26"
                                    viewBox="0 0 172 172"
                                    ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                                    
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="26" height="26"
                                    viewBox="0 0 172 172"
                                    ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#6852ed"><path d="M145.48333,43.35833l-84.56667,84.56667l-34.4,-34.4l-10.03333,10.39167l44.43333,44.075l94.6,-94.6z"></path></g></g></svg>
                            </td>
                        </tr>

                        <tr>
                            <td>Sit amet consetetur elit</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Dolor sit amet consetetur</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Lorem ipsum dolor sit amet</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Ipsum dolor sit amet</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Dolor sit amet consetetur</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Consetetur sadipscing elit</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Lorem ipsum amet consetetur</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        
                    </tbody>
                    </table>
                    </div>
                    </motion.div>

                    
                </div>
                </RootStyle>
            </section>

            <section>
            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                <div style={{ marginBottom: '50px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                <motion.div variants={varFadeInUp}>
                    <h2 style={{ color: '#6852ed', fontWeight: 'normal' }}>
                        Frequently Asked
                        <br />
                        Questions
                    </h2>

                    <div style={{ marginBottom: '50px', marginTop: '80px' }} className="row">
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Lorem ipsum dolor sit amet consetetur</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Consetetur sadipscing elitr</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '50px', marginTop: '80px' }} className="row">
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Amet consetetur sadipscing elitr</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Dolor sit amet consetetur sadipscing elitr</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '50px', marginTop: '80px' }} className="row">
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Consetetur sadipscing elitr</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                            </p>
                        </div>
                        <div className="col-md">
                            <h4 style={{ color: '#6852ed' }}>Consetetur sadipscing elitr</h4>
                            <p className="mt-2">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                            <br />
                            <a href="#!" style={{ color: '#6852ed' }}>
                            Have more questions?
                            </a>
                            <br />
                            <br />
                            <a href="#!" style={{ color: '#6852ed' }}>
                            Go to our support page.
                            </a>
                        </div>
                    </div>
                </motion.div>
                </div>
            </RootStyle>
            </section>

            <section>
            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                <div style={{ marginBottom: '120px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                <motion.div variants={varFadeInUp}>
                    <h2 style={{ color: '#6852ed', fontWeight: 'normal' }}>
                    Our Clients
                    </h2>

                    <div className="row mt-5">
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621491187/photoshooted/pricing-clients-02_o0lbmw.svg" />
                        </div>
                        <div className="col-md">
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621491187/photoshooted/pricing-clients-01_c1zibf.svg" />
                        </div>
                    </div>
                </motion.div>
                </div>
            </RootStyle>
            </section>
        </div>
        <Footer />
            {/* {isBrowser ? (
                    <div>
                        <Footer/>
                    </div>
                ):(
                    <div className="footer-fix">
                        <Footer/>
                    </div>
                )
            } */}
        </>
    )
}

export default Preise
