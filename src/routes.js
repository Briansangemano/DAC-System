//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import Classrooms from './Components/App/Classrooms';
import Students from './Components/App/Students';
import Home from './Components/App/Home';
import Subjects from './Components/App/Subjects';
import Teachers from './Components/App/Teachers';
import Login from './Components/App/Login';

const AppRoutes = () =>
  <App>
    <Switch>
        <Route exact path="/classrooms" component={Classrooms} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
