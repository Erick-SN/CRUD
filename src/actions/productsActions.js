import axiosClient from '../config/axios';
import Swal from 'sweetalert2';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from '../types';

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

//Download products

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axiosClient.get('/products');
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      // console.log(error);
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: DOWNLOAD_PRODUCTS,
});

const getProductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});
