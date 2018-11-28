import initialState from '../initial-states/teachers';
import { GET_TEACHERS_PENDING, GET_TEACHERS_FULLFILED, GET_TEACHERS_REJECTED, ADD_TEACHER_PENDING, ADD_TEACHER_FULLFILED, ADD_TEACHER_REJECTED, DELETE_TEACHER } from '../actions/teachers';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEACHERS_PENDING:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case GET_TEACHERS_FULLFILED:
      return {
        ...state,
        error: '',
        isLoading: false,
        list: action.list
      };
    case GET_TEACHERS_REJECTED:
      return {
        ...state,
        error: action.err,
        isLoading: false
      };
    case ADD_TEACHER_PENDING:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case ADD_TEACHER_FULLFILED: 
      return {
        ...state,
        error: '',
        isLoading: false,
        list: [
          ...state.list,
          action.teacher
        ]
      };
    case ADD_TEACHER_REJECTED:
      return {
        ...state,
        error: action.errorMsg,
        isLoading: false
      };
    case DELETE_TEACHER: 
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.teacherId)
      };
    default:
      return state;
  }
};

export default reducer;
