import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
  }

interface ItemFormProps {
  onAddItem: (item: Item) => void; // fonction pour ajouter un item
}

// on definit le composant ItemForm
const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  // on suit l'état de la valeur
  const [itemName, setItemName] = useState('');

  // la fonction est appelée lorsqu'on clique sur le bouton ajouter
  const handleAddItem = () => {
    // verifie que le champ n'est pas vide
    if (itemName.trim() !== '') {
      // creation de l'item avec in id unique basé sur la date actuelle
      const newItem: Item = {
        id: Date.now(),
        name: itemName,
      };

      onAddItem(newItem); // ici l'appel de la fonction pour ajouter l'item
      setItemName(''); // on reinitialise l'état local pour le nom de l'item
    }
  };

  return (
    <div>
      <h2>Ajouter un item</h2>
      <input
        type="text"
        placeholder="Nom de l'item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button className='add' onClick={handleAddItem}>Ajouter</button>
    </div>
  );
};

export default ItemForm;
