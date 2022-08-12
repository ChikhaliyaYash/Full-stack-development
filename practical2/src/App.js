import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Product from './pages/Product';
import Team  from './pages/Team';
import Messages  from './pages/Messages';
import Support from './pages/Support';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/report' element={<Report/>} />
          <Route exact path='/product' element={<Product/>} />
          <Route exact path='/Team' element={<Team/>} />
          <Route exact path='/Messages' element={<Messages/>} />
          <Route exact path='/Support' element={<Support/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
