import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';

import { experimentalStyled as styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../../components/animate';

const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      alignItems: 'center'
    }
}));

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    textroot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 450,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 14,
    },
      
    
}));



const Kontakt = () => {
    const classes = useStyles();


    return (
        <>
            <Helmet>
                <style type="text/css">{`
                    body, html {
                        margin: 0;
                    }
                    
                `}</style>
            </Helmet>
            <Header2 title="Kontakt" />
            

            <div className="container">
            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                <div className="row">
                    <div style={{ marginTop: '16%' }} className="col-md">
                    <motion.div variants={varFadeInUp}>
                        <h4 style={{ color: '#6852ed' }}>Photoshooted</h4>
                        <h6 className="mt-2" style={{ color: '#6852ed' }}>info(at)photoshooted.de</h6>
                    </motion.div>
                    </div>
                    <div style={{ marginTop: '4%' }} className="col-md">
                    <motion.div variants={varFadeInUp}>
                        <div class="contact-form">
                            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator" novalidate="true">
                            <div class="row">
                            <div class="col-md-6">
                            <div class="single-form form-group has-error has-danger">
                            <input className="inp" type="text" name="name" placeholder="Your Name" data-error="Name is required." required="required" />
                            </div> 
                            </div>
                            <div class="col-md-6">
                            <div class="single-form form-group has-error has-danger">
                            <input className="inp" type="email" name="email" placeholder="Your Email" data-error="Valid email is required." required="required" />
                            </div> 
                            </div>
                            <div class="col-md-6">
                            <div class="single-form form-group">
                            <input className="inp" type="text" name="subject" placeholder="Subject" data-error="Subject is required." required="required" />
                            <div class="help-block with-errors"></div>
                            </div> 
                            </div>
                            <div class="col-md-6">
                            <div class="single-form form-group">
                            <input className="inp"  type="text" name="phone" placeholder="Phone" data-error="Phone is required." required="required" />
                            <div class="help-block with-errors"></div>
                            </div> 
                            </div>
                            <div class="col-md-12">
                            <div class="single-form form-group has-error has-danger">
                            <textarea className="inp" placeholder="Your Mesaage" name="message" data-error="Please,leave us a message." required="required"></textarea>
                            </div> 
                            </div>
                            <p class="form-message"></p>
                            <div class="col-md-12">
                            <div class="single-form form-group text-center">
                                <Button style={{ borderRadius: '25px' }} size="large" variant="contained">SEND MESSAGE</Button>
                            </div> 
                            </div>
                            </div> 
                            </form>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </RootStyle>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer2 />
        </>
    )
}

export default Kontakt
