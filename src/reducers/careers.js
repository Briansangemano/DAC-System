import initialState from '../initial-states/careers';
import { ADD_CAREER, DELETE_CAREER } from '../actions/careers';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAREER:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
      };
    case DELETE_CAREER:
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
