import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  const { name, amount, id } = product;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <span className='font-weight-bold'>$ {amount}</span>
        </td>
        <td className='acciones'>
          <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>
            Edit
          </Link>
          <button type='button' className='btn btn-danger'>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
