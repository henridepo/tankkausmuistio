import { Link } from 'react-router-dom';
import Item from '../../components/item.js';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

function Items(props) {

const items = props.data.map((item) => <Item key={item.id} data={item} />);

    return (
        <ButtonContainer>
        <div className="items">
            { items }
            <Link to="/add"><FloatingButton primary>+ Lisää</ FloatingButton></Link>
        </div>
        </ButtonContainer>
    );
}

export default Items;