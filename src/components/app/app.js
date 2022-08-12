import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import AddItem from '../../routes/additem';
import EditItem from '../../routes/edititem';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {

//Esitellään useState-hook, johon käyttäjän lomakkeelle syöttämä tieto tallennetaan. Oletuksena tyhjä taulukko.
const [data, setData] = useState([]);
const [typelist, setTypelist] = useState([]);

const user = useUser();

//Firestore kannan liittäminen vakioon - uusi merkintä käyttäjän tietoihin sidottuna ja tiedon lajitteleminen
const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("paymentDate", "desc"), {initialData: [], idField: "id"});

//Firestore kannan liittäminen vakioon - uusi tyyppi käyttäjän tietoihin sidottuna ja tiedon lajitteleminen
const typeCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('type');
const { data: typeCollection } = useFirestoreCollectionData(typeCollectionRef.orderBy("type"), { initialData: []});

//Funktio määrittää datan arvoksi itemcollectionin arvon. Arvon muuttuessa muuttaa arvon state-muuttujaan.
useEffect(() => {
  setData(itemCollection);
}, [itemCollection]);

useEffect(() => {
  const types = typeCollection.map(obj => obj.type);
  setTypelist(types);
  }, [typeCollection]);

const handleItemSubmit = (newitem) => {
  //Firestoren kannan ja lisättävän merkinnän liittäminen submit-käsittelijään
  itemCollectionRef.doc(newitem.id).set(newitem);
}

const handleItemDelete = (id) => {
  //Firestoren kannasta poistaminen merkinnän poistaminen
 itemCollectionRef.doc(id).delete();
}

const handleTypeSubmit = (newtype) => {
  //Firestoren kannan ja lisättävän tyyppi-merkinnän liittäminen submit-käsittelijään
typeCollectionRef.doc().set({type: newtype});
}

  return (
    <ButtonAppContainer>
    <div className={styles.app}>
    <Router>
        <Header />
        <Content>
            <Routes>
          <Route exact path="/"
          element={<Items data={data} />}>
         </Route>
         <Route exact path="/stats"
         element={<Stats data={data} />}>
           </Route>
           <Route exact path="/settings"
           element={<Settings types={typelist} onTypeSubmit={handleTypeSubmit} />}>
           </Route>
           <Route exact path="/add"
             element={<AddItem onItemSubmit={handleItemSubmit} types={typelist}/>}>
           </Route>
           <Route exact path="/edit/:id"
             element={<EditItem onItemSubmit={handleItemSubmit} data={data} types={typelist} onItemDelete={handleItemDelete} />}>
           </Route>
           </Routes>
       </Content>
        <Menu />
        </Router>
    </div>
    </ButtonAppContainer>
  );
}

export default App;
