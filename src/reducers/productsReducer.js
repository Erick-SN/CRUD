import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false,
  delete: null,
  edit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case DOWNLOAD_PRODUCTS:
      return { ...state, loading: true };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };

    case ADD_PRODUCT_ERROR:
    case EDIT_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };

    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };

    case DELETE_PRODUCT:
      return { ...state, delete: action.payload };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.delete,
        ),
        delete: null,
      };

    case EDIT_PRODUCT:
      return { ...state, edit: action.payload };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        edit: null,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product,
        ),
      };

    default:
      return state;
  }
}
