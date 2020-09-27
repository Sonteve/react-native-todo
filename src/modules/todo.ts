import {ActionType, createAction, createReducer} from 'typesafe-actions';
import {Todo} from '../interface/todo';
import produce from 'immer';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const CHECK_TODO = 'CHECK_TODO';

export const addTodo = createAction(ADD_TODO)<string>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
export const toggleTodo = createAction(CHECK_TODO)<number>();

type TodoActions = ActionType<
  typeof addTodo | typeof removeTodo | typeof toggleTodo
>;

interface TodoState {
  todos: Todo[];
}

let id = 2;

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      todo: '밥 먹기',
      checked: true,
    },
  ],
};

const todo = createReducer<TodoState, TodoActions>(initialState, {
  [ADD_TODO]: (state, action) =>
    produce(state, (draft) => {
      const todo = {
        id: id++,
        todo: action.payload,
        checked: false,
      };
      draft.todos.push(todo);
    }),
  [REMOVE_TODO]: (state, action) =>
    produce(state, (draft) => {
      console.log(action.payload);
      draft.todos = draft.todos.filter((todo) => todo.id !== action.payload);
    }),
  [CHECK_TODO]: (state, action) =>
    produce(state, (draft) => {
      draft.todos = draft.todos.map((todo) =>
        todo.id === action.payload ? {...todo, checked: !todo.checked} : todo,
      );
    }),
});

export default todo;