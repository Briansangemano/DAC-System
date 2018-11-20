export const ADD_CLASSROOM = 'ADD_CLASSROOM';
export const DELETE_CLASSROOM = 'DELETE_CLASSROOM';

export const addClassroom = item => ({
  type: ADD_CLASSROOM,
  product: item
});

export const deleteClassroom = id => ({
  type: DELETE_CLASSROOM,
  productId: id
});
