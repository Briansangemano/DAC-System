export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export const addStudent = item => ({
  type: ADD_STUDENT,
  product: item
});

export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  productId: id
});
