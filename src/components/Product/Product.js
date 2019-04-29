import React from 'react';

let Product = props => {
  return (
    <React.Fragment>
      <h3>Name: {props.product.name}</h3>
      <h3>Price: {props.product.price}</h3>
    </React.Fragment>
  );
};

export default Product;
