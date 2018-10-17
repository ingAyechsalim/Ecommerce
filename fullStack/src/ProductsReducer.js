import { combineReducers } from "redux";
const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS_LIST":
      return (state = action.products);
    case "ADD_PRODUCT":
      return state.concat(action.newProduct);
    case "EDIT_PRODUCT":
      return state.map(
        e =>
          e._id === action.editedProduct._id ? (e = action.editedProduct) : e
      );
    case "REMOVE_PRODUCT":
      return state.filter(e => e._id !== action.id);
    default:
      return state;
  }
};

let Reducers = combineReducers({
  ProductsReducer
});
export default Reducers;
