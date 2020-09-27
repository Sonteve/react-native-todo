/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension';
import InputForm from './components/InputForm';
import styled from 'styled-components/native';
import TodoList from './components/TodoList';

const AppBlock = styled.View`
  flex: 1;
`;

const TodoAppTitle = styled.View``;

const TodoAppTitleText = styled.Text`
  font-size: 35px;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 30px;
  background: rgb(33, 150, 243);
  color: white;
  font-weight: bold;
`;

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <AppBlock>
        <TodoAppTitle>
          <TodoAppTitleText>Todo App</TodoAppTitleText>
        </TodoAppTitle>
        <InputForm />
        <TodoList />
      </AppBlock>
    </Provider>
  );
};

export default App;
