import { EditionLink } from '@shared/components/EditionContext'
import homeImages from '../homeImages'
import ParticleButton from '@shared/components/ParticleButton'
import tituloImg from '../assets/titulo.png'

export default function Home() {
  return (
    <main className="page">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content fade-in">
          <p className="hero-eyebrow" style={{
            fontFamily: 'var(--font-px)',
            fontSize: '10px',
            letterSpacing: '4px',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
          }}>
            ▶ TEMPORADA 2024 · EL HERALDO CELESTE
          </p>

          <img src={tituloImg} alt="Pepeland 2" className="hero-logo" />

          <p className="hero-sub">
            Un cuerpo celeste se aproxima.<br />
            Magos, Coalición y los Ocultos lo esperan.
          </p>

          <div className="hero-ctas">
            <ParticleButton color="#d4742a">
              <EditionLink to="/historia" className="btn btn-gold">▶ EXPLORAR EL LORE</EditionLink>
            </ParticleButton>
            <ParticleButton color="#c4a37a">
              <EditionLink to="/misiones" className="btn">⚔ MIS MISIONES</EditionLink>
            </ParticleButton>
          </div>

          <p className="hero-scroll">▼ SCROLL PARA CONTINUAR ▼</p>
        </div>
      </section>

      <section className="home-section" id="historia">
        <div className="container">
          <div className="home-section-inner">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 01</span>
              <h2 className="px-title">Historia</h2>
              <p className="section-desc">
                Desde la Era Dormida hasta la llegada del Heraldo. Cuatro eras de gloria, guerra
                y olvido que han llevado al continente al borde de una nueva ruptura.
              </p>
              <EditionLink to="/historia" className="btn">▶ LEER LA HISTORIA</EditionLink>
            </div>
            <div className="section-panel fade-in">{homeImages.historia ? <img src={homeImages.historia} alt="Mapa del continente" /> : 'Mapa del continente'}</div>
          </div>
        </div>
      </section>

      <section className="home-section" id="facciones">
        <div className="container">
          <div className="home-section-inner reverse">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 02</span>
              <h2 className="px-title">Facciones</h2>
              <p className="section-desc">
                Los Magos custodian la esencia arcana. La Coalición domina la tecnología.
                Los Ocultos observan desde las sombras. Elige tu bando.
              </p>
              <EditionLink to="/facciones" className="btn">▶ VER FACCIONES</EditionLink>
            </div>
            <div className="section-panel fade-in">{homeImages.facciones ? <img src={homeImages.facciones} alt="Las facciones" /> : 'Emblemas de las 3 facciones'}</div>
          </div>
        </div>
      </section>

      <section className="home-section" id="tutorial">
        <div className="container">
          <div className="home-section-inner">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 03</span>
              <h2 className="px-title">Tutorial</h2>
              <p className="section-desc">
                Aprende a conectarte, unirte a una facción y entender las mecánicas
                que rigen el continente en esta temporada.
              </p>
              <EditionLink to="/tutorial" className="btn">▶ VER TUTORIALES</EditionLink>
            </div>
            <div className="section-panel fade-in">{homeImages.tutorial ? <img src={homeImages.tutorial} alt="Tutorial" /> : 'Miniatura del tutorial'}</div>
          </div>
        </div>
      </section>

    </main>
  )
}
