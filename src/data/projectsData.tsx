
import type { ProjectsData } from "../types/projectTypes"


export const projectsData: ProjectsData[] = [
    {
        title: "Examensarbete: VADSKER? eventplanerare",
        summary: "Examensarbete där jag utvecklade en webbapp för att koordinera aktiviteter under flerdagarsevenemang.\n Målet är att minska risken för schemakrockar när många personliga agendor möts. \n\n Som användare kan du skapa, och delta i olika evenemang. \n Som arrangör kan du registrera gemensamma gruppaktiviteter.\nSom deltagare kan du registrera egna aktiviteter. \n\nAppen ger deltagare en gemensam överblick över dagens alla  planer, både gemensamma gruppaktiviteter samt individuella. Resultatet blev en mobilanpassad MVP utvecklad med MERN-stack."
        ,
        deployLink: null,
        repoLink: "https://github.com/viktorkuddis/eventplanerare",
        links: [{
            linkTitle: "RAPPORT: Examensarbete, Viktor Magnusson.pdf",
            link: "https://drive.google.com/file/d/1VSWUr6iKGKmwaTQ7XJDYCyHsZF-If8_w/view?usp=sharing"
        }],
        label: ["EXAMENSARBETE"],
        projectForm: "Solo",
        projectContext: null,
        relatedSkillsUID: [
            "F3C5E758-D00A-46F1-95B7-EAF566485F16", //react
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A", // css
            "BCC4D2F8-617E-4649-990A-E4FF27345A89", //Javascript
            "3A13375B-2D72-4DE9-80F7-B506A11A7BD7", //rest
            "C9DFB7AE-ABDD-4C75-9DB9-153F91DE5F4D",// mongodb
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC", //git
            "9B38F406-C577-4165-931C-2E6A72EFC233", //jira
            "8AC56FE3-C8DD-413A-9D5F-D7192A0035B1",// Clerk
            "2D5175FC-8EE9-49F9-B0E2-D1CF6A13E6D8", //express
            "ADEE5881-9E84-4F0C-ABCD-6A6EB81CE982", //node
        ],
        coverImage: "/images/projectImages/examensarbete/omslag.jpeg",
        images: [
            "/images/projectImages/examensarbete/omslag.jpeg",
            "/images/projectImages/examensarbete/startFilled.jpeg",

            "/images/projectImages/examensarbete/connectToEvent.jpeg",
            // "/images/projectImages/examensarbete/connectyToEvent2.jpeg",
            // "/images/projectImages/examensarbete/createEvent1.jpeg",
            "/images/projectImages/examensarbete/createEvent2.jpeg",
            // "/images/projectImages/examensarbete/editActivity.jpeg",
            // "/images/projectImages/examensarbete/feed.jpeg",
            "/images/projectImages/examensarbete/feedFilled.jpeg",
            "/images/projectImages/examensarbete/notification.jpeg",
            "/images/projectImages/examensarbete/rapport.jpeg",
            // "/images/projectImages/examensarbete/start.jpeg",

        ],
        informationTextHTML: <>
            <h3>Eventplanerare
                <br />- en MVP för att
                koordinera aktiviteter och egentid under flerdagarsevenemang</h3>

            <p><i>Saxat från rapporten:</i></p>
            <p>Vid längre flerdagarsevenemang och sammankomster är det inte ovanligt att gästerna kommer
                långväga ifrån. Exempel på evenemang kan till exempel vara julhelg med tjocka släkten,
                tredagarsbröllop, gruppresor, kickoffer eller konferenser.
            </p>

            <p>
                Ofta saknas en gemensam plats där deltagare kan få en kombinerad överblick över det satta
                gemensamma schemat i kombination med övriga deltagares egna planer för dagen. Detta kan
                leda till onödiga personliga schemakrockar eller väntetider då varje deltagare har en egen
                uppfattning över hur dennes dag kommer att se ut.
            </p>
            <p>
                Syftet med detta examensarbete var att utveckla en MVP <i> (Minimum Viable Product)</i> av en
                webbapplikation som ska underlätta för deltagarna vid flerdagarsevenemang.
            </p>
            <p>
                Målet är att minska risken för schemakrockar och onödig väntan. Allt för att varje deltagare
                ska ges möjlighet att få ut det mesta av varje dag.
            </p>
            <p>
                Appen optimeras främst för användning på mobila enheter och är inte tänkt att ersätta andra
                kalenderappar. Inte heller är det en schemaläggningsapp. Dess huvudsakliga uppgift är att på ett
                enkelt sätt tydliggöra alla deltagares olika planer för dagen i ett överskådligt flöde
                tillsammans med de fasta hållpunkterna.

            </p>
            <p>
                <b>
                    Appens huvudsakliga uppgift är att på ett
                    enkelt sätt tydliggöra alla deltagares olika planer för dagen i ett överskådligt flöde
                    tillsammans med de fasta hållpunkterna.
                </b>
            </p>

            <h4><b>Sammanställning av appens funktionalitet (MVP): </b></h4>
            <ul>
                <li> Skapa konto och logga in via Clerk</li>
                <li> För att använda appen krävs att man är en inloggad användare.</li>
                <li> Väl inloggad kan man se listor av egna, samt andras evenemang som man deltar i.</li>
                <li> Skapa och anslut till evenemang direkt från startsidan.</li>
                <li> Varje evenemang tilldelas ett anslutnings-ID som används för att söka efter och skicka
                    förfrågningar om att delta i evenemanget.</li>
                <li> Appen tar emot notiser med jämna mellanrum om nya anslutningsförfrågningar samt
                    godkända anslutningsförfrågningar.</li>
                <li> Gemensamma aktiviteter och individuellt planerade aktiviteter i ett kronologiskt flöde.</li>
                <li> Som värd för ett evenemang ges du möjlighet att addera både gemensamma aktiviteter
                    till flödet, samt individuella aktiviteter. Som gäst tillåts du endast skapa individuella
                    aktiviteter.</li>
            </ul>
        </>
    },
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
                "F3C5E758-D00A-46F1-95B7-EAF566485F16",
                "F974373D-B250-4D75-9FA1-986DD1059265",
                "BCC4D2F8-617E-4649-990A-E4FF27345A89",
                "3A13375B-2D72-4DE9-80F7-B506A11A7BD7",
                "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC",
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
        title: "POC Personalplanerare (Koncepttest)",
        summary: "Jag utforskar hur arbetspass kan visualiseras på en tidslinje och hur man kan interaggera med dem. Systemet ska även ge feedback i realtid. Detta är ett koncepttest(Proof of concept) av en större schemaläggningsapp.",
        deployLink: "https://poc-personalplanerare.netlify.app/",
        repoLink: "https://github.com/viktorkuddis/POC-Personalplanerare",
        links: null,
        label: ["Vilande (W.i.p.)"],
        projectForm: "Solo",
        projectContext: null,
        relatedSkillsUID: [
            "F3C5E758-D00A-46F1-95B7-EAF566485F16", //react
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A", // css
            "BCC4D2F8-617E-4649-990A-E4FF27345A89", //Javascript
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC", //git
        ],
        coverImage: "/images/projectImages/personalplanerare/omslag.jpg",
        images: [
            // "/images/projectImages/personalplanerare/omslag.jpg",
            "/images/projectImages/personalplanerare/screendump.jpg",
        ],
        informationTextHTML: undefined
    },
    {
        title: "Rentapalooza",
        summary: "Uthyrningsplattform byggd med Vue och Express. Här kan användare hyra och hyra ut prylar. Projektet utvecklades agilt i grupp enligt Scrum.",
        deployLink: "https://rentapalooza.netlify.app/",
        repoLink: "https://github.com/viktorkuddis/rentapalooza",
        links: null,
        label: null,
        projectForm: "Grupp",
        projectContext: "Skoluppgift",
        relatedSkillsUID: [
            "C76D42CF-9A1B-49AC-BF85-E1B590D79DC8",// vue
            "79F2CC78-43F3-439F-A015-D55A5F12DBDC", //scrum
            "39F9E43C-7D3C-4A15-B526-BD0D6EC6D64A", // css
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC", //git
            "9B38F406-C577-4165-931C-2E6A72EFC233", //jira
            "3A13375B-2D72-4DE9-80F7-B506A11A7BD7", //rest
            "BCC4D2F8-617E-4649-990A-E4FF27345A89", //Javascript
            "2D5175FC-8EE9-49F9-B0E2-D1CF6A13E6D8", //express
            "ADEE5881-9E84-4F0C-ABCD-6A6EB81CE982", //node
            "5A59A4D4-4B49-4A5D-96F0-D79E32C1072E", //Agila metoder
        ],
        coverImage: "/images/projectImages/rentapalooza/rentCover.jpeg",
        images: [
            "/images/projectImages/rentapalooza/rentStart.jpeg",
            "/images/projectImages/rentapalooza/rentProfile.jpeg",
            "/images/projectImages/rentapalooza/rentListings.jpeg",
        ],
        informationTextHTML: <>
            <h3>
                Uthyrningsplattform byggd med Vue och Express.
            </h3>
            <p>Detta är ett gruppprojekt där vi arbetade enligt Scrum i enveckorssprintar med standups, sprintplanering, retrospektiv och avstämningar med Product Owners (våra lärare).</p>
            <p>Plattformens upplägg är inspirerat av <a href="https://www.hygglo.se/">hygglo.se</a>, där användare både kan hyra och hyra ut diverse prylar.</p>
            <p>Förutom uthyrningsfunktionalitet kan användare även skapa en profil och få recensioner.</p>
        </>
    },
    {
        title: "Aurora-Agile",
        summary: "Projekt där vi arbetade agilt enligt Scrum för att tillsammans utveckla en kanbanboard i React. Appen bygger på erfarenheter och lärdomar från våra tidigare individuella kanbanboards.",
        deployLink: "https://auroraagile.netlify.app/",
        repoLink: "https://github.com/viktorkuddis/Aurora-Agile",
        links: null,
        label: null,
        projectForm: "Grupp",
        projectContext: "Skoluppgift",
        relatedSkillsUID: [
            "F3C5E758-D00A-46F1-95B7-EAF566485F16", //react
            "79F2CC78-43F3-439F-A015-D55A5F12DBDC", //scrum
            "F974373D-B250-4D75-9FA1-986DD1059265", //bootstrap
            "5543F5FF-8301-4F95-8F12-3EB2BD57DAFC", //git
            "9B38F406-C577-4165-931C-2E6A72EFC233", //jira
            "BCC4D2F8-617E-4649-990A-E4FF27345A89", //Javascript
            "5A59A4D4-4B49-4A5D-96F0-D79E32C1072E", //Agila metoder
        ],
        coverImage: "/images/projectImages/auroraAgile/AuroraLogoSplitColor.jpeg",
        images: [
            "/images/projectImages/auroraAgile/AuroraLogoSplitColor.jpeg",
            "/images/projectImages/auroraAgile/auroraBoard.jpeg",
            "/images/projectImages/auroraAgile/auroraModal.jpeg",
            "/images/projectImages/auroraAgile/auroraBranding.jpeg",

        ],
        informationTextHTML: <>
            <h3>Kanbanboard med React och Bootstrap</h3>
            <p>Gruppprojekt med fokus på agil utveckling enligt Scrum.</p>
            <p>Projektet genomfördes i enveckorssprintar med standups, sprintplanering, retrospektiv och avstämningar med Product Owners (våra lärare). Appen bygger vidare på erfarenheter från våra tidigare individuella kanbanboards.</p>
            <p>Vi tog även fram en gemensam färgprofil och utmanade oss att använda Bootstrap och dess utility-klasser i så stor utsträckning som möjligt.</p>
            <ul>
                <li>Kolumner kan läggas till, ändras och tas bort.</li>
                <li>Kort kan dras mellan kolumner, redigeras och tas bort.</li>
                <li>Kort kan tilldelas en eller flera teammedlemmar.</li>
                <li>Kort kan filtreras baserat på teammedlem.</li>
            </ul>
        </>
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
        images: [
            "images/projectImages/kanbanboard/kbColumns.jpeg",
            "images/projectImages/kanbanboard/kbSettings.jpeg",
            "images/projectImages/kanbanboard/kbCard.jpeg"],
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
        images: [
            "images/projectImages/theDashboard/tdbGrass.jpeg",
            "images/projectImages/theDashboard/tdbWater.jpeg"
        ],
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
        title: "Quire - digital anteckningsbok",
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
        images: [
            "images/projectImages/quire/quireSearch.jpeg",
            "images/projectImages/quire/quireEdit.jpeg"
        ],
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