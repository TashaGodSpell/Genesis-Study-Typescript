import styles from "./Header.module.css";

import appLogo from '../assets/app-logo.png'

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div>
      <header className={styles.header}>
        <img src={appLogo} />
        <strong>{props.title}</strong>
      </header>
    </div>
  );
}
