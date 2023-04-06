import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

// Sai Teja's Code 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
