import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>

          <Route path="/write">{user ? <Write /> : <Register />}</Route>

          <Route path="/profile">{user ? <Profile /> : <Register />}</Route>

          <Route exact path="/:id">
            <SinglePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
