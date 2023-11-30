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
 
function App() {
  return (
    <div className="App">
      <h4>This Is Parent Page</h4>
      <div>
        {/* <Variables/> */}
        {/* <Functions/> */}
        {/* <ObjectUpdate/> */}
        {/* <ArrayUpdate/>  */}
        {/* <HidenShow/> */}
        {/* <Style/> */}
        {/* <Forms/> */}
        {/* <ForLoop/> */}
        {/* <MapOperator/> */}
        {/* <DyanamicStyleClass/> */}
        {/* <GrossaryListApp/> */}
        <FromValidation/>
      </div>
    </div>
  );
}

export default App;
