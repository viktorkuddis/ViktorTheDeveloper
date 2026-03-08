
import type { ExperienceType } from "../../../types/types"
import styles from "./TimeLineSlot.module.css"

type Props = ExperienceType & {
    isOldestItemInTimeLine?: boolean
}

export default function TimeLineSlot(
    {
        title,
        company,
        city,
        country,
        period,
        isCurrent,
        isHighlighted,
        descriptionText,
        descriptionBulletPoints,
        isOldestItemInTimeLine }: Props) {
    return (<>


        {/* 
        isOldestItemInTimeLine används för att styla de första elementet (alltså det äldsta) i tidslinje så att linjen tonas in. 
        Det görs via conditions eftersom jag inte har direkt tillgång till last child på modulär css då min tillhörande cssfil här bara vet denna komponent och inte hur den förhåller sig till andra när den renderas i en lista. 
            */}


        <div className={`
        ${styles.timeLineSlotContainer}
        
            ${isHighlighted == true
                ? styles.isHighlighted
                : styles.isNotHighlighted} 
            ${isOldestItemInTimeLine == true && styles.isOldestItemInTimeLine}
            ${isCurrent == true && styles.isCurrent}`}>


            <div className={`${styles.timeLineGraficContainer}`}>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.line}`}></div>

            </div>

            <div className={`${styles.titleContainer}`}>
                <h3>{title}</h3>
            </div>

            <div className={`${styles.informationTextContainer}`}>
                <p>{company}{company && ", "}{city}{city && ", "}{country}
                    <br />
                    {period} <br /></p>



                {descriptionText && <p>{descriptionText}</p>}


                {descriptionBulletPoints.length > 0 &&
                    <>
                        <ul>
                            {descriptionBulletPoints.map((bp, i) => (<li key={i}>{bp}</li>))}
                        </ul>
                    </>
                }
            </div>





        </div>
    </>
    )
}
