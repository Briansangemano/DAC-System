import initialState from '../initial-states/students';
import { ADD_STUDENT, DELETE_STUDENT } from '../actions/students';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
      };
    case DELETE_STUDENT:
      return {
        ...state,
        list: state.list.filter(
          item => item.id !== action.productId
        )
      };
    default:
      return state
  }
};

export default reducer;
