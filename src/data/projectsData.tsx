
import type { ProjectsData } from "../types/projectTypes"


export const projectsData: ProjectsData[] = [
    {
        title: "Redax Solo",
        summary: "Redaktionellt verktyg byggt efter reella behov jag haft i jobbet som Studioreporter -a.k.a. Programledare. Systemet samlar och filtrerar nyheter i ett enhetligt flöde.",
        deployLink: "https://redaxsolo.netlify.app/feed",
        repoLink: "https://github.com/viktorkuddis/REDAX-SOLO",
        links: null,
        label: ["Vilande (W.i.p.)"],
        projectForm: "Solo",
        projectContext: "Sidoprojekt",
        relatedSkillsUID:
            [
                "3A13375B-2D72-4DE9-80F7-B506A11A7BD7",
                "F974373D-B250-4D75-9FA1-986DD1059265",
                "BCC4D2F8-617E-4649-990A-E4FF27345A89", "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC",
            ],
        coverImage: "./images/projectImages/redaxSolo/redaxSoloDarkMode.jpeg",
        images:
            [
                "./images/projectImages/redaxSolo/redaxSoloDarkMode.jpeg",
                "./images/projectImages/redaxSolo/RedaxSoloLightMode.jpeg"
            ],
        informationTextHTML: <>
            <h3>Redaktionellt verktyg byggt efter reella behov i rollen som Studioreporter/Programledare</h3>
            <h4>Problem:</h4>
            <p><em>Som programledare på en radiokanal är en av arbetsuppgifterna att dagligen förbereda ett antal relevanta, intressanta eller underhållande “prator”/“spaningar” att fylla sändningen med – gärna med avstamp i dagens nyhetsläge.</em></p>
            <p><em>Inför varje sändning behöver jag ett snabbt och smidigt sätt att uppdatera mig om det absolut senaste och mest relevanta för programmets målgrupp och geografiska kontext. Att planlöst klicka runt på olika sajter och dess undersidor - samtidigt som jag behövde värdera och sålla i innehållet - blev snabbt ohållbart.</em></p>
            <p><em>Jag behövde ett enhetligt system där allt material kunde behandlas på ett och samma ställe, utan att byta fönster eller hoppa mellan flikar.</em></p>
            <h4> Lösning:</h4>
            <ul>
                <li>Jag har skapat ett feed/flöde som snabbt summerar nyheter från utvalda källor i listform.</li>
                <li>Användaren kan ta del av hela nyheten direkt i appen.</li>
                <li>För en initial gallring finns filter tillgängliga baserade på ursprung, källtyp och källans egna kategoriseringssystem.</li>
            </ul>
            <h4>Just nu:</h4 >
            <p><b>Systemet bygger initialt på Sveriges Radios nyheter, men ambitionen är att utöka det med SVT, de stora kvälls- och dagstidningarna samt viss nischmedia.</b></p>
            <h4>Nästa steg:</h4>
            <ul>
                <li>Möjlighet att bearbeta nyheter och skriva manus direkt i systemet genom att spara och sortera intressanta artiklar.</li>
                <li>Möjlighet att associera anteckningar/manusfiler till en artikel.</li>
                <li><b>På längre sikt:</b><ul>
                    <li>Integrera inlägg från nyhetskanalers Instagram-konton, då dessa ofta redan är filtrerade och sammanfattade i ett mer kompakt format än de fullständiga artikelflödena.</li>
                </ul>
                </li>
            </ul>
        </>,
    },
    {
        title: "Kanban Board",
        summary: "Kanban board med fritt antal anpassningsbara kolumner, där korten ärver kolumnens inställningar. Både kort och kolumner har unika URL:er.",
        deployLink: "https://theboardapp.netlify.app/",
        repoLink: "https://github.com/viktorkuddis/TheBoardApp",
        links: null,
        label: null,
        projectForm: "Solo",
        projectContext: "Skoluppgift",
        relatedSkillsUID: [
            "F3C5E758-D00A-46F1-95B7-EAF566485F16",
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A",
            "BCC4D2F8-617E-4649-990A-E4FF27345A89",
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC"
        ],
        coverImage: "images/projectImages/kanbanboard/kbCover.jpeg",
        images: ["images/projectImages/kanbanboard/kbColumns.jpeg", "images/projectImages/kanbanboard/kbSettings.jpeg", "images/projectImages/kanbanboard/kbCard.jpeg"],
        informationTextHTML: <>
            <h3>Kanbanboard byggd i React</h3>
            <p>Kanbanboard byggd i React där jag utforskar komponentbaserad UI,
                state-hantering och reaktivitet. <br />
                All data hanteras lokalt i localStorage.</p>
            <ul>
                <li>Valfritt antal kolumner med anpassningsbara namn.</li>
                <li>Varje kolumns färg och beteende kan justeras. Detta påverkar i sin tur kortens utseende.</li>
                <li>Både kort och kolumner har unika URL:er.</li>
            </ul>

        </>
    },
    {
        title: "The Dashboard",
        summary: "Dashboard byggd i vanilla JavaScript. Sparar aktivitet via Local Storage och hämtar data från olika API:er.",
        deployLink: "https://viktorkuddis.github.io/Individuellt_projekt_The_Dashboard/",
        repoLink: "https://github.com/viktorkuddis/Individuellt_projekt_The_Dashboard",
        links: null,
        label: null,
        projectForm: "Solo",
        projectContext: "Skoluppgift",
        relatedSkillsUID: [
            "BCC4D2F8-617E-4649-990A-E4FF27345A89",
            "3A13375B-2D72-4DE9-80F7-B506A11A7BD7",
            "BE9E4470-F5A5-4E20-AF05-4483F68C48F0",
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A",
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC"
        ],
        coverImage: "images/projectImages/theDashboard/tdbCover.jpeg",
        images: ["images/projectImages/theDashboard/tdbGrass.jpeg", "images/projectImages/theDashboard/tdbWater.jpeg"],
        informationTextHTML: <>
            <h3>Dashboard byggd helt i Vanilla JavaScript</h3>
            <p>
                I detta projekt övade vi på att bygga fungerande UI med enbart Vanilla JavaScript och CSS, helt utan ramverk, samt att hämta data från API:er.
                <br />Dashboarden håller koll på användarens aktivitet med Local Storage som databas.
            </p>
            <p>
                Implementerade även spårningskod för Google Analytics.</p>
            <ul>
                <li>Användaren kan skriva och spara anteckningar och bokmärken till webbsidor.</li>
                <li>Appen hämtar aktuell väderdata baserat på användarens plats via ett väder-API och genererar bakgrundsbilder genom Unsplashs bild-API.</li>
                <li>Användaren kan få sällskap av en liten kompanjon genom att välja en Pokémon “buddy”, som hämtas från det öppna Pokémon-API:et.</li>
            </ul>
        </>
    },
    {
        title: "Quire -digital anteckningsbok",
        summary: "Skolprojekt där vi lärde oss samarbeta agilt enligt Scrum samtidigt som vi utvecklade en omfattande anteckningsapp i 100% Vanilla JavaScript utan ramverk. Man kan skapa, redigera, sortera, organisera och söka anteckningar.",
        deployLink: "https://quire-norrland.netlify.app/",
        repoLink: "https://github.com/viktorkuddis/Quire",
        links: null,
        label: null,
        projectForm: "Grupp",
        projectContext: "Skoluppgift",
        relatedSkillsUID: [
            "BCC4D2F8-617E-4649-990A-E4FF27345A89",
            "79F2CC78-43F3-439F-A015-D55A5F12DBDC",
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC",
            "9B38F406-C577-4165-931C-2E6A72EFC233",
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A",
            "5A59A4D4-4B49-4A5D-96F0-D79E32C1072E",
            "BE9E4470-F5A5-4E20-AF05-4483F68C48F0",

        ]
        ,
        coverImage: "images/projectImages/quire/omslag quire.png",
        images: ["images/projectImages/quire/quireSearch.jpeg",
            "images/projectImages/quire/quireEdit.jpeg"],
        informationTextHTML: <>
            <h3>Anteckningsbok byggd helt i Vanilla JavaScript</h3>
            <p>Grupparbete med fokus på agil utveckling enligt Scrum. </p>
            <p>Genom enveckorssprintar med standups, retrospektiv, sprintplaneringar och avstämningar med agil coach och product owners (våra lärare) blev vi introducerade till agila metoder, samtidigt som vi utvecklade en omfattande anteckningsapp i Vanilla JavaScript och CSS, helt utan ramverk.</p>
            <p>Vi implementerade även spårningskod för Google Analytics.</p>
            <p><b>Funktioner:</b></p>
            <ul>
                <li>Skapa, redigera och ta bort anteckningar.</li>
                <li>Formatera text</li>
                <li>Organisera anteckningar med taggar</li>
                <li>Lägga till och ta bort bilder.</li>
                <li>Favoritmarkera anteckningar</li>
                <li>Söka anteckningar via taggar eller fritext</li>
            </ul>
        </>
    }


]