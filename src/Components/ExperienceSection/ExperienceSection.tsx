
import styles from "./ExperiencseSection.module.css"

export default function ExperienceSection() {

    return (<section className={`${styles.experienceSection}`}>
        <div className="content-container-width content-container-padding">
            <h2 className={`headding-loud-inverted ${styles.heading}`}>
                ERFARENHET
            </h2>


            Här byggs på med komponenter för varje erfarenhet.
            Den är blå om den är current true.
            För enlast sortering = Det staplas i den ordning den ligger i arrayen. Inte enligt tid.
        </div >
    </section >


    )
}
