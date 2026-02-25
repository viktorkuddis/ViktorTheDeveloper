
import ImageContainer from '../ImageContainer/ImageContainer'
import styles from './HeroSection.module.css'

import profilePic from "@/assets/ViktorMagnussonCompressed.jpg";



export default function HeroSection() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.contentContainer} content-container-width content-container-padding`}>


                <div className={`${styles.imageArea}`}>
                    <ImageContainer src={profilePic} alt={''} borderRadius={"medium"} aspectRatio='1/1' />
                </div>



                <div className={`${styles.textArea}`}>
                    <h1 className="headding-loud">
                        JAG ÄR {" "}
                        {/* break on big screan är en radbrytning som bara används  när vi går till stor skärm  */}
                        <br className={`${styles.breakOnBigScreen}`} />
                        UTVECKLARE
                    </h1>
                    <p> Som nyutbildad utvecklare med fokus på frontend ser jag nu fram emot att äntligen börja jobba och utveckla(s) tillsammans med er.</p>

                    <button>Mer om mig</button>
                </div>
            </div>
        </div>

    )
}
