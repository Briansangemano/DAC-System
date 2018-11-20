import initialState from '../initial-states/teachers';
import { ADD_TEACHER, DELETE_TEACHER } from '../actions/teachers';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
      };
    case DELETE_TEACHER:
      return {
        ...state,
        list: state.list.filter(
          item => item.id !== action.productId
        )
      };
    default:
      return state;
  }
};

export default reducer;
