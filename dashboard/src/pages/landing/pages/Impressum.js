import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';


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



const Impressum = () => {
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
            <Header2 title="Impressum" />
            

            <div style={{ marginTop: '80px' }} className="container">
                <span>
                    Angaben gemäß §5 TMG <br />
                    photoshooted <br />
                    Julian Viragh <br />
                    An der Beun 9 <br />
                    65933 Frankfurt am Main <br />
                    Germany <br />
                    Telefon: +49 (0)69 269 44 <br />
                    E-Mail: info(at)photoshooted.de <br />

                    <br />
                    <br />

                    Sitz der Gesellschaft: Frankfurt a.M. <br />
                    Steuernummer: 69817345500

                    <br />
                    <br />
                    Vertretungsberechtigter Inhaber: <br />
                    Julian Viragh

                    <br />
                    <br />

                    Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV <br />
                    (Staatsvertrag über Rundfunk und Telemedien): <br />
                    Julian Viragh <br />
                    Telefon: +49 (0)69 269  <br />
                    E-Mail: info(at)photoshooted.de <br />

                    <br />
                    <br />

                    Alle Inhalte und Fotos sind urheberrechtlich geschützt. Deren Verwendung bedarf schriftlicher Genehmigung. photoshooted übernimmt keine Haftung für die Richtigkeit der Inhalte.

                    <br />
                    <br />

                    Hinweis: Mit einem Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Anbringung eines Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann lt. LG nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert.

                    <br />
                    <br />

                    Wir betonen, dass wir keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten haben. Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten der gelinkten Seiten auf unserer Homepage. Diese Erklärung gilt für alle Links auf unserer Homepage.

                    <br />
                    <br />

                    Datenschutz <br />
                    Sicherheit und Datenschutz sind uns wichtig. photoshooted achtet deshalb entsprechend der gesetzlichen Datenschutzvorschriften und dieser Datenschutzerklärung auf sorgfältigen Umgang mit Ihren persönlichen Informationen. Die Details dazu finden Sie unter dem separaten Menüpunkt “Datenschutz”
                    <br />
                    photoshooted weist darauf hin, dass Datenübertragung im Internet (z. B. bei einer E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor einem Zugriff durch Dritte ist dabei nicht möglich.

                    <br />
                    <br />

                    Widerrufsrecht

                    <br />
                    Der Kunde kann seine Bestellung gemäß § 3 Fernabsatzgesetz in Verbindung mit § 355 BGB innerhalb von zwei Wochen gegenüber photoshooted widerrufen. Der Widerruf bedarf keiner Begründung, muss aber schriftlich (z. B. per Brief, Fax oder E-Mail) und durch Rücksendung der Ware erklärt werden. Im Falle eines Widerrufs ist der Kunde zur umgehenden Rücksendung der Ware verpflichtet. Eventuell bereits geleistete Zahlungen werden zurückerstattet.
                    
                    <br />
                    <br />

                    Als Online-Händler sind wir ab 9.1.2016 verpflichtet, unsere Kunden auf die Existenz der Plattform zur Online-Streitbeilegung hinzuweisen (Neue EU-Verordnung, ODR, Artikel 14, Absatz 1), die unter dem link <a target="_blank" href="http://ec.europa.eu/consumers/odr"> http://ec.europa.eu/consumers/odr </a> erreichbar ist.

                    <br />
                    <br />
                    Wichtiger Hinweis zu allen Links
                    <br />
                    Mit Urteil vom 12. Mai 1998 – 312 O 85/98 – “Haftung für Links” hat das Landgericht (LG) Hamburg entschieden, dass man durch die Anbringung eines Links zu anderen Websites, die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann lt. LG nur dadurch verhindert werden, dass man sich von diesen Inhalten distanziert. Wir distanzieren uns deshalb ausdrücklich von allen Inhalten aller gelinkten Seiten auf unserer Homepage. Es kann nicht garantiert werden, dass alle Angaben immer komplett, richtig und aktuell dargestellt sind. Dies gilt insbesondere für Links.
                    
                    <br />
                    <br />
                    <br />
                    <br />

                </span>
            </div>
            <Footer2 />
        </>
    )
}

export default Impressum
