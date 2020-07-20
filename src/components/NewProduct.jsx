import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { createProductAction } from '../actions/productsActions';
const NewProduct = ({ history }) => {
  //Local state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  //Dispatch
  const dispatch = useDispatch();
  const addProduct = (product) => dispatch(createProductAction(product));

  //Get into state
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  //onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    //Check form
    if (name.trim() === '' || amount <= 0) {
      return;
    }
    //Errors?

    //Create New Product
    addProduct({ name, amount });
    //Redirect
    history.push('/');
  };
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center mb-4 font-weight-bold'>
                Add new product
              </h2>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label>Product Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ej: Apple'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Product amount</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='$'
                    name='amount'
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                  Add
                </button>
              </form>
              {loading ? <p>Loading...</p> : null}
              {error ? (
                <p className='alert alert-danger p2 mt-4 text-center'>
                  An error occurred
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
