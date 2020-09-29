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
import {toggleTodo, removeTodo, editTodo} from '../modules/todo';
import {ModifyTodo} from '../interface/todo';

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

const EditForm = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  border: 1px solid black;
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

  /* const onModifyTodo = (item:ModifyTodo) => {
    dispatch(modifyTodo(item));
  } */

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <ListItem key={todo.id} bottomDivider>
          <ListItem.Content>
            <ItemBlock>
              {todo.isEdit ? (
                <EditForm>
                  <StyledTextInput />
                  <TouchableOpacity>
                    <Text>적용</Text>
                  </TouchableOpacity>
                </EditForm>
              ) : (
                <>
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
                      <TodoText checked={todo.checked ? true : false}>
                        {todo.todo}
                      </TodoText>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginLeft: 30}}>
                    <TouchableOpacity onPress={() => onEditTodo(todo.id)}>
                      <Text>수정</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginLeft: 30}}>
                    <TouchableOpacity onPress={() => onRemoveTodo(todo.id)}>
                      <Image source={require('../images/delete.png')} />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </ItemBlock>
          </ListItem.Content>
        </ListItem>
      ))}
    </TodoListBlock>
  );
};

interface SCprops {
  checked?: boolean;
}

const TodoText = styled.Text<SCprops>`
  font-size: 30px;
  color: black;
  ${(props) =>
    props.checked &&
    css`
      color: gray;
      text-decoration: line-through;
    `}
`;

export default TodoList;
