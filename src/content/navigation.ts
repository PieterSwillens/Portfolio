export const sectionIds = {
  top: 'top',
  skills: 'skills',
  projects: 'projects',
  contact: "contact"
} as const

export type NavLink = {
  anchor: string
  label: string
}

export const navLinks: readonly NavLink[] = [
  { anchor: sectionIds.skills, label: 'Skills' },
  { anchor: sectionIds.projects, label: 'Projects' },
  { anchor: sectionIds.contact, label: 'Contact' },
]
