import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Moon, Mars, Europa, Titan, Commander, Pilot, MissionSpecialist, FlightEngineer, LaunchVehicle, SpacePort, SpaceCapsule} from './Pages/index'
import { GlobalStyles } from "./StyledComponents/GlobalStyles";
function App() {
  return (
    <div className="App">
      <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/home' element= {<Home/>}/>

          <Route path='/moon' element= {<Moon/>}/>
          <Route path='/mars' element= {<Mars/>}/>
          <Route path='/europa' element= {<Europa/>}/>
          <Route path='/titan' element= {<Titan/>}/>

          <Route path='/commander' element= {<Commander/>}/>
          <Route path='/pilot' element= {<Pilot/>}/>
          <Route path='/mission-specilalist' element= {<MissionSpecialist/>}/>
          <Route path='/flight-engineer' element= {<FlightEngineer/>}/>

          <Route path='/launch-vehicle' element= {<LaunchVehicle/>}/>
          <Route path='/spaceport' element= {<SpacePort/>}/>
          <Route path='/space-capsule' element= {<SpaceCapsule/>}/>
        </Routes>
      </BrowserRouter></>
    </div>
  );
}

export default App;
