type ProjectLabel =
    | "Work in progress"
    | "Vilande (W. I. P.)"

type ProjectForm =
    | "Grupp"
    | "Solo"

type ProjectContext =
    | "Jobb"
    | "Skoluppgift"
    | "Sidoprojekt"
    | "Personligt projekt"

type ProjectLinks = {
    linkTitle: string,
    link: string,
}[]

export type ProjectsData = {
    title: string,
    summary: string,
    informationText: string | null,
    deployLink: string | null,
    repoLink: string | null,
    links: ProjectLinks[] | null,
    label: ProjectLabel[] | null,
    projectForm: ProjectForm | null,
    projectContext: ProjectContext | null,
    relatedSkillsUID: string[] | null
    coverImage: string | null
    images: string[] | null,
}