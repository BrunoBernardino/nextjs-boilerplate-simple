import React from 'react';

import { githubUrl } from 'lib/constants';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav className={styles.Footer__nav}>
        <ul className={styles.Footer__nav__items}>
          <li className={styles.Footer__nav__item}>
            view source in <a href={githubUrl}>GitHub</a>
          </li>
        </ul>
      </nav>

      <h3 className={styles.Footer__title}>
        by <a href="https://brunobernardino.com">Bruno Bernardino</a>
      </h3>
    </footer>
  );
};

export default Footer;
