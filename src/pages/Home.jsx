import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';
import { hasDownloadUrl, DOWNLOAD_URL } from '../config';

export default function Home({ session }) {
  return (
    <div className="home">
      <ThemeToggle compact />

      <div className="home__content">
        <Logo size="large" />

        <h1 className="home__tagline">Your tasks. Anywhere.</h1>
        <p className="home__subline">Stay organized across your PYLO app and web dashboard.</p>

        <div className="home__actions">
          {hasDownloadUrl() ? (
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              Download App
            </a>
          ) : (
            <button type="button" className="btn btn--primary btn--lg" disabled>
              Download App
            </button>
          )}

          {session ? (
            <Link to="/dashboard" className="btn btn--outline btn--lg">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn--outline btn--lg">
              Login
            </Link>
          )}
        </div>

        {!hasDownloadUrl() ? (
          <p className="home__note">
            Download link will appear once VITE_PYLO_DOWNLOAD_URL is set.
          </p>
        ) : null}
      </div>
    </div>
  );
}