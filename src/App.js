import './App.css';
import Header from './Components/Header';
import SideBar from "./Components/Sidebar";
import Recommended from './Components/Recommended';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Search/:searchTerm">
            <Header/>
            <div className="app__page">
              <SideBar/>
              <SearchPage/>
            </div>
          </Route>
          <Route exact path="/">
            <Header/>
            <div className="app__page">
              <SideBar/>
              <Recommended/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
