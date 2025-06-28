import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div>
      <p>
  CopyRights Awais Yousaf 2025 <img src={reactIcon} alt="React" />
  {/* <span>❤️</span> */}
</p>

      </div>
      <div className="social-media">
        <a
          href="https://github.com/connect-awais"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=923320003640&text=Hello+Awais"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/just._.awais_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
