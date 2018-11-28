export const ADD_SUBJECT = 'ADD_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';

export const addSubject = item => ({
  type: ADD_SUBJECT,
  product: item
});

export const deleteSubject = id => ({
  type: DELETE_SUBJECT,
  productId: id
});
