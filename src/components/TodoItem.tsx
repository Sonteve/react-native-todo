import React from 'react';
import {Text, View} from 'react-native';
import {Todo} from '../interface/todo';
interface Props {
  todo: Todo;
}
const TodoItem = ({todo}: Props) => {
  return (
    <View>
      <Text>{todo.todo}</Text>
      <Text>X</Text>
    </View>
  );
};

export default TodoItem;
