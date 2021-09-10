import './App.css';
import { Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Adenium from './components/Adenium';
import Cactus from './components/Cactus'
import Landscapes from './components/Landscapes';
function App() {
  return (
    <div>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/Nursery'><Home/></Route>
          <Route exact path='/Home'><Home/></Route>
          <Route exact path='/AboutUs'><AboutUs/></Route>
          <Route exact path="/Adenium"><Adenium/></Route>
          <Route exact path="/Cactus"><Cactus/></Route>
          <Route exact path="/Landscapes"><Landscapes/></Route>
        </Switch>
    </div>
  );
}

export default App;
