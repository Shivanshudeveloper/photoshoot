import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../../components/animate';
import {
    isBrowser
} from "react-device-detect";
// Components
import Header from '../components/Header';
import Footer_ from '../components/Footer_';
import Footer from './Footer';

import { VerifyCodeForm } from '../../../components/authentication/verify-code/index'


const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      position: 'fixed',
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
        color:'white',
        outline: '0',
        fontSize: '22px',
        borderBottom: '2px solid #ffffff'
      },
      iconButton: {
        padding: 14,
    },
      
    
}));



const Home = () => {
    const classes = useStyles();
    const [ordernumber, setordernumber] = React.useState('');

    const checkCode = (event) => {
        if (event.key === 'Enter') {
            if (ordernumber.length === 6) {
                window.location.href = `/registeruser?n=${ordernumber}`;
            }
        }
    }


    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Helmet>
                <style type="text/css">{`
                    body, html {
                        height: 100%;
                        margin: 0;
                        background-image: url("https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621399609/photoshooted/background_lv9tfq.svg");
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    
                `}</style>
            </Helmet>
            
            <Header />

            <section style={{overflowY: "scroll"}}>
            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                <div className="container mainpagecontainer">
                    {
                        isBrowser ? (
                            <center>
                                <motion.div variants={varFadeIn}>
                                    <h2 style={{ fontWeight: 'normal' }} className="text-light">Fotoalbum Code</h2>
                                    <hr className="forhr" />
                                        {/* <InputBase
                                            className={classes.input}
                                            placeholder="XXXXXX"
                                            onKeyDown={checkCode}
                                            onChange={(e) => setordernumber(e.target.value)}
                                            maxlength="6"
                                            inputProps={{ 'aria-label': 'XXXXXX' }}
                                        /> */}
                                        <VerifyCodeForm />
                                    <h4 style={{ fontWeight: 'normal' }} className="text-light mt-5">Gib hier deinen Code ein und bestätige mit Enter.</h4>
                                </motion.div>
                            </center>
                        ) : (
                            <center>
                                <br />
                                <br />
                                <br />
                                <motion.div variants={varFadeIn}>
                                    <h2 style={{ fontWeight: 'normal' }} className="text-light">Fotoalbum Code</h2>
                                    <hr className="forhr" />
                                        {/* <InputBase
                                            className={classes.input}
                                            placeholder="XXXXXX"
                                            onKeyDown={checkCode}
                                            onChange={(e) => setordernumber(e.target.value)}
                                            maxlength="6"
                                            inputProps={{ 'aria-label': 'XXXXXX' }}
                                        />
                                        <IconButton type="button" className={classes.iconButton} aria-label="search">
                                            <LockIcon style={{ color: '#ffffff' }} />
                                        </IconButton> */}
                                        <VerifyCodeForm />
                                    <h4 style={{ fontWeight: 'normal' }} className="text-light mt-5">Gib hier deinen Code ein und bestätige mit Enter.</h4>
                                </motion.div>
                            </center>
                        )
                    }
                </div>
            </RootStyle>
            </section>
            <div style={{position: 'fixed', bottom: "0px", width: "100%"}}>
                <Footer />
            </div>
        </div>
    )
}

export default Home
