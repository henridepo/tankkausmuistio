import styles from './additem.module.scss';
import ItemForm from '../../components/itemform';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/uibuttons';

function AddItem(props) {
    return(
    <div className={styles.additem}>
        <h2>Uuden merkinnän lisääminen</h2>
        <Link to="/settings"><Button primary>+ Lisää ajoneuvo</ Button></Link>
        <ItemForm onItemSubmit={props.onItemSubmit} types={props.types}/>
    </div>
    );
}

export default AddItem;