
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
import GetApi2 from './components/GetApi2';
import PostApi from './components/PostApi';
import Employee from './components/Employee';
import Attendance from './components/Attendance';

import { createContext } from "react";
import DepedentDropdown from './components/logical/DepedentDropdown';
import UseEffect from './components/hooks/UseEffect';

const Appcontext = createContext();

function App() { 
  let myContext = {
    appName: 'React b-21',
    duration: '4 Months'
  }; 
  return (
    <div className="App">
      <Appcontext.Provider value={myContext}>

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
                <li className="nav-item">
                  <Link className='nav-link' to="/getAPI2">Get-API-2</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/postAPI">Post-API</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/employee">Employee</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/MapOperator">MapOperator</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/attendance">Attendance</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/DepedentDropdown">Depedent Dropdown</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/UseEffect">UseEffect</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<FromValidation></FromValidation>}> </Route>
            <Route path='/hotelApp' element={<HotelOrder></HotelOrder>}> </Route>
            <Route path='/gorceryapp' element={<GrossaryListApp> </GrossaryListApp>}></Route>
            <Route path='/getAPI' element={<GetApiCall></GetApiCall>}></Route>
            <Route path='/getAPI2' element={<GetApi2></GetApi2>}></Route>
            <Route path='/DepedentDropdown' element={<DepedentDropdown></DepedentDropdown>}></Route>
            <Route path='/employee' element={<Employee></Employee>}></Route>
            <Route path='/postAPI' element={<PostApi></PostApi>}></Route>
            <Route path='/MapOperator' element={<MapOperator></MapOperator>}></Route>
            <Route path='/functions' element={<Functions></Functions>}> </Route>
            <Route path='/attendance' element={<Attendance></Attendance>}> </Route>
            <Route path='/UseEffect' element={<UseEffect></UseEffect>}> </Route>
            <Route path='/Object-Update' element={<ObjectUpdate>
              

            </ObjectUpdate>}></Route>
            <Route path='/style' element={<Style>

            </Style>}></Route>
          </Routes>

        </BrowserRouter>

      </Appcontext.Provider>
    </div>
  );
} 
export default App; 
export {Appcontext};
