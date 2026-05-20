import tituloImg from '../assets/titulo.png'
import homeImages from '../homeImages'
import { EditionLink, EditionNavLink } from '@shared/components/EditionContext'
import ParticleButton from '@shared/components/ParticleButton'


export default function Home() {
  return (
    <main className="page">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content fade-in">
          <img src={tituloImg} alt="Vaelthor — Spin-off Pepeland II" className="hero-logo" />
          <p className="hero-sub">Las Tierras Olvidadas aguardan.<br />El pasado no descansa.</p>
          <div className="hero-ctas">
            <ParticleButton color="#f59e0b">
              <EditionLink to="/historia" className="btn btn-gold">▶ EXPLORAR EL LORE</EditionLink>
            </ParticleButton>
            <ParticleButton color="#94a3b8">
              <EditionLink to="/misiones" className="btn">⚔ MIS MISIONES</EditionLink>
            </ParticleButton>
          </div>
          <p className="hero-scroll">▼ SCROLL PARA CONTINUAR ▼</p>
        </div>
      </section>

      {/* 01 Historia */}
      <section className="home-section" id="historia">
        <div className="container">
          <div className="home-section-inner">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 01</span>
              <h2 className="px-title">Historia</h2>
              <p className="section-desc">
                Vaelthor no siempre fue un páramo. Descubre las eras que moldearon
                estas tierras, los eventos que las fracturaron y los secretos
                enterrados bajo la ceniza.
              </p>
              <EditionLink to="/historia" className="btn">▶ LEER LA HISTORIA</EditionLink>
            </div>
            <div className="section-panel fade-in">{homeImages.historia ? <img src={homeImages.historia} alt="Mapa de Vaelthor" /> : 'Imagen / Mapa de Vaelthor'}</div>
          </div>
        </div>
      </section>

      {/* 02 Facciones */}
      <section className="home-section" id="facciones">
        <div className="container">
          <div className="home-section-inner reverse">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 02</span>
              <h2 className="px-title">Facciones</h2>
              <p className="section-desc">
                Tres facciones pugnan por el control de las tierras olvidadas.
                Conoce sus creencias, sus alianzas y el poder que cada una guarda.
              </p>
              <EditionLink to="/facciones" className="btn">▶ VER FACCIONES</EditionLink>
            </div>
            <div className="section-panel fade-in">{homeImages.facciones ? <img src={homeImages.facciones} alt="Las facciones" /> : 'Arte de las 3 facciones'}</div>
          </div>
        </div>
      </section>

      {/* 03 Tutorial */}
      <section className="home-section" id="tutorial">
        <div className="container">
          <div className="home-section-inner">
            <div className="section-text fade-in">
              <span className="section-tag">CAPÍTULO 03</span>
              <h2 className="px-title">Tutorial</h2>
              <p className="section-desc">
                Primera vez en Vaelthor? Aprende a conectarte, unirte a una facción
                y dominar las mecánicas con nuestras guías paso a paso.
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
