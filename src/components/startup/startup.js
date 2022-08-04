import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import React from 'react';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

function Startup (props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        window.setTimeout(function(){window.location.reload()},1250);
    }

    return (
        <div className={styles.startup}>
            <div><h1>Tankkausmuistio</h1></div>
            <div><center><h4>Tervetuloa käyttämään tankkausmuistiota! <br />
                Kirjaa tankkauksesi ja seuraa kulutustasi.</h4><br /><br />
                Sinun tulee kirjautua sisään Google-tunnuksillasi
                päästäksesi käyttämään sovellusta ja saat tankkauksien merkinnät pysymään muistissa.<br /><br />
                Huom. ensimmäisellä kirjautumiskerralla käy lisäämässä ajoneuvosi asetuksista.
                <i>(Esittely alla, katso kuvat.)</i>
            </center></div>
            <Button onClick={signIn} primary>Kirjaudu sisään</Button>
            <div></div>
            <div></div>
            <div></div>
            <div className="images">
            <img src={img1} alt="Etusivu" />
                <p><i>
                Etusivun esittely.
                </i></p>
            <img src={img2} alt="Muokkaus" />
                <p><i>
                Muokkauksen/merkinnän esittely.
                </i></p>
            <img src={img3} alt="Seuranta" />
                <p><i>
                Tankkausten statistiikoiden esittely.
                </i></p>
            </div>
            <br />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <br />
        </div>
    );
}

export default Startup;