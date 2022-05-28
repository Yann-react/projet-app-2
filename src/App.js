import Landing from "./Components/Landing";
import './App.css'
import Sites from "./Components/Sites";


import FormReservation from "./Components/FormReservation";

import Reservation from "./Components/Reservation";
import HearderAll from "./Components/HearderAll";
import Footer from "./Components/Footer";
import { Routes, Route  , BrowserRouter } from "react-router-dom";
import NosSites from "./Components/PageSites/NosSites";


function App() {
  const resp = true;
  return (
    <div className="App">


    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} /> 
      <Route path='Site' element={<NosSites />} />
      <Route path='Reservation' element={<Reservation />} />
      <Route path="/Site/Reservation" element={<Reservation />} />
      <Route path="/Site/Reservation/FormResv/Reservation" element={<Reservation />} />


      <Route path="/Site/Reservation/FormResv" element={<FormReservation />} />
      <Route path="/Reservation/FormResv" element={<FormReservation />} />
      <Route path="/Reservation/FormResv/Reservation" element={<Reservation />} />
    </Routes>
    
    </BrowserRouter>


   
</div>
  );
}

export default App;
