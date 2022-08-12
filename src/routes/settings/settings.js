import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';
import flaticon from './images/flaticon.png';

function Settings(props) {

    const user = useUser();
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();

    }

    const handleTypeSubmit = (event) => {
       event.preventDefault();
       const newtype = event.target.elements.type.value;
       props.onTypeSubmit(newtype);
       event.target.elements.type.value = "";
    }

    return (
        <div className={styles.settings}>
            <h2>Asetukset</h2>

            <h3>Profiili</h3>

            <div className={styles.settings_profile}>
                <div className={styles.settings_user}>
                    <div><img src={user.data.photoURL} alt="" /></div>
                    <div>{user.data.displayName}<br/>{user.data.email}</div>
                </div>
                <div>
                <Button primary onClick={signOut}>Kirjaudu ulos</Button>
                </div>
                </div>

            <br />
            <h3>Ajoneuvot</h3>
                <div className={styles.settings_types}>
                <select>{props.types.map((typ, type) => 
                  <option key={type}>{typ}</option>)}
                </select>
                <form onSubmit={handleTypeSubmit}>
                <div className={styles.typeform}>
                <input type="text" name="type" required/>
                <Button type="submit" primary >Lisää</Button>
                </div>
                </form>
            </div>
            <div className={styles.type_row}/>
            <div className={styles.text_icons}>Icons:</div>
            <div className={styles.icons}>
            <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer"><img src={flaticon} alt="flaticon"/></a></div>
            
        </div>

    );
}

export default Settings;