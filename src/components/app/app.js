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

const [data, setData] = useState([]);
const [typelist, setTypelist] = useState([]);

const user = useUser();

const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef.orderBy("paymentDate", "desc"), {initialData: [], idField: "id"});

const typeCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('type');
const { data: typeCollection } = useFirestoreCollectionData(typeCollectionRef.orderBy("type"), { initialData: []});

useEffect(() => {
  setData(itemCollection);
}, [itemCollection]);

useEffect(() => {
  const types = typeCollection.map(obj => obj.type);
  setTypelist(types);
  }, [typeCollection]);

const handleItemSubmit = (newitem) => {

  itemCollectionRef.doc(newitem.id).set(newitem);
}

const handleItemDelete = (id) => {
 itemCollectionRef.doc(id).delete();
}

const handleTypeSubmit = (newtype) => {
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
