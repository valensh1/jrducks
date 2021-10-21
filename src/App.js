import './Sass/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //! MUST IMPORT BrowserRouter (changing name to just Router is optional) and Route and Switch
import NewPlayer from './Components/NewPlayer.js';
import Rosters from './Views/Rosters.js';
import PlayerProfile from './Views/PlayerProfile.js';
import Home from './Views/Home.js';
import './Sass/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/players">
            <Rosters />
          </Route>

          <Route exact path="/players/new">
            <NewPlayer />
          </Route>

          <Route exact path="/players/:id">
            <PlayerProfile />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
