
import ImageContainer from '../ImageContainer/ImageContainer'
import styles from './HeroSection.module.css'

import profilePic from "@/assets/ViktorMagnussonCompressed.jpg";
import { ArrowRight } from 'lucide-react';

<ArrowRight />

export default function HeroSection() {
    return (
        <div className={`${styles.wrapper}`}>
            <footer className={`${styles.contentContainer} content-container-width content-container-padding`}>


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

                    <button className='btn-primary'
                        style={{
                            marginTop: "0.5rem",
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.75rem",
                            alignItems: "center"
                        }} onClick={() => {
                            window.location.hash = "";
                            window.location.hash = "about"
                        }}>
                        <span>Mer om mig</span>
                        <ArrowRight style={{ height: "1rem", width: "1rem" }} />

                    </button>
                </div>
            </footer>
        </div>

    )
}
