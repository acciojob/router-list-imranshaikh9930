// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
// Dummy data for items
const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];

// ItemList component to display the list of items
const ItemList = () => (
  <div>
    <h2>Item List</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <NavLink to={`/items/${item.id}`}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);



// App component with React Router
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/items/:id" element={<ItemDetail items={items} />} />
    </Routes>
  </Router>
);

export default App;
