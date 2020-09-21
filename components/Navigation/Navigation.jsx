import Link from 'next/link';

import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href='/'>
            <a>APIE/INFO</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>ALBUMAI</a>
          </Link>
        </li>
        <li>
          <Link href='/blog/hello-world'>
            <a>KONTAKTAI</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
