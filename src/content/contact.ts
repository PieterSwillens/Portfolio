export type ContactChannelId = 'linkedin' | 'github'

type ContactChannel = {
  id: ContactChannelId
  displayName: string
  callToAction: string
  href: string
  isPreferredContactOption?: boolean
}

type Greeting = {
  headline: string
  detail: string
}

type FactAboutMe = {
  label: string
  value: string
}

export type ContactInfo = {
  greeting: Greeting
  channels: readonly ContactChannel[]
  topics: readonly string[]
  factsAboutMe: readonly FactAboutMe[]
}

export const contact: ContactInfo = {
  greeting: {
    headline: 'Always up for a good conversation',
    detail:
      "I'm happily employed, so I'm not job hunting. But I like talking software, swapping ideas and hearing what you think of my work. LinkedIn is the quickest way to reach me.",
  },
  channels: [
    {
      id: 'linkedin',
      displayName: 'LinkedIn',
      callToAction: 'Message me on LinkedIn',
      href: 'https://www.linkedin.com/in/pieter-swillens-99b026280/',
      isPreferredContactOption: true
    },
    {
      id: 'github',
      displayName: 'GitHub',
      callToAction: 'Browse my code on GitHub',
      href: 'https://github.com/Pieter-Swillens',
    },
  ],
  topics: ['Talking shop', 'Architecture & refactoring', 'Feedback on my projects', 'Meeting fellow developers'],
  factsAboutMe: [
    { label: 'Based in', value: 'Belgium' },
    { label: 'Languages', value: 'Dutch, English' },
    { label: 'Usually replies', value: 'Within a few days' },
  ]
}
