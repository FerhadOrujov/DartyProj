import styles from './header.module.css';
import Button from '../UI/buttons/button';

function Header() {

    return (
        <>
            <header className={styles.header}>
                <Button />
            </header>
        </>
    )
}

export default Header;