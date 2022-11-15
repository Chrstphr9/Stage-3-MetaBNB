import './App.css';
import NFT from './components/NFT/NFT';
import Intro from './components/Intro/Intro';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/nft' element={<NFT />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
