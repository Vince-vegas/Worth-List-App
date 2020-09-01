import React from 'react';
import { GlobalStyled } from './Styled/GlobalStyled';
import TodosProvider from './TodoContext/Context';
import TodosPage from './Page/TodosPage';

const App = () => {
  return (
    <>
      <GlobalStyled />
      <TodosProvider>
        <TodosPage />
      </TodosProvider>
    </>
  );
};

export default App;
