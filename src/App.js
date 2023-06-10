// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';
import RegisterPage from './Component/RegisterPage';
import LoginPage from './Component/lLoginPage';
import HomePage from './Component/HomePage.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RegisterPage />
        <hr />
        <LoginPage />
        <hr />
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
