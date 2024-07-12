import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to={'/generate'} className={styles.navItem}>
        Сгенерировать QR код
      </Link>
      <Link to={'/scan'} className={styles.navItem}>
        Отсканировать QR код
      </Link>
      <Link to={'/generateHistory'} className={styles.navItem}>
        История сгенерированных QR кодов
      </Link>
      <Link to={'/scanHistory'} className={styles.navItem}>
        История отсканированных QR кодов
      </Link>
    </nav>
  );
};

export default Navigation;
