import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const history = createMemoryHistory();

function App() {
  return (
    <BrowserRouter navigator={history} location={history.location} >
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
