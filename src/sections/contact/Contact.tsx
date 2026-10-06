import type { ComponentType } from 'react'
import type { ContactChannelId, ContactInfo } from '@/content/contact.ts'
import { useInView } from '@/hooks/useInView.ts'
import { PortfolioSection } from '@/components/section/PortfolioSection.tsx'
import { ArrowUpRightIcon } from '@/components/icons/ArrowUpRightIcon.tsx'
import { GithubIcon } from '@/components/icons/GithubIcon.tsx'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon.tsx'
import type { IconProps } from '@/components/icons/types.ts'
import styles from './Contact.module.css'

type ContactProps = {
  sectionId: string
  contact: ContactInfo
}

const sectionHeaderInfo = {
  title: "Let's talk",
  intro: "Have a project in mind, a question about something I built, or just want to talk software? Reach out through any of the platforms below."
}

const channelIcons: Record<ContactChannelId, ComponentType<IconProps>> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

export function Contact({ sectionId, contact }: ContactProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ rootMargin: '0px 0px -15% 0px' })
  const { greeting, channels, factsAboutMe } = contact

  return (
    <PortfolioSection anchorId={ sectionId } sectionHeaderInfo={ sectionHeaderInfo }>
      <div ref={ ref } className={ styles.card } data-revealed={ isInView }>
        <div className={ styles.main }>
          <p className={ styles.status }>
            <span className={ styles.dot } aria-hidden="true" />
            { greeting.headline }
          </p>
          <p className={ styles.detail }>{ greeting.detail }</p>

          <div className={ styles.actions }>
            { channels.map((channel) => {
              const Icon = channelIcons[channel.id]
              const className = channel.isPreferredContactOption ? `${ styles.link } ${ styles.linkPrimary }` : styles.link

              return (
                <a key={ channel.id } className={ className } href={ channel.href }
                  target="_blank" rel="noopener noreferrer">
                  <Icon className={ styles.icon } />
                  { channel.callToAction }
                  <ArrowUpRightIcon className={ `${ styles.icon } ${ styles.arrow }` } />
                  <span className={ styles.visuallyHidden }> (opens in a new tab)</span>
                </a>
              )
            }) }
          </div>
        </div>

        <dl className={ styles.facts }>
          { factsAboutMe.map((fact) => (
            <div key={ fact.label } className={ styles.fact }>
              <dt className={ styles.factLabel }>{ fact.label }</dt>
              <dd className={ styles.factValue }>{ fact.value }</dd>
            </div>
          )) }
        </dl>
      </div>
    </PortfolioSection>
  )
}
