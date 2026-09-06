import { ArrowUp, Heart } from 'lucide-react'
import { profile } from '../data/portfolio'
export function PortfolioFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <a href="#home" className="wordmark">
            ananya<span>.</span>
          </a>
          <p>
            Built with intention. And a little <Heart size={12} />.
          </p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Demo portfolio · Sample content & AI-generated portrait</span>
          <a href="#contact">Let’s make something meaningful ↗</a>
        </div>
      </div>
    </footer>
  )
}
