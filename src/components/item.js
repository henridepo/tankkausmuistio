import styles from './item.module.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function Item(props) {

const locale = "fi-FI";
//Maksupäivän muotoilu vakiona props datalta tulleeseen arvoon tuoden toiminnallisuus ja lokaali-asetus
const paymentDate = new Date(props.data.paymentDate).toLocaleDateString(locale);
//Numeroformaatin vakiolle international muutoksen tuominen ja arvojen asettaminen sekä muotoilu
const numberFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR'});
//Annetaan amount arvolle numberFormat vakion muotoilu ja tuodaan propsista datan arvo
const amount = numberFormat.format(props.data.amount);
//Litrojen vakion propsien datan tuominen ja muotoilu
const litres = props.data.litres +"L";

let average;
let period;
if (props.data.periodStart && props.data.periodEnd) {
    const periodStart = new Date(props.data.periodStart);
    const periodEnd = new Date(props.data.periodEnd);
    period = periodStart.toLocaleDateString(locale) + " - " + periodEnd.toLocaleDateString(locale);
    const days = (periodEnd - periodStart) / (1000*60*60*24);
    average = numberFormat.format(props.data.amount / days * 30);
}


return (
    <div className={styles.item}>
        <div className={styles.item_data}>
            <div className={styles.item_type}>{props.data.type}</div>
            <div className={styles.item_amount}>{amount}</div>
            <div className={styles.item_litres}>{litres}</div>
            <div className={styles.item_date}>{paymentDate}</div>
            <div className={styles.item_timespan}>{period}</div>
            <div className={styles.item_receiver}>{props.data.receiver}</div>
            <div className={styles.item_average}>{ average ? average + "/kk" : ""}</div>
        </div>
        <div className={styles.item_edit}>
            <Link to={"/edit/"+ props.data.id}><NavigateNextIcon /></Link>
        </div>
    </div>
);
}

export default Item;