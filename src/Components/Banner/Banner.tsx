
import type { ReactNode } from 'react'
import styles from './banner.module.css'

type Props = {
    bannerType: "double" | "singleFrontBanner" | "singleUnderBanner"
    bannerContent: ReactNode | null,
    repeatContent: number | false
    gap: string
}


export default function Banner({ bannerContent, bannerType, gap, repeatContent }: Props) {
    return (
        <div className={`${styles.bannerContainer}`}>

            <div className={`${styles.underBanner}`}
                style={{ display: bannerType == "singleFrontBanner" ? "none" : "" }}></div >


            <div className={`${styles.frontBanner}`} style={{
                gap: gap,
                display: bannerType == "singleUnderBanner" ? "none" : ""
            }}>
                {bannerContent &&
                    [...Array(repeatContent)].map((_, index) => (<div key={index}>{bannerContent}</div>))}

            </div >


        </div >

    )
}
