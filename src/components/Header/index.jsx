import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <Link href="/" className={styles['header__brand']}>
          <img src="/logo.svg" alt="Linear | Issue Tracking Tool" />
        </Link>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__menu']}>
            <li className={styles['header__item']}>
              <Link href="#" className={styles['header__link']}>Twitter</Link>
            </li>
            <li className={styles['header__item']}>
              <Link href="#" className={styles['header__link']}>Changelog</Link>
            </li>
            <li className={styles['header__item']}>
              <Link href="#" className={styles['header__link']}>Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}