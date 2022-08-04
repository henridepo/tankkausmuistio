import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

const navigate = useNavigate();

const submit = () => {
    let storedvalues = Object.assign({}, values);
    storedvalues.amount = parseFloat(storedvalues.amount);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onItemSubmit(storedvalues);
    navigate("/");
};

const initialState = props.data ? props.data : {
    type: props.types ? props.types[0] : "",
    amount: 0,
    litres: 0,
    paymentDate: new Date().toISOString().substring(0,10),
    periodStart: "",
    periodEnd: "",
    receiver: ""
};

const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

const handleCancel = (event) => {
    event.preventDefault();
    navigate(-1);
}

const handleDelete = (event) => {
    event.preventDefault();
    props.onItemDelete(values.id);
    navigate("/");
}

 return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>

              <div className={styles.form_row}>
                  <div>
                    <label htmlFor="type"></label>
                    <select name="type" onChange={handleChange} value={values.type} required>
                      { props.types.map( (type) => <option key={type} value={type}>{type}</option> ) }
                      </select>
                      </div>
                  </div>
            
                  <div className={styles.form_row}>
                      <div>
                          <label htmlFor="amount">Summa</label>
                          <input type="number" name="amount" step="0.01" onChange={handleChange} value={values.amount} required/>
                      </div>
                      <div>
                          <label htmlFor="litres">Litrat</label>
                          <input type="number" name="litres" onChange={handleChange} value={values.litres} required/>
                      </div>
                      </div>
                      <div className={styles.form_row}>
                      <div>
                          <label htmlFor="paymentDate">Tankkauspäivä</label>
                          <input type="date" name="paymentDate" onChange={handleChange} value={values.paymentDate} />
                      </div>
                      </div>
                      
                      <div className={styles.form_row}>
                      <div>
                          <label htmlFor="receiver">Huoltoasema</label>
                          <input type="text" name="receiver" onChange={handleChange} value={values.receiver} required/>
                      </div>
                      </div>
                      <div className={styles.form_row}>
                      <div>
                        <Button onClick={handleCancel}>PERUUTA</Button>
                      </div>
                      <div>
                        <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ" }</Button>
                      </div>
                        </div>
                        { props.onItemDelete ?
                        <div className={styles.form_row}>
                      <div>
                        <Button onClick={handleDelete}>POISTA</Button>
                      </div>
                      <div></div>
                      </div> : "" }
            </div>
        </form>
    </div>
 );   
}
                     /* <div className={styles.form_row}>
                      <div>
                          <label htmlFor="periodStart">Laskutuskauden alku</label>
                          <input type="date" name="periodStart" onChange={handleChange} value={values.periodStart} />
                      </div>
                      <div>
                          <label htmlFor="periodEnd">Laskutuskauden loppu</label>
                          <input type="date" name="periodEnd" onChange={handleChange} value={values.periodEnd} />
                      </div>
                      </div>*/
export default ItemForm;