import initialState from '../initial-states/subjects';
import { ADD_SUBJECT, DELETE_SUBJECT } from '../actions/subjects';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
      };
    case DELETE_SUBJECT:
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
