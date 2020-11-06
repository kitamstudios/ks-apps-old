import { Reducer } from 'redux';
import * as T from './contracts';
import { TodoActionTypes } from './actions';

export const initialState: T.LandingState = {
  todos: [],
};

const reducer: Reducer<T.LandingState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      } as T.LandingState;
    }
    case TodoActionTypes.TOGGLE_TODO: {
      return {
        todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)),
      } as T.LandingState;
    }
    default: {
      return state;
    }
  }
};

export { reducer as todosReducer };
