import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  const currentPath = router && router.route;

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>
        <Link href="/">
          <a>
            <img alt="Logo: stylized letters 'BRN'" src="/images/logo.svg" />
          </a>
        </Link>
      </h1>
      <nav className={styles.Header__nav}>
        <ul className={styles.Header__nav__items}>
          <li
            className={`${styles.Header__nav__item} ${
              currentPath === '/ssr' ? styles['Header__nav__item--active'] : ''
            }`}
          >
            <Link href="/ssr">
              <a>SSR</a>
            </Link>
          </li>
          <li
            className={`${styles.Header__nav__item} ${
              currentPath === '/sg' ? styles['Header__nav__item--active'] : ''
            }`}
          >
            <Link href="/sg">
              <a>SG</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
