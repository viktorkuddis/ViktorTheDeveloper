import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={`${styles.wrapper}`}>


            <header className={`${styles.container} content-container-width content-container-padding`}>
                <p className={`headding-loud ${styles.logo}`}>VIKTOR.</p>

                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#about">Om</a></li>
                        <li><a href="#experience">Erfarenhet</a></li>
                        <li><a href="#projects">Projekt</a></li>
                        <li> <a href="#contact">Kontakt</a></li>
                    </ul>
                </nav>
            </header>
        </div>



    )
}