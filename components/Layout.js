import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Get in the kitchen</span>
              <span>Like a cook, not a chef</span>
            </h1>
            <h2>Walk, dont run ;)</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright © Ricardo Lamadrid 2022 :)</p>
      </footer>
    </div>
  )
}