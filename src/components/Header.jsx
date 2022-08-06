import logoIgnite from '../assets/logo.png';
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.header}>
            <header>
                <img src={logoIgnite} alt="Logo Ignite" />
            </header>
        </div>
    );
}