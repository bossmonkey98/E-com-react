import "./App.css";
import "./Components/pages/index"
import "./Components/pages/index";
import { LandingPage, NavBar ,Footer} from "./Components/pages/index";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
