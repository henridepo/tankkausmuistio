import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';
//import { doc, deleteDoc } from "firebase/firestore";

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

    //const deleteField = async () => {
    //await deleteDoc(doc(db, "user", "type"));
    //};
    /*    const deleteField = async () => {
        const FieldValue = firestore.FieldValue;
        const itemRef = firestore().collection('type').doc('jUVK0i8gYde60KgF1Pqw');                                
        const res = await itemRef.update(
        'jUVK0i8gYde60KgF1Pqw', FieldValue.delete() //'ELEMENT-NAME' OR Object.Field which equals to Parent Field Name.
    )};*/

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
                {props.types.map((type) => <div key={type}>{type}</div>)}
                <form onSubmit={handleTypeSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="type" required/>
                        <Button type="submit" primary>Lisää</Button>
                        </div>
                        <div className="delete">
                        <Button primary>Poista</Button>
                        </div>
                </form>
            </div>
        </div>
    );
}
//onClick={deleteField}
export default Settings;