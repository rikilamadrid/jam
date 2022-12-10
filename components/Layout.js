import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Top recipes for the season</span>
              <span>Be a cook, not a chef</span>
            </h1>
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