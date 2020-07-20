import React from 'react';
const Products = () => {
  return (
    <>
      <h2 className='text-center my-5'>Products List</h2>
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>$</th>
            <th scope='col'>Options</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Products;
