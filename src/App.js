import './App.css';
import React, {useState} from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Content searchTerm={searchTerm} />
    </>
  );
}

export default App;
