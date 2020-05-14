import {CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE} from '../ActionType';

const initialState = {
  mobile: 0,
  test: 'testing',
  userNotes: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      return {
        ...state,
        userNotes: {
          ...state.userNotes,
          [action.payload.id]: action.payload.data,
        },
      };
    }
    case DELETE_NOTE: {
      return {...state, userNotes: {...action.payload}};
    }
    case UPDATE_NOTE: {
      return {
        ...state,
        userNotes: {
          ...state.userNotes,
          [action.payload.id]: {...action.payload.data},
        },
      };
    }
    default: {
      return state;
    }
  }
};
