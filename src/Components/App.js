//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Asssets
import './App.css';

//Date
import items from '../data/menu'

class App extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Header title="DAC System" items={items} />
        <Content body={children}/>
        <Footer copyright="&copy; DAC-System-2018" />
      </div>
    );
  }
}

export default App;
