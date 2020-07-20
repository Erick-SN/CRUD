import React from 'react';
const NewProduct = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center mb-4 font-weight-bold'>
                Add new product
              </h2>
              <form>
                <div className='form-group'>
                  <label>Product Name</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ej: Apple'
                    name='name'
                  />
                </div>
                <div className='form-group'>
                  <label>Product amount</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='$'
                    name='amount'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
