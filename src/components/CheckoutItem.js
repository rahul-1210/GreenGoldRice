import React from 'react';
import { useStateValue } from './Stateprovider';

function CheckoutItem({ item }) {
  const [{ basket }, dispatch] = useStateValue();

  const deleteFromBasket = () => {
    dispatch({
      type: 'DELETE_FROM_BASKET',
      item: item,
    });
  };

  return (
    <div className="checkoutitem__box">
      <img src={item.image} />
      <p>Rs. {item.price}</p>
      <p>{item.quantity}Kg</p>
      <p>{item.description}</p>
      <button onClick={deleteFromBasket} type="button" className="btn btn-dark">
        Remove from Basket
      </button>
    </div>
  );
}

export default CheckoutItem;