import {CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE} from '../ActionType';
import generateUuid from '../../Utils/generateUuid';

export const createNote = payload => dispatch => {
  const uuid = generateUuid();
  return dispatch({type: CREATE_NOTE, payload: {data: payload, id: uuid}});
};

export const updateNote = payload => dispatch => {
  return dispatch({
    type: UPDATE_NOTE,
    payload: {
      data: {title: payload.title, body: payload.body},
      id: payload.id,
    },
  });
};

export const deleteNote = payload => dispatch => {
  delete payload.post[payload.id];
  return dispatch({type: DELETE_NOTE, payload: payload.post});
};
