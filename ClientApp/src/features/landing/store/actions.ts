import { action } from 'typesafe-actions';

export enum TodoActionTypes {
  ADD_TODO = '@@appSettings/ADD_TODO',
  TOGGLE_TODO = '@@appSettings/TOGGLE_TODO',
}

let nextTodoId = 0;
export const addTodo = (text: string) => action(TodoActionTypes.ADD_TODO, { id: nextTodoId++, text });
export const toggleTodo = (id: number) => action(TodoActionTypes.TOGGLE_TODO, id);
