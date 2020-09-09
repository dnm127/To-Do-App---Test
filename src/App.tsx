import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './component/NewTask';
import TodoList from './component/TodoList';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './redux/reducer/reducer';
import { Container } from './common/style';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Container>
        <NewTask/>
        <TodoList/>
      </Container>
    </Provider>
  );
}

export default App;
