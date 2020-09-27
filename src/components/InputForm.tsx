import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../modules/todo';
import {Button} from 'react-native-elements';

const StyledInput = styled.TextInput`
  border: 1px solid black;
  flex: 1;
`;

const InputFormBlock = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0 15px;
`;

const StyledInputView = styled.View`
  flex: 1;
  height: 100%;
`;
const StyledButtonView = styled.TouchableOpacity`
  height: 100%;
  width: 75px;
  /* background: lightblue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.Button`
  padding: 0 10px;
  width: 100%;
`;

const InputForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  const onChangeInput = useCallback((e) => {
    setInput(e);
  }, []);
  const onClickButton = useCallback(() => {
    if (input === '') return;
    dispatch(addTodo(input));
    setInput('');
    /* console.log(input); */
  }, [input]);

  useEffect(() => {
    console.log('hello');
  }, []);
  return (
    <InputFormBlock>
      <StyledInputView>
        <StyledInput
          value={input}
          onChangeText={onChangeInput}
          placeholder="할 일을 입력해주세요."
        />
      </StyledInputView>
      <Button title="등록" onPress={onClickButton} />
    </InputFormBlock>
  );
};

export default InputForm;
