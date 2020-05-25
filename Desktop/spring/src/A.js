import React , { useState }from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'

function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/signIn">SignIn Page</Link>
          </li>
        </ul>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
        </AuthContext.Provider>
  );
}
export default App;