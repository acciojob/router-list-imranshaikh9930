import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

const ItemDetail = ({items}) => {
  const { id } = useParams(); // Access the id parameter using useParams
  const itemId = parseInt(id, 10); // Parse the ID as an integer
  const selectedItem = items.find((item) => item.id === itemId); // Assuming items is defined somewhere

  return (
    <div>
      <h1>Item {itemId}</h1>
      {selectedItem && <p>{selectedItem.description}</p>}
    </div>
  );
};

export default ItemDetail;
