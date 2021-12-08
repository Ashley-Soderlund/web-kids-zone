import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Homepage from './components/Homepage';
import Places from './components/Places';
import Animals from './components/Animals';
import Shapes from './components/Shapes';
import Count from './components/Count';
import ABCs from './components/ABCs';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename="/web-kids-zone">
        <Routes>
          <Route exact path="/" element={ <Homepage /> } />
          <Route exact path="/places" element={ <Places/>}/>
          <Route exact path="/shapes" element={ <Shapes/>}/>
          <Route exact path="/count" element={ <Count/>}/>
          <Route exact path="/abc" element={ <ABCs/>}/>
          <Route exact path="/animals" element={ <Animals/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;