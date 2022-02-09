import React from 'react';

import classes from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1>DQ</h1> {/* logo */}
        </div>
        <nav>
          <a href="">
            <span>projects</span>
          </a>
          <a href="">
            <span>about</span>
          </a>
          <a href="">
            <span>resume</span>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
