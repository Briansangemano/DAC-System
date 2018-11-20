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
        <Route path="/classrooms" component={Classrooms} />
        <Route path="/students" component={Students} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
