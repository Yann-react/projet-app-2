import Landing from "./Components/Landing";
import './App.css'
import Sites from "./Components/Sites";
import NosSites from "./Components/PageSites/NosSites";
function App() {
  const resp = true;
  return (
    <div className="App">
   <div className="page" >

    {/* <Landing />

    <Sites /> */}

<NosSites />
   </div>
   
    
    </div>
  );
}

export default App;
