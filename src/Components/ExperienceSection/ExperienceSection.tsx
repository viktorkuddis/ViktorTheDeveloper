
import styles from "./ExperiencseSection.module.css"
import expreriences from "@/data/experiences.json"
import TimeLineSlot from "./TimeLineSlot/TimeLineSlot"



import type { ExperienceType } from "../../types/types"

const experiences: ExperienceType[] = expreriences


export default function ExperienceSection() {

    {/* Här byggs på med komponenter för varje erfarenhet.
            Den är blå om den är current true.
            För ennkast sortering = Det staplas i den ordning den ligger i arrayen. Inte enligt tid. */}

    return (<section id="experience" className={`${styles.experienceSection}`}>
        <div className="content-container-width content-container-padding">
            <h2 className={`headding-loud-inverted ${styles.heading}`}>
                ERFARENHET
            </h2>

            {experiences.map((ex, i) => (<div key={i}>

                <TimeLineSlot title={ex.title}
                    company={ex.company}
                    city={ex.city}
                    country={ex.country}
                    period={ex.period}
                    isCurrent={ex.isCurrent}
                    isHighlighted={ex.isHighlighted}
                    descriptionText={ex.descriptionText}
                    descriptionBulletPoints={ex.descriptionBulletPoints}
                    isOldestItemInTimeLine={i == experiences.length - 1 ? true : false}
                />

            </div>))}





        </div >
    </section >


    )
}
