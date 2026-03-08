
import type { ExperienceType } from "../../../types/types"
import styles from "./TimeLineSlot.module.css"

export default function TimeLineSlot({
    title,
    company,
    city,
    country,
    period,
    // isCurrent,
    isHighlighted,
    descriptionText,
    descriptionBulletPoints }: ExperienceType) {
    return (<>




        <div className={`
        ${styles.timeLineSlotContainer}
            ${isHighlighted == true
                ? styles.isHighlighted
                : styles.isNotHighlighted} `}>

            <div> o
                <br />
                |
                <br />

                |
            </div>

            <h3>{title}</h3>
            <p>{company}{", "}{city}{", "}{country}
                <br />
                {period} <br /></p>
            <p>
                {descriptionText}
            </p>

            {descriptionBulletPoints.length > 0 &&
                <>
                    <ul>
                        {descriptionBulletPoints.map((bp, i) => (<li key={i}>{bp}</li>))}
                    </ul>
                </>
            }



        </div>
    </>
    )
}
