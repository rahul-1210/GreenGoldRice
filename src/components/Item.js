import React from 'react';

import { useStateValue } from './Stateprovider';

function Item({ item }) {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: item,
    });
  };

  return (
    <div className="item__box">
      <img src={item.image} />
      <p>Rs. {item.price}</p>
      <p>{item.quantity}Kg</p>
      <p>{item.description}</p>
      <button onClick={addtoBasket} type="button" className="btn btn-dark">
        Add to Basket
      </button>
    </div>
  );
}

export default Item;
