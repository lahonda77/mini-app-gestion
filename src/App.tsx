import React, { useState } from 'react';
import './App.css';

import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

interface Item {
  id: number;
  name: string;
}

// on definit le composant 'APP'
const App: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>([
    { id: 1, name: 'test1' }, //test de début pour vérifier le fonctionnement
    { id: 2, name: 'test2' },
  ]);

  // fonction appelée lorsqu'un item est ajouter
  const handleAddItem = (newItem: Item) => {
    // maj de la liste qui ajoue donc le nouvel item
    setItems([...items, newItem]);
  };

  // fonction appelée lorsqu'un item est modifié
  const handleEditItem = (editedItem: Item) => {
    // maj de la liste en remplaçant l'item modifié
    const updatedItems = items.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setItems(updatedItems);
  };

  // fonction appelée lorsqu'un item est supprimé
  const handleDeleteItem = (id: number) => {
    // maj de la liste en supprimant l'item avec l'id
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className='container'>
      <h1 className='inline-block'>Mini-Application de Gestion TS</h1>
      <div className="form">
        <div className="add-item">
          <ItemForm onAddItem={handleAddItem} />
        </div>
        <div className="list-item">
          <ItemList items={items} onEditItem={handleEditItem} onDeleteItem={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
};



/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
