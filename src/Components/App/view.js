//Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

//Components
import Header from './Static/Header';
import Content from './Static/Content';
import Footer from './Static/Footer';

//Asssets
import './style.css';

//Date
import items from '../../data/menu';

const App = (props) => {
  return (
    <div className="App">
      { props.location.pathname === '/' ? null : <Header title="DAC System" items={items} /> }
      <Content body={props.children}/>
      <Footer copyright="&copy; DAC-System-2018" />
  </div>
  );
};

export default withRouter(App);
