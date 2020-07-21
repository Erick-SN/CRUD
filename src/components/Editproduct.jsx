import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProductRealAction } from '../actions/productsActions';
const EditProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //Local State
  const [newProduct, setNewProduct] = useState({
    name: '',
    amount: '',
  });

  //Get into the global state in order to get the product
  const editProduct = useSelector((state) => state.products.edit);
  useEffect(() => {
    setNewProduct(editProduct);
  }, [editProduct]);

  //Get the values from input fields
  const onChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  const { name, amount } = editProduct;

  //Edit product function
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductRealAction(newProduct));
    history.push('/');
  };

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center mb-4 font-weight-bold'>
                Edit product
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
                    onChange={onChange}
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
                    onChange={onChange}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
