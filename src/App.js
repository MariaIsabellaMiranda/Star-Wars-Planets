import React from 'react';
import TableProvider from './context/TableProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <TableProvider>
      <Table />
    </TableProvider>
  );
}

export default App;
