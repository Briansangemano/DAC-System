export const ADD_CAREER = 'ADD_CAREER';
export const DELETE_CAREER = 'DELETE_CAREER';

export const addCareer = item => ({
  type: ADD_CAREER,
  product: item
});

export const deleteCareer = id => ({
  type: DELETE_CAREER,
  productId: id
});
