import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

import './styles/App.scss';
import { ChatroomPage } from './pages/ChatroomPage';
import { AuthPage } from './pages/AuthPage';
import { TestPage } from './pages/TestPage';
import { UserContext } from './contexts/User.context';
import { useUser } from './hooks/user.hook';

function App() {
  const {
    nickname,
    token,
    rooms,
    setUser,
    unsetUser,
    loadUser,
    addRoom,
  } = useUser();
  const isAuth = !!token;

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          nickname,
          token,
          rooms,
          setUser,
          unsetUser,
          loadUser,
          addRoom,
        }}
      >
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                isAuth ? ChatroomPage(props) : <Redirect to="/nickname" />
              }
            />
            <Route
              path="/nickname"
              component={(props) => AuthPage(props)}
            ></Route>
            <Route
              path="/invite/:roomId"
              component={(props) =>
                isAuth ? ChatroomPage(props) : AuthPage(props)
              }
            ></Route>
            <Route path="/test" component={(props) => TestPage(props)}></Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
