import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Todo} from '../interface/todo';
import {ListItem, CheckBox} from 'react-native-elements';
import styled, {css} from 'styled-components/native';

interface Props {
  todo: Todo;
  onToggleCheck: (id: number) => void;
  onRemoveTodo: (id: number) => void;
  onEditTodo: (id: number) => void;
  onModifyTodo: (id: number, todo: string) => void;
}

interface SCprops {
  checked?: boolean;
}

const TodoItem = ({
  todo,
  onToggleCheck,
  onRemoveTodo,
  onEditTodo,
  onModifyTodo,
}: Props) => {
  const [input, setInput] = useState<string>(todo.todo);
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ItemBlock>
          {todo.isEdit ? (
            <EditForm>
              <StyledTextInput
                value={input}
                onChangeText={(text) => setInput(text)}
              />
              <TouchableOpacity onPress={() => onModifyTodo(todo.id, input)}>
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
  );
};

export default TodoItem;

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
