//Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import Classrooms from './Components/Classrooms';
import Students from './Components/Students';
import Home from './Components/Home';
import Subjects from './Components/Subjects';
import Teachers from './Components/Teachers';

const AppRoutes = () =>
  <App>
    <Switch>
        <Route path="/classrooms" component={Classrooms} />
        <Route path="/students" component={Students} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
