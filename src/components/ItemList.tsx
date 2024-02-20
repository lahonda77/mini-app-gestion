import React from 'react';

// type de l'item
interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Array<Item>; // liste les items
  onEditItem: (editedItem: Item) => void; // fonction pour modifier
  onDeleteItem: (id: number) => void; // fonction pour supprimer
}

// on definit le composant ItemList
const ItemList: React.FC<ItemListProps> = ({ items, onEditItem, onDeleteItem }) => {
  // la fonction est appelée lorsqu'on clique sur le bouton modifier
  const handleEditClick = (item: Item) => {
    const editedName = prompt('Modifier le nom de l\'item', item.name);
    if (editedName !== null && editedName !== item.name) {
      onEditItem({ ...item, name: editedName }); // ici l'appel de la fonction pour modifieri l'item
    }
  };

  // la fonction est appelée lorsqu'on clique sur le bouton supprimer
  const handleDeleteClick = (id: number) => {
    // et on a une demande de confirmation avant de le supprimer 
    if (window.confirm('Supprimer cet item?')) {
      onDeleteItem(id); // ici l'appel de la fonction pour supprimer l'item
    }
  };

  return (
    <div>
      <h2>Liste des items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <div className="inline-block-button">
              <button className='edit-button' onClick={() => handleEditClick(item)}>Modifier</button>
              <button className='delete-button' onClick={() => handleDeleteClick(item.id)}>Supprimer</button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
