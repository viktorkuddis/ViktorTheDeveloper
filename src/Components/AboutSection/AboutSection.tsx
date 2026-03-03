import styles from "./AboutSection.module.css"

import aboutText from "@/data/aboutText.json"
import skills from "@/data/skills.json"
import educationsdata from "@/data/educations.json"

import ImageContainer from "../ImageContainer/ImageContainer"

const favSkills: string[] = skills.favSkills;

const skillsMap: {
    title: string,
    uid: string,
    imgSrc: string
}[] = skills.skillsMap;

const educations: { [key: string]: string }[] = educationsdata;


export default function AboutSection() {
    return (
        <div className={`${styles.contentContainer} content-container-width content-container-padding`} >
            <h2 className={`headding-loud`}>OM MIG</h2>

            <div className={`${styles.textContainer} `}>
                <p>{aboutText.text} </p>

                <div className={`${styles.skillsAndEducations}`}>
                    <section style={{ flexGrow: "1" }}>
                        <h3>
                            Utbildningar
                        </h3>
                        <ul className={`${styles.educationsList}`} style={{


                        }}>
                            {educations.map((edu, i) => (
                                <li key={i} >
                                    <div className={`${styles.imageContainer}`}>
                                        <ImageContainer src={edu.image} alt={""} borderRadius={"xsmall"} />
                                    </div>
                                    <small>
                                        {edu.examen}
                                        <div className={`${styles.educationHeadding}`}>


                                            <b>{edu.utbildning}</b>
                                        </div>

                                        {edu.school}</small>
                                </li>))}
                        </ul>
                    </section>
                    <section style={{ flexShrink: "0", flexGrow: "2" }}>
                        <h3 >
                            Jag jobbar gärna med...
                        </h3>
                        <ul className={`${styles.preferedSkillsList}`}>
                            {favSkills.map((favSkill, i) => {
                                const skill = skillsMap.find((item) => favSkill == item.uid)
                                if (!skill) return null;
                                return (
                                    <li key={i}>
                                        {skill?.imgSrc
                                            ? <img src={skill?.imgSrc} alt="" />
                                            : <div className={`${styles.placeholderImg}`}></div>}
                                        {skill?.title}
                                    </li>)
                            })}
                        </ul>

                    </section>

                </div>

                <section style={{ lineHeight: "normal" }}>
                    <small>
                        <p><b>Kompetenser</b></p>
                        <p>{skills.allSkills}</p>
                    </small>
                </section>

            </div>
        </div >

    )
}
