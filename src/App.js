import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import Artist from './components/artist/Artist';
import PopularArtists from './components/popular/PopularArtists';

function App() {
  return (
    <div className="container-fluid px-0">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
          <div className="container-fluid d-flex"> 
            <a className="navbar-brand" href="/">Artsy</a>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation"> 
                  <NavLink exact activeClassName="active"  className="nav-link" id="home-tab" data-toggle="tab" to="/" role="tab" aria-controls="home" aria-selected="false">Home</NavLink> 
                </li>
                <li className="nav-item" role="presentation"> 
                  <NavLink exact activeClassName="active"  className="nav-link" id="profile-tab" data-toggle="tab" to="/artists" role="tab" aria-controls="profile" aria-selected="false">Artists</NavLink> 
                </li>
            </ul>
          </div>
        </nav> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artists" component={PopularArtists} />
          <Route exact path="/artist/:id" component={Artist} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
