import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import  AddPatients  from './pages/AddPatients';
import  SearchPatients  from './pages/SearchPatients';
import PatientsDetail from './pages/PatientsDetail';
import AddPatientsLevels from './pages/AddPatientsLevel';
import Home from './pages/Home';


function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} name='home'/>
            <Route path='/addPatients' element={<AddPatients />} name='addPatients' />
            <Route path='/searchPatients' element={<SearchPatients />} name='searchPatients'/>
            <Route path='/patientsinfo/:id' element={<PatientsDetail />} name='patientDetail' />
            <Route path='/addPatients/level' element={<AddPatientsLevels />} name='addPatientsLevel' />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
