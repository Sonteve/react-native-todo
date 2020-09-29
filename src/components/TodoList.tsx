import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
/* import CheckBox from '@react-native-community/checkbox'; */
import styled, {css} from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../modules';
import {ListItem, Icon, CheckBox} from 'react-native-elements';
import {toggleTodo, removeTodo, editTodo, modifyTodo} from '../modules/todo';
import {ModifyTodo, Todo} from '../interface/todo';
import TodoItem from './TodoItem';

interface Props {}

const TodoListBlock = styled.ScrollView`
  flex: 1;
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const {todos} = useSelector(({todo}: RootState) => todo);
  const onToggleCheck = (id: number) => {
    console.log('clicked');
    dispatch(toggleTodo(id));
  };
  const onRemoveTodo = (id: number) => {
    console.log('remove id', id);
    dispatch(removeTodo(id));
  };

  const onEditTodo = (id: number) => {
    dispatch(editTodo(id));
  };

  const onModifyTodo = (id: number, todo: string) => {
    dispatch(modifyTodo({id, todo}));
  };

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCheck={onToggleCheck}
          onRemoveTodo={onRemoveTodo}
          onEditTodo={onEditTodo}
          onModifyTodo={onModifyTodo}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
