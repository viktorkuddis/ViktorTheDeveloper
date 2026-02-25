import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={`${styles.wrapper}`}>


            <div className={`${styles.container} content-container-width content-container-padding`}>
                <p className={`headding-loud ${styles.logo}`}>VIKTOR.</p>

                <nav>
                    <ul>
                        <li><a href="#">Hem</a></li>
                        <li><a href="#">Om</a></li>
                        <li><a href="#">Erfarenhet</a></li>
                        <li><a href="#">Projekt</a></li>
                        <li> <a href="#">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </div>



    )
}