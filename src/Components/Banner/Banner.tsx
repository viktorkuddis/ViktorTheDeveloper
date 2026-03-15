
import type { ReactNode } from 'react'
import styles from './banner.module.css'

type Props = {
    bannerType: "double" | "singleFrontBanner" | "singleUnderBanner"
    bannerContent: ReactNode | null,
    repeatContent: number | false
    gap: string
    link: string | false
}


export default function Banner({ bannerContent, bannerType, gap, repeatContent, link }: Props) {
    return (
        <div className={`${styles.bannerContainer}`}>

            <div className={`${styles.underBanner}`}
                style={{ display: bannerType == "singleFrontBanner" ? "none" : "" }}></div >


            <div
                onClick={() => {
                    if (link) {
                        window.location.hash = "";
                        window.location.hash = link;
                    }
                }
                }
                className={`${styles.frontBanner} ${link && styles.isLink}`
                } style={{
                    gap: gap,
                    display: bannerType == "singleUnderBanner" ? "none" : ""
                }}>
                {bannerContent &&
                    [...Array(repeatContent)].map((_, index) => (<div className={styles.bannerContent} key={index}>{bannerContent}</div>))}

            </div >


        </div >

    )
}
