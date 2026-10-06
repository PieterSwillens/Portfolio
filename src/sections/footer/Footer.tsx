import styles from './Footer.module.css'

type FooterProps = {
  name: string
  topAnchor: string
}

const quote = 'The more I learn, the more I want to learn.'

const currentYear = new Date().getFullYear()

export function Footer({ name, topAnchor }: FooterProps) {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.inner }>
        <p className={ styles.copy }>© { currentYear } { name }</p>
        <p className={ styles.quote }>“{ quote }”</p>
        <a className={ styles.top } href={ `#${ topAnchor }` }>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}