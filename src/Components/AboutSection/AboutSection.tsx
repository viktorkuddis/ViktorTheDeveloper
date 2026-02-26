import aboutText from "@/data/aboutText.json"

import styles from "./AboutSection.module.css"


export default function AboutSection() {
    return (
        <div className={`${styles.contentContainer} content-container-width content-container-padding`} >
            <h2 className={`headding-loud`}>OM MIG</h2>

            <div className={`${styles.textContainer} `}>
                <p>{aboutText.text} </p>

            </div>
        </div >

    )
}
