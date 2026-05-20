import { useEdition } from './EditionContext'

function DiscordIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.27 5.33A19.18 19.18 0 0 0 14.4 4l-.22.5a17.65 17.65 0 0 1 4.53 1.42 14.96 14.96 0 0 0-12.42 0A17.65 17.65 0 0 1 10.82 4.5L10.6 4a19.18 19.18 0 0 0-4.87 1.33C2.76 9.7 1.96 13.93 2.36 18.1c2 1.46 3.95 2.36 5.86 2.95l.44-.78a12.86 12.86 0 0 1-2.07-.97l.16-.13a13.65 13.65 0 0 0 11.7 0l.16.13a12.86 12.86 0 0 1-2.07.97l.44.78c1.91-.59 3.86-1.49 5.86-2.95.46-4.84-.81-9.04-3.61-12.77zM8.84 15.62c-1.16 0-2.11-1.06-2.11-2.36 0-1.3.93-2.36 2.11-2.36 1.18 0 2.13 1.07 2.11 2.36 0 1.3-.93 2.36-2.11 2.36zm6.32 0c-1.16 0-2.11-1.06-2.11-2.36 0-1.3.93-2.36 2.11-2.36 1.18 0 2.13 1.07 2.11 2.36 0 1.3-.93 2.36-2.11 2.36z"/>
    </svg>
  )
}

function YoutubeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.56 31.56 0 0 0 0 12a31.56 31.56 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.56 31.56 0 0 0 24 12a31.56 31.56 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  )
}

export default function Footer() {
  const { edition } = useEdition()
  const año = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-player-row">
          {/* Los dos botones sociales en un wrapper */}
          <div className="footer-socials">
            <a href={edition.discord} target="_blank" rel="noopener noreferrer"
               className="footer-social-btn footer-discord" aria-label="Discord" title="Discord">
              <DiscordIcon size={24} />
            </a>
            <a href="https://youtube.com/@pepeland" target="_blank" rel="noopener noreferrer"
               className="footer-social-btn footer-youtube" aria-label="YouTube" title="YouTube">
              <YoutubeIcon size={24} />
            </a>
          </div>

          {/* Spotify */}
          <div className="footer-spotify">
            <div className="footer-spotify-label">♪ B.S.O. DEL SERVER</div>
            <div className="footer-spotify-frame">
              <iframe
                src="https://open.spotify.com/embed/playlist/6036R6JWS63cTCy9Jt6nz5?theme=0"
                width="100%" height="80"
                style={{ border: 'none', display: 'block', borderRadius: 0 }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                loading="lazy" title="Banda sonora oficial"
              />
            </div>
          </div>
        </div>

        <div className="footer-credit">
          ⬡ {edition.nombre.toUpperCase()} · © {año} · PEPELAND
        </div>

      </div>
    </footer>
  )
}
