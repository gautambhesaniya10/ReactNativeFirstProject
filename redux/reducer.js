// import {ADD_TO_CART} from './constant';

import {ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_TO_CART} from './constant';

const initialState = {
  productData: [],
};

const AddProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productData: [...state.productData, action.data],
      };
    case REMOVE_TO_CART:
      const Product = state?.productData?.filter(
        item => item?.name !== action?.data?.name,
      );
      return {
        ...state,
        productData: Product,
      };
    default:
      return state;
  }
};

export default AddProductReducer;

// const initialState = {
//   count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

// export default counterReducer;
