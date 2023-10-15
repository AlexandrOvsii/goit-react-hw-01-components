// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

//=====================================

// const elem1 = React.createElement('span', {children: 'Привет'})

// const element = React.createElement(
//   'div',
//   {
//     name: 'Sasha',
//     lastname: 'Ovsiy',
//   },
//   elem1,
//   ' ',
//   'мир'
// );
// console.log(element);
//=====================================

const lastName = 'Ovsiy';

function Painting({ lastName, author, price }) {
  return (
    <div>
      <h2>{lastName}</h2>
      <h3>{author}</h3>
      <p>Цена {price} миллионов</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Painting lastName={lastName} author="Sasha" price={500} />
);
