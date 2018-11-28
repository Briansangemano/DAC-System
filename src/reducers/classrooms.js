import initialState from '../initial-states/classrooms';
import { ADD_CLASSROOM, DELETE_CLASSROOM } from '../actions/classrooms';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASSROOM:
      return {
        ...state,
        list: [
          ...state.list,
          action.product
        ]
      };
    case DELETE_CLASSROOM:
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
