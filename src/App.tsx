import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './Table';
import { Counter } from './Counter';
import { NumberGeneratorClass } from './NumberGeneratorClass';

function App() {

  return <>
    <NumberGeneratorClass pregeneratedCount={3} />
    <Counter />
    <Table columns={3} rows={5}></Table>
  </>
}

export default App;
