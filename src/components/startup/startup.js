import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  'src/images/1.png',
  'src/images/2.png',
  'src/images/3.png'
];
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

function Startup (props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    return (
        <div className={styles.startup}>
            <h1>Tankkausmuistio</h1>
            <div><center>Tervetuloa käyttämään tankkausmuistiota! <br />
                Kirjaa tankkauksesi ja seuraa kulutustasi.<br />
                Sinun tulee kirjautua sisään Google-tunnuksillasi, 
                jotta pääset käyttämään sovellusta ja tankkauksesi pysyvät muistissa.
            </center></div>
            <Button onClick={signIn} primary>Kirjaudu sisään</Button>
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
        </div>
    );
}

export default Startup;