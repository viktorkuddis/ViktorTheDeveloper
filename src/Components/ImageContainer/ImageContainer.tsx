
// notes:
// Denna komponent monterar en bild i anpassningsbar ram. Bilden fyller alltid ut ramens mått.
// höjd bredd och ratio styrs med propes likt vanliga css-egenskaper. Dessa tre är frivilliga.
// border radius anges med ord och inte units för att hålla storlekarna enhetliga vid ändringar. 

type props = {
    src: string
    alt: string
    borderRadius: "none" | "xsmall" | "small" | "large" | "medium"
    width?: string
    height?: string
    aspectRatio?: string
}

export default function ImageContainer({ src, alt, borderRadius, width, height, aspectRatio }: props) {


    return (
        <div style={{

            width: width,
            height: height,
            aspectRatio: aspectRatio,

            borderRadius:
                borderRadius == "xsmall" ? "0.25rem"
                    : borderRadius == "small" ? "0.5rem"
                        : borderRadius == "medium" ? "1rem"
                            : borderRadius == "large" ? "1.5rem"
                                : "0px",
            overflow: "hidden",

            display: "grid",
            placeItems: "center",

        }}>
            <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div >
    )
}
