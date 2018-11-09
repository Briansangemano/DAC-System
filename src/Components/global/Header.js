//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Asssets
import './css/Header.css';


class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <h1><span>DAC </span>System</h1>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
