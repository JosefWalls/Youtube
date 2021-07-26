import './App.css';
import Header from './Components/Header';
import SideBar from "./Components/Sidebar";
import Recommended from './Components/Recommended';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__page">
        <SideBar/>
        <Recommended/>
      </div>
    </div>
  );
}

export default App;
