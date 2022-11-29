import React from 'react';
import TableProvider from './context/TableProvider';
import Table from './components/Table';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  return (
    <TableProvider>
      <FilterBar />
      <Table />
    </TableProvider>
  );
}

export default App;
