import React from 'react';

import classes from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={classes.footer}>
        <div>
          <h2>DIEGO QUINTELA</h2>
          <h4>Full-stack software developer</h4>
          <h5>Toronto, ON</h5>
        </div>
        <div className={classes.footer__contact}>
          <p>
            If you want to contact me professionally or to discuss a project,
            feel free to get in touch at
          </p>
          <h4>diegolucasq@gmail.com</h4>
          {/* TODO: add mailto: */}
        </div>
        <div>
          <a href="https://github.com/diegolbquintela">GitHub</a>
          <a href="">LinkedIn</a>
          <a href="https://medium.com/@diegolucasq">Medium</a>
        </div>

        {/* TODO: add an upwards arrow */}
      </footer>
    );
  }
}

export default Footer;
