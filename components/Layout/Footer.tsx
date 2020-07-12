import React from 'react';

import { githubUrl } from 'lib/constants';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <nav className="Footer__nav">
        <ul className="Footer__nav__items">
          <li className="Footer__nav__item">
            view source in <a href={githubUrl}>GitHub</a>
          </li>
        </ul>
      </nav>

      <h3 className="Footer__title">
        by <a href="https://brunobernardino.com">Bruno Bernardino</a>
      </h3>
    </footer>
  );
};

export default Footer;
