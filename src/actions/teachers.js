import { post } from '../helpers/api';
import { get } from '../helpers/api';

export const GET_TEACHERS_PENDING = 'GET_TEACHERS_PENDING';
export const GET_TEACHERS_FULLFILED = 'GET_TEACHERS_FULLFILED';
export const GET_TEACHERS_REJECTED = 'GET_TEACHERS_REJECTED';
export const ADD_TEACHER_PENDING = 'ADD_TEACHER_PENDING';
export const ADD_TEACHER_FULLFILED = 'ADD_TEACHER_FULLFILED';
export const ADD_TEACHER_REJECTED = 'ADD_TEACHER_REJECTED';
export const DELETE_TEACHER = 'DELETE_TEACHER';

export const getTeachersThunk = () => dispatch => {
  dispatch(
    {
      type: GET_TEACHERS_PENDING
    }
  )
  get('/teachers')
  .then(list => {
    dispatch(
      {
        type: GET_TEACHERS_FULLFILED,
        list
      }
    )
  })
  .catch(err => {
    dispatch(
      {
        type: GET_TEACHERS_REJECTED,
        err
      }
    )
  })
};

export const addTeacherThunk = item => dispatch => {
  dispatch(
    {
      type: ADD_TEACHER_PENDING
    }
  )
  post('/teachers', item)
  .then(() => {
    dispatch(
      {
        type: ADD_TEACHER_FULLFILED,
        teacher: item
      }
    )
  })
  .catch(errMsg => {
    dispatch(
      {
        type: ADD_TEACHER_REJECTED,
        errorMsg: 'No se pudo agregar el item'
      }
    )
  })
};

export const deleteTeacher = id => ({
  type: DELETE_TEACHER,
  teacherId: id
});