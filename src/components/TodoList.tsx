import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
/* import CheckBox from '@react-native-community/checkbox'; */
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../modules';
import {ListItem, Icon, CheckBox} from 'react-native-elements';
import {toggleTodo, removeTodo} from '../modules/todo';

interface Props {}

const TodoListBlock = styled.ScrollView`
  flex: 1;
`;

const ItemCheck = styled.TouchableOpacity``;

const ItemDesc = styled.TouchableOpacity``;

const ItemBlock = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <ListItem key={todo.id} bottomDivider>
          <ListItem.Content>
            <ItemBlock>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  onPress={() => onToggleCheck(todo.id)}
                  checked={todo.checked}
                  checkedIcon={
                    <Image source={require('../images/check.png')} />
                  }
                  uncheckedIcon={
                    <Image source={require('../images/check_blank.png')} />
                  }
                />
                <TouchableOpacity onPress={() => onToggleCheck(todo.id)}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: todo.checked ? 'gray' : 'black',
                    }}>
                    {todo.todo}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: 30}}>
                <TouchableOpacity onPress={() => onRemoveTodo(todo.id)}>
                  <Image source={require('../images/delete.png')} />
                </TouchableOpacity>
              </View>
            </ItemBlock>
          </ListItem.Content>
        </ListItem>
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
