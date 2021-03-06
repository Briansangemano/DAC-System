//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './style.css';

class Footer extends Component {
  static PropTypes = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = '&cop; DAC 2018' } =  this.props;

    return (
      <div className="Footer">
        <p>{copyright}</p>
      </div>
    );
  }
}

export default Footer;
