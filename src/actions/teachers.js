export const ADD_TEACHER = 'ADD_TEACHER';
export const DELETE_TEACHER = 'DELETE_TEACHER';

export const addTeacher = item => ({
  type: ADD_TEACHER,
  product: item
});

export const deleteTeacher = id => ({
  type: DELETE_TEACHER,
  productId: id
});
