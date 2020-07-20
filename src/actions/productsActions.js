import axiosClient from '../config/axios';
import Swal from 'sweetalert2';
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

//Create new product

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      await axiosClient.post('/products', product);
      dispatch(addProductSuccess(product));
      //Alert
      Swal.fire('Correct', 'Product was added successfully', 'success');
    } catch (error) {
      //   console.log(error);
      dispatch(addProductError(true));
      //Alert
      Swal.fire({
        icon: 'error',
        title: 'An error occurred',
        text: 'Something went wrong, try again',
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});
