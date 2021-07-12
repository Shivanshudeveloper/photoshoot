import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
    isBrowser
} from "react-device-detect";

import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';

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



const Funktionen = () => {
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
            <Header2 title="Funktionen" />
            

            <section>
                <div style={{ marginBottom: '120px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                    
                    {
                        isBrowser ? (
                            <div className="row">
                                <div className="col-md">
                                    <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492667/photoshooted/download_su8cdo.svg" />
                                    <h2 style={{ color: '#6852ed' }}>
                                    Wir optimieren deinen <br /> Workflow
                                    </h2>

                                    <p className="mt-5 w-75">
                                    Von der Fotoerstellung über den Verkauf und die Abrechnung bis hin zu den Fotoabzügen. Du schießt die Fotos, wir kümmern uns um den Rest.
                                    </p>
                                </div>
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492501/photoshooted/kal-visuals-IJzTAns4kUk-unsplash-scaled-e1621234107640-220bd19f_sbhkuy.webp" className="serviceimg" />
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492501/photoshooted/kal-visuals-IJzTAns4kUk-unsplash-scaled-e1621234107640-220bd19f_sbhkuy.webp" className="mb-4" />
                                </div>
                                <div className="col-md text-center">
                                    <center>
                                        <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492667/photoshooted/download_su8cdo.svg" />
                                    </center>
                                    <h2 style={{ color: '#6852ed' }}>
                                    Wir optimieren deinen <br /> Workflow
                                    </h2>

                                    <p className="mt-5">
                                    Von der Fotoerstellung über den Verkauf und die Abrechnung bis hin zu den Fotoabzügen. Du schießt die Fotos, wir kümmern uns um den Rest.
                                    </p>
                                </div>
                                
                            </div>
                        )
                    }
                    


                    

                    {
                        isBrowser ? (
                            <div style={{ marginTop: '15%' }} className="row">
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492851/photoshooted/photos-scaled-e1621234050911-3a56d1dd_rinmjt.webp" className="serviceimg" />
                                </div>
                                <div className="col-md">
                                    <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492943/photoshooted/download_1_iq44kp.svg" />

                                    <h2 style={{ color: '#6852ed' }}>
                                    Deine Kunden verdienen nur das Beste!
                                    </h2>

                                    <p className="mt-5 w-75">
                                    Mit der Automatisierung des Verkaufsprozesses ist unsere Arbeit lange nicht getan! Unser Produkt ist Kunden- und Benutzerfreundlich, so haben deine Kund*innen z.B die Möglichkeit Fotoabzüge direkt im Prozess zu bestellen.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div style={{ marginTop: '15%' }} className="row">
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492851/photoshooted/photos-scaled-e1621234050911-3a56d1dd_rinmjt.webp" className="mb-4" />
                                </div>
                                <div className="col-md text-center">
                                    <center>
                                        <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621492943/photoshooted/download_1_iq44kp.svg" />
                                    </center>

                                    <h2 style={{ color: '#6852ed' }}>
                                    Deine Kunden verdienen nur das Beste!
                                    </h2>

                                    <p className="mt-5">
                                    Mit der Automatisierung des Verkaufsprozesses ist unsere Arbeit lange nicht getan! Unser Produkt ist Kunden- und Benutzerfreundlich, so haben deine Kund*innen z.B die Möglichkeit Fotoabzüge direkt im Prozess zu bestellen.
                                    </p>
                                </div>
                            </div>
                        )
                    }



                    {
                        isBrowser ? (
                            <div style={{ marginTop: '15%' }} className="row">
                                <div className="col-md">
                                    <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621493062/photoshooted/download_2_hqgw0l.svg" />
                                    <h2 style={{ color: '#6852ed' }}>
                                    Datenschutz wird bei uns großgeschrieben
                                    Deine Daten sind bei uns sicher!
                                    </h2>

                                    <p className="mt-5 w-75">
                                    Alle Fotos und Daten werden verschlüsselt und nur in Deutschland gehostet sowie nach europäischem Datenschutz verarbeitet.
                                    </p>
                                </div>
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621493015/photoshooted/servers-scaled-07e8bf15_ffeyuh.webp" className="serviceimg" />
                                </div>
                            </div>
                        ) : (
                            <div style={{ marginTop: '15%' }} className="row">
                                <div className="col-md">
                                    <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621493015/photoshooted/servers-scaled-07e8bf15_ffeyuh.webp" className="mb-4" />
                                </div>
                                <div className="col-md text-center">
                                    <center>
                                        <img style={{ width: '16%', marginBottom: '10px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621493062/photoshooted/download_2_hqgw0l.svg" />
                                    </center>

                                    
                                    <h2 style={{ color: '#6852ed' }}>
                                    Datenschutz wird bei uns großgeschrieben
                                    Deine Daten sind bei uns sicher!
                                    </h2>

                                    <p className="mt-5">
                                    Alle Fotos und Daten werden verschlüsselt und nur in Deutschland gehostet sowie nach europäischem Datenschutz verarbeitet.
                                    </p>
                                </div>
                            </div>
                        )
                    }


                    


                </div>
            </section>

            <section className="forprices">
                <div className="container">
                    <div className="row">
                        <div className="col-md" style={{padding: "5%"}}>
                            <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1620378009/photoshooted/Photoshooted_logo_white_bg96p5.png" />
                        </div>

                        <div className="col-md" style={{padding: "8%"}}>
                            <center>
                                <p style={{ fontSize: '100px' }} className="text-light mt-5 ml-2">10%</p>
                                <br />
                                <br />
                                <h4 className="text-light ml-2">Nur für kurze Zeit</h4>
                                <br />
                                <p className="text-light text-left">
                                Hol dir jetzt ein Abonnement über 6 Monate  und sichere dir 10 % Nachlass auf deine Monatsrechnung.
                                </p>
                                
                            </center>
                            <center>
                            <Button style={{ borderRadius: '25px', color: '#ffffff', marginTop: '20px' }} href="/preise" size="large" fullWidth variant="contained">Get it Now</Button>
                            </center>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div style={{ marginBottom: '50px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                    <h2 className="mb-5" style={{ color: '#6852ed' }}>
                    Automatisiere deine Geschäftsabläufe als Profifotograf und mache dir das Leben leichter.
                    </h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow mt-4">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655210/photoshooted/abzuege_kerpwl.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Fotoabzüge direkt online bestellen</h4>
                                    <p class="mt-20">Zeitgleich zum Kaufprozess kann der Kunde seine Fotoabzüge bestellen.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621656123/photoshooted/rgb_u7gegz.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Farbechte Darstellung der Fotos</h4>
                                    <p class="mt-20">Zeitgleich zum Kaufprozess kann der Kunde seine Fotoabzüge bestellen.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621656277/photoshooted/rgb_btxsmz.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Simple Kaufabwicklung</h4>
                                    <p class="mt-20">Endkunden können die bearbeiteten Fotos direkt über dich erwerben und via Stripe, Lastschrift oder Kreditkarte zahlen. Du bestimmst deine Preise!</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655210/photoshooted/code_jxa5ju.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Login über individuellem Fotoalbum Code</h4>
                                    <p class="mt-20">Der Fotograf teilt seinen Kunden einen generierten Code mit, über diesen kann sich der Kunde sein Fotoalbum aufrufen.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655215/photoshooted/zip_bvchv7.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Komprimierte Downloads</h4>
                                    <p class="mt-20">Komfortabler ZIP-Download aller Fotos oder gezielte Selektion einzelner Bilder.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655210/photoshooted/auswahl_merene.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Selektion durch einfaches Markieren</h4>
                                    <p class="mt-20">Deine Kunden wählen Ihre Lieblingsaufnahmen, diese werden von dir bearbeitet und einfach wieder hochgeladen.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655210/photoshooted/fastdownload_lfqtzh.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Schneller und unkomplizierter Upload</h4>
                                    <p class="mt-20">Drag & Drop im Browser, direkt aus Lightroom.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655212/photoshooted/raw_meov0j.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Alle Größen & Formate</h4>
                                    <p class="mt-20">Unterstützt werden alle gängigen Bildformate ob riesiges RAW, JPG, TIFF, PSD, PDF, PNG, HEIC</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655212/photoshooted/intime_iwq4wb.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Benachrichtigungen und Live Chat</h4>
                                    <p class="mt-20">Fotograf und Endkunde erhalten Push- und E-Mail-Benachrichtigungen, zudem kannst du mit deinen Kunden über unseren Live Chat kommunizieren.</p>
                                </center>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div style={{ height: '334px', padding: '30px' }} className="card card-body mt-4 shadow">
                                <center>
                                    <img style={{ width: '80px' }} className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621655215/photoshooted/watermark_g2xy79.svg" />
                                    <h4 style={{ color: '#6852ed' }} >Wasserzeichen</h4>
                                    <p class="mt-20">Alle Bilder werden automatisch, noch vor der Kaufabwicklung, mit einem individuellen Wasserzeichen versehen.</p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section>

                {
                    isBrowser ? (
                        <div style={{ marginBottom: '50px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                            <h2 style={{ color: '#6852ed' }}>
                            Deine Kunden werden es lieben!
                            </h2>

                            <div className="row mt-5">
                                <div className="col-md">
                                    <img className="serviceimg" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621494227/photoshooted/devices-1-535281af_jr6zu1.webp" />
                                </div>
                                <div style={{margin: "5%"}} className="col-md">
                                    <h2 style={{ color: '#6852ed' }}>
                                    Verschiedene Endgeräte – bei einheitlicher Leistungsstärke und Benutzeroberfläche.
                                    </h2>
                                    <center className="mt-5">
                                        <a href="#!">Desktop</a> | <a href="#!"> Kamera </a> | <a href="#!">App</a>
                                    </center>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ marginBottom: '50px', marginTop: '80px', maxWidth: '1360px' }} className="container">
                            <h2 style={{ color: '#6852ed' }}>
                            Deine Kunden werden es lieben!
                            </h2>

                            <div className="row mt-5">
                                <div className="col-md text-center">
                                    <img className="mb-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621494227/photoshooted/devices-1-535281af_jr6zu1.webp" />
                                </div>
                                <div className="col-md text-center">
                                    <h4 style={{ color: '#6852ed' }}>
                                    Verschiedene Endgeräte – bei einheitlicher Leistungsstärke und Benutzeroberfläche.
                                    </h4>
                                    <center className="mt-5">
                                        <a href="#!">Desktop</a> | <a href="#!"> Kamera </a> | <a href="#!">App</a>
                                    </center>
                                </div>
                            </div>
                        </div>
                    )
                }

                
            </section>


            <section>
                {
                    isBrowser ? (
                        <div style={{ marginBottom: '100px', marginTop: '90px', maxWidth: '1360px' }} className="container">
                            <div className="row">
                                <div className="col-md">
                                    <h1 style={{ color: '#6852ed' }}>
                                    8,99€
                                    </h1>
                                </div>
                                <div className="col-md mt-4">
                                    <h4 style={{ color: '#6852ed' }}>
                                    Teste noch heute unseren Service und lass dich begeistern.
                                    </h4>
                                </div>
                                <div className="col-md">
                                    <Button style={{ borderRadius: '25px', color: '#ffffff', marginTop: '20px' }} href="/preise" size="large" fullWidth variant="contained">Zu den Paketen</Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ marginBottom: '100px', marginTop: '90px', maxWidth: '1360px' }} className="container">
                            <div className="row">
                                <div className="col-md text-center">
                                    <h2 style={{ color: '#6852ed' }}>
                                    8,99€
                                    </h2>
                                </div>
                                <div className="col-md mt-4 text-center">
                                    <h4 style={{ color: '#6852ed' }}>
                                    Teste noch heute unseren Service und lass dich begeistern.
                                    </h4>
                                </div>
                                <div className="col-md">
                                    <Button style={{ borderRadius: '25px', color: '#ffffff', marginTop: '20px' }} href="/preise" size="large" fullWidth variant="contained">Zu den Paketen</Button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>



            <Footer2 />
        </>
    )
}

export default Funktionen
