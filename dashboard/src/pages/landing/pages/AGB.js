import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';


import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';
import Footer from './Footer';

import {
    isBrowser
} from "react-device-detect";

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



const AGB = () => {
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
            
            <Header2 />
            

            <div style={{ margin: '5% 20%', color: '#646464' }}>
                <p>Stand vom 1. Mai 2021</p>
                <h3 style={{color:"rgb(104, 82, 237)"}}>Allgemeine Geschäftsbedingungen (AGB)</h3>
                <br />
                <br />
                <br />
                <br />
                <p style={{fontWeight: 'bold'}}>Geltung der Bedingungen</p>
                <p>Diese Nutzungsbedingungen gelten für alle Geschäftsbeziehungen zwischen Nutzern und der “photoshooted GmbH ”, hier im Weiteren kurz “photoshooted” genannt, im Zusammenhang mit der Erbringung des Dienstes „photoshooted“. Maßgeblich ist die jeweils zum Zeitpunkt des Vertragsschlusses aktuelle Fassung. Etwaige abweichende Geschäftsbedingungen des Nutzers finden keine Anwendung, es sei denn, diesen wurde durch photoshooted ausdrücklich schriftlich oder in Textform zugestimmt. Spätestens mit der Registrierung bei photoshooted erkennst der Nutzer die Geltung dieser Geschäftsbedingungen an.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Vertragsschluss</p>
                <p>Ein Vertragsverhältnis kommt erst mit einer erfolgreich abgeschlossenen Registrierung zustande. Die Registrierung ist erfolgreich, wenn der Nutzer sich das erste Mal in seinen Account eingeloggt hat. Der Nutzer kann photoshooted 30 Tage in vollem Umfang und kostenlos nutzen. Hat der Nutzer nach Ablauf dieser Zeit keine Zahlungsdaten eingegeben, wird der Account des Users auf die Funktionen des Free-Accounts zurückgestuft. Dieser Account verursacht für den Nutzer keinerlei Kosten. Alle bereits erstellten Galerien und hochgeladenen Galerien bleiben dabei erhalten und sind abrufbar, das Hochladen neuer Bilder in diese Galerien ist jedoch gesperrt. Der Nutzer hat jederzeit die Möglichkeit, seinen Account durch die Eingabe seiner Zahlungsdaten auf die Funktionalität des Lite/Pro/Agentur-Accounts hochzustufen. Hat der Nutzer bis zu diesem Zeitpunkt keine Zahlungsdaten eingegeben, entstehen ihm keinerlei Kosten. Das Vertragsverhältnis läuft auf unbestimmte Zeit.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Leistungen von photoshooted</p>
                <p>photoshooted ist eine Onlineplattform für Fotografen. photoshooted ermöglicht es dem Nutzer, Bilddaten online zu speichern und diese in Form von variablen Galerien aufzurufen und weiterzugeben. photoshooted behält sich das Recht vor, die angebotenen Funktion jederzeit zu verändern und zu verbessern. Ein Anspruch auf weitere Funktionalitäten besteht nicht. photoshooted ist ein Webservice, der über das Internet zugänglich gemacht wird. Der Internetzugang, der für die Nutzung von photoshooted benötigt wird, ist selbstverständlich nicht Gegenstand der Leistungen von photoshooted. In Fällen, in denen die Nutzung des Dienstes unentgeltlich erfolgt, bieten wir ggf. nur beschränkte Funktionen als Leistung an. Außerdem entsteht kein Anspruch auf eine dauerhafte Nutzung von photoshooted. Wir behalten uns das Recht vor, unsere kostenlosen Leistungen jederzeit einzuschränken. Selbstverständlich behalten wir uns auch das Recht vor, kostenlose Leistungen jederzeit zu erweitern und/oder zu verbessern. Der Umfang der kostenpflichtigen Leistungen ergibt sich aus der zum Zeitpunkt des Vertragsschlusses jeweils aktuell geltenden Preis- und Leistungsbeschreibung.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Hinweise zum Widerrufsrecht</p>
                <p>Sie können Ihre Vertragserklärung innerhalb von 14 Tagen ohne Angabe von Gründen in Textform (Brief oder E-Mail) widerrufen. Die Frist beginnt nach Erhalt dieser Belehrung in Textform, jedoch nicht vor Vertragsschluss und auch nicht vor Erfüllung unserer Informationspflichten gemäß § 312c Abs. 2 BGB in Verbindung mit § 1 Abs. 1, 2 und 4 BGB-InfoV. Der Widerruf ist zu richten an kontakt@photoshooted.de oder postalisch an photoshooted, Auf der Beun 9, 65933 Frankfurt am Main.</p>
                <br />
 
                <p style={{fontWeight: 'bold'}}>Widerrufsfolgen</p>
                <p>Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen zurück zu gewähren und ggf. gezogene Nutzungen (z. B. Zinsen) herauszugeben. Können Sie uns die empfangene Leistung ganz oder teilweise nicht oder nur in verschlechtertem Zustand zurück gewähren, müssen Sie uns insoweit ggf. Wertersatz leisten. Dies kann dazu führen, dass Sie die vertraglichen Zahlungsverpflichtungen für den Zeitraum bis zum Widerruf gleichwohl erfüllen müssen. Verpflichtungen zur Erstattung von Zahlungen müssen innerhalb von 30 Tagen erfüllt werden. Die Frist beginnt für Sie mit der Absendung Ihrer Widerrufserklärung, für uns mit deren Empfang.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Preise und Zahlungsabwicklung</p>
                <p>Die Entgelte für unsere Leistungen, die wir auf photoshooted erbringen, ergeben sich aus der zum Zeitpunkt des jeweiligen Vertragsschlusses gültigen Preis- und Leistungsbeschreibung. Die Vergütung für die Nutzung von photoshooted wird jeweils zum Anfang des Abrechnungszeitraumes fällig. Die Zahlung der Vergütung erfolgt durch Lastschrifteinzug oder Kreditkartenzahlung. Der Nutzer hat dafür Sorge zu tragen, dass das Bank- oder Kreditkarten-Konto, von dem der Betrag abgebucht wird, über die erforderliche Deckung verfügt. Für den Fall, dass die Zahlung aufgrund von Umständen, die vom Nutzer zu vertreten sind, nicht erfolgt, kann photoshooted die entstandenen Mehrkosten (z.B. Kosten der Rücklastschrift) dem Nutzer in der jeweils angefallenen Höhe berechnen. Kommt der Nutzer in Zahlungsverzug, so ist photoshooted berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten über dem jeweiligen Basiszinssatz zu fordern. Der Nachweis eines höheren Verzugsschadens durch photoshooted bleibt hiervon unberührt. Ein Recht auf Aufrechnung mit Forderungen gegenüber photoshooted steht dem Nutzer nur zu, wenn diese Forderungen unbestritten oder rechtskräftig festgestellt worden sind. photoshooted stellt seinen Nutzern jeweils am Tag der Abrechnung Rechnungen zur Verfügung. Diese können im Kundenmenü aufgerufen und ausgedruckt werden.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Pflichten der Nutzer</p>
                <p>Der Nutzer ist verpflichtet, Informationen, die im Rahmen der Account-Erstellung bzw. -änderung angegeben werden, wahrheitsgemäß anzugeben. Zugangsdaten dürfen nicht an andere Personen weitergeben werden. Insbesondere darf der Nutzer anderen Personen nicht erlauben, mit dessen Zugangsdaten photoshooted zu nutzen. Der Nutzer ist verpflichtet, die Zugangsdaten für seinen Account vor der unberechtigten Kenntnisnahme Dritter wirksam zu schützen. Der Nutzer ist verpflichtet, bei der Nutzung die in der Bundesrepublik Deutschland geltenden Gesetze und Rechtsvorschriften einzuhalten, auch wenn der Nutzer photoshooted außerhalb der Bundesrepublik Deutschland nutzt. Sofern der Nutzer anderen Personen über die Empfehlungsfunktion von photoshooted eine E-Mail schickt, ist er verpflichtet, sicherzustellen, dass er eine E-Mail an diese Person mit einem Hinweis auf photoshooted senden darf. Es ist untersagt, unsere Leistungen, insbesondere den Dienst photoshooted, missbräuchlich in Anspruch zu nehmen. Eine missbräuchliche Nutzung liegt insbesondere in folgenden Fällen vor: – die Veröffentlichung oder Verbreitung rechtswidriger, diffamierender, eindeutig pornographischer oder sonstiger anstößiger Inhalte – die Nutzung/Vervielfältigung/Verbreitung/öffentliche Zugänglichmachung von urheberrechtlich oder markenrechtlich geschütztem Material – die Veröffentlichung von sonstigen rechtswidrigen Inhalten Wir sind berechtigt, vom Nutzer erstellte Inhalte, die rechtswidrig und/oder missbräuchlich sind, unverzüglich zu löschen. Wir behalten uns bei Pflichtverletzungen durch den Nutzer vor, diesen ohne vorherige Ankündigung vom Dienst zu sperren und seine Daten spätestens 14 Tage nach der Sperrung zu löschen. Etwaige Schadensersatzansprüche von uns bleiben hierdurch</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Nutzungsrechte</p>
                <p>photoshooted wird vom Nutzer hochgeladene Daten niemals für mehr als die notwendigen, durch uns angebotenen Dienste benutzen oder an Dritte weitergeben. Alle Nutzungsrechte an den Bilddaten bleiben selbstverständlich beim Nutzer. photoshooted räumt dem Nutzer ein einfaches, nicht übertragbares oder lizensierbares Nutzungsrecht an dem Dienst photoshooted ein. photoshooted erlaubt dem Nutzer, den Dienst unter Einhaltung der gesetzlichen Bestimmungen und den Bestimmungen dieser Nutzungsbedingungen zu verwenden, um Inhalte zu speichern, zu veröffentlichen, zu übermitteln und mit Dritten zu teilen. Um photoshooted zu nutzen, ist es erforderlich, dass der Nutzer photoshooted die Rechte zur Bearbeitung und Verbreitung des von ihm hochgeladenen Bild- und ggf. Filmmaterials einräumt. Dies geschieht nur im Zusammenhang mit der technischen Umsetzung und der Nutzung des Dienstes photoshooted durch den Nutzer. Mit dem Einstellen von Inhalten erteilt der Nutzer photoshooted alle hierfür erforderlichen Nutzungsrechte. Mit der Speicherung von Inhalten auf photoshooted räumt der Nutzer ein einfaches, widerrufliches Nutzungsrecht für die Speicherung, Vervielfältigung, Bearbeitung und öffentliche Zugänglichmachung des Werkes ein. Die Einräumung dieser Nutzungsrechte erfolgt grundsätzlich unentgeltlich. Der Nutzer sichert zu, entweder Urheber der von ihm einzustellenden Werke oder im Besitz aller erforderlichen Nutzungs- und Verwertungsrechte für die Speicherung, Vervielfältigung und Veröffentlichung des Materials zu sein. Der Nutzer stellt photoshooted von jeglicher von ihm zu vertretenden Inanspruchnahme durch Dritte einschließlich der durch die Inanspruchnahme ausgelösten Kosten, insbesondere Kosten der Rechtsverfolgung, frei.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Verantwortlichkeit für Inhalte</p>
                <p>Die Verantwortung für alle Fotos, Dateien, Texte und sonstige Materialien („Inhalte“), die auf photoshooted gespeichert, veröffentlicht oder übermittelt werden, liegt ausschließlich und uneingeschränkt beim Nutzer. photoshooted kontrolliert die vom Nutzer eingestellten Inhalte grundsätzlich nicht. Wir übernehmen daher keine Gewähr für die Richtigkeit, Angemessenheit, Vollständigkeit und Qualität der Inhalte.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Laufzeit, Kündigung</p>
                <p>Der Nutzer kann den Vertrag jederzeit zum Ende des laufenden Abrechnungszeitraumes kündigen. Die Laufzeit des Vertrages ergibt sich aus unserer jeweils zum Vertragsschluss gültigen Preis- und Leistungsbeschreibung. Der Vertrag verlängert sich automatisch um die ursprüngliche Vertragslaufzeit, wenn er nicht binnen der jeweils in der Preis- und Leistungsbeschreibung angegebenen Frist gekündigt wird. Die Kündigung (mit Angabe der E-Mail-Adresse, mit welcher der Nutzer bei photoshooted angemeldet ist) kann neben der Möglichkeit zur Kündigung im Kundenmenü nach erfolgreichem Login auch per Postbrief an die folgende Adresse geschickt werden: photoshooted GmbH, Am Treptower Park 28 – 30, 12435 Berlin. Zur Überprüfung der rechtzeitigen Kündigung vor einer automatischen Verlängerung des Vertrages dient der Poststempel. Ein etwaiges Recht auf außerordentliche Kündigung bleibt unberührt. Ein wichtiger Grund, der uns zu einer außerordentlichen Kündigung berechtigt, liegt insbesondere dann vor, wenn der Nutzer den Dienst missbräuchlich in Anspruch genommen hat, mit einer fälligen Zahlung nach Erhalt einer Zahlungserinnerung oder Mahnung länger als 14 Werktage in Verzug gerät und/oder gesetzliche, behördliche oder gerichtliche Anforderungen ergeben, dass der Dienst photoshooted nicht länger aufrechterhalten werden kann.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Verfügbarkeit der Leistungen</p>
                <p>photoshooted gewährleistet eine Verfügbarkeit der Leistungen i.S.d Ziff. 2 Abs. 1 in Höhe von 95% im Jahresmittel. Von der Gewährleistung ausgeschlossen sind Leistungsmängel, die nicht von photoshooted zu vertreten sind.</p>
 
                <br />
                <p style={{fontWeight: 'bold'}}>Haftungsbeschränkung</p>
                <p>Wir haften bei Vorsatz oder grober Fahrlässigkeit für alle von uns verursachten Schäden unbeschränkt. Bei leichter Fahrlässigkeit haften wir im Fall der Verletzung des Lebens, des Körpers oder der Gesundheit unbeschränkt. Im Übrigen haften wir nur, soweit wir eine wesentliche Vertragspflicht verletzt haben. Als wesentliche Vertragspflichten werden dabei abstrakt solche Pflichten bezeichnet, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen darf. In diesen Fällen ist die Haftung auf den Ersatz des vorhersehbaren, typischerweise eintretenden Schadens beschränkt. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt. Der Nutzer ist für eine regelmäßige, also grundsätzlich tägliche, Sicherung seiner Daten nach dem Stand der Technik verantwortlich. Bei einem von uns verschuldeten Datenverlust haften wir ausschließlich für die Kosten der Rücksicherung der Daten von vorhandenen Sicherungskopien und für die Wiederherstellung der Daten, die auch bei einer ordnungsgemäß erfolgten Sicherung der Daten verloren gegangen wären. Der Nutzer ist für den Passwort-Schutz seiner Daten selbst verantwortlich. Insbesondere übernimmt photoshooted keine Haftung für die widerrechtliche Nutzung von Daten aufgrund mangelhaften oder unterbliebenen Passwortschutzes. Zwischen dem Kunden des Nutzers und photoshooted bestehen keinerlei Vertragsbeziehungen, daher übernimmt photoshooted auch keinerlei Haftung für illegale Screenshots oder den direkten Download des Vorschaubildes aus dem Quelltext der Webseite durch Kunden der Nutzer.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Datenschutz</p>
                <p>Aktuell werden von photoshooted ausdrücklich nur Server in der Bundesrepublik Deutschland benutzt. photoshooted behält es sich vor, auch Server außerhalb der Bundesrepublik Deutschland zu nutzen. Die für die Durchführung und Abwicklung von photoshooted erforderlichen personenbezogenen Daten des Nutzers werden nach Maßgabe der gesetzlichen Bestimmungen erhoben, verarbeitet und genutzt. Eine Weitergabe von personenbezogenen Daten an Dritte findet grundsätzlich nicht statt. Ausnahme ist die Abwicklung von Bezahlvorgängen und der automatisierte Versand von E-Mails an den Nutzer. Für die Abwicklung der Bezahlvorgänge ist eine Übermittlung personenbezogener Daten an Dritte (Zahlungsanbieter, Bankinstitute, Kreditkartenanbieter) zwingend erforderlich. Es werden jedoch nur die Daten übermittelt, die für die Durchführung der Bezahlvorgänge zwingend erforderlich sind. Nach Beendigung des Vertragsverhältnisses erfolgt eine Löschung der personenbezogenen Daten, soweit keine gesetzlichen Aufbewahrungspflichten bestehen. In diesen Fällen erfolgt eine Sperrung der Daten. Weitere Hinweise zum Datenschutz und zu Zweck, Art und Umfang der Erhebung, Verarbeitung und Nutzung personenbezogener Daten sind der Datenschutzerklärung zu entnehmen, die unter dem Link „Datenschutz“ jederzeit abrufbar ist.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Änderungen dieser Nutzungsbedingungen</p>
                <p>Wir behalten uns vor, Änderungen an diesen Nutzungsbedingungen vorzunehmen, um z.B. Anpassungen an geänderte rechtliche Vorschriften vorzunehmen oder neue Leistungen einzuführen. Der Nutzer wird über Änderungen an den Nutzungsbedingungen informiert und auf die Widerspruchsmöglichkeit und deren Frist hingewiesen. Wenn der Nutzer den Änderungen an den Nutzungsbedingungen widerspricht, hat photoshooted das Recht, das Vertragsverhältnis zum Ende des jeweiligen Abrechnungszeitraumes oder, sofern keine kostenpflichtigen Leistungen in Anspruch genommen werden, zum Zeitpunkt des geplanten Inkrafttretens der Änderungen zu kündigen und zu beenden.</p>
                <br />
                <p style={{fontWeight: 'bold'}}>Schlussbestimmungen</p>
                <p>Es gilt das Recht der Bundesrepublik Deutschland, wobei die Geltung des UN-Kaufrechts ausgeschlossen wird. Nimmt der Nutzer als Freiberufler, Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen die Leistungen von photoshooted in Anspruch, so ist der Sitz der photoshooted GmbH ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis. Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>

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

export default AGB
