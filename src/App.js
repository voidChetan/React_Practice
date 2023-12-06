import logo from './logo.svg';
import './App.css';
import Variables from './components/Variables';
import Functions from './components/Functions';
import ObjectUpdate from './components/ObjectUpdate';
import ArrayUpdate from './components/ArrayUpdate';
import HidenShow from './components/HidenShow';
import Style from './components/Style';
import Forms from './components/Forms';
import ForLoop from './components/ForLoop';
import MapOperator from './components/MapOperator';
import DyanamicStyleClass from './components/DyanamicStyleClass';
import GrossaryListApp from './components/task/GrossaryListApp';
import FromValidation from './components/FromValidation';
import HotelOrder from './components/task/HotelOrder';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import GetApiCall from './components/GetApiCall';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/hotelApp" >Hotel-App</Link> 
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/gorceryapp">Gorcery App</Link>
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/functions">Functions</Link>
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/Object-Update">Object-Update</Link>
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/style">Style</Link>
              </li>
              <li className="nav-item">
               <Link className='nav-link' to="/getAPI">Get-API</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<FromValidation></FromValidation>}>

          </Route>
          <Route path='/hotelApp' element={<HotelOrder></HotelOrder>}>

          </Route>
          <Route path='/gorceryapp' element={<GrossaryListApp>

          </GrossaryListApp>}></Route>
          <Route path='/getAPI' element={<GetApiCall></GetApiCall>}></Route>
          <Route path='/functions' element={<Functions></Functions>}>

          </Route>
          <Route path='/Object-Update' element={<ObjectUpdate>
            
          </ObjectUpdate>}></Route>
          <Route path='/style' element={<Style>
            
            </Style>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
