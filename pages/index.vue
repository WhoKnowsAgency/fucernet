<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="container">
        <nav class="nav">
          <div class="logo-section">
            <div class="logo-circle">
              <span class="logo-text">F</span>
            </div>
            <span class="brand-name">FucerNet</span>
          </div>
          <nuxt-link :to="{ name: 'login' }" tag="button" class="btn-login">
            Iniciar Sesión
          </nuxt-link>
        </nav>
      </div>

      <div class="container hero-content">
        <div class="hero-grid">
          <div class="hero-text">
            <div class="badge">
              <span role="img" aria-label="cohete">🚀</span> Ahora con
              Inteligencia Artificial
            </div>

            <h1 ref="pageFocusTarget" class="hero-title">
              La plataforma definitiva para profesionales de la registración
            </h1>

            <p class="hero-subtitle">
              Consultá normativa registral, chateá con nuestro Digesto IA y
              accedé a capacitación continua. Todo en un solo lugar.
            </p>

            <nuxt-link
              :to="{ name: 'seleccione-su-plan' }"
              tag="button"
              class="btn-cta-primary"
            >
              Comenzar Prueba Gratuita
              <svg
                class="icon-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </nuxt-link>

            <p class="trial-info">
              ✓ 30 días de prueba gratuita · Cancela cuando quieras
            </p>
          </div>

          <div class="hero-feature-box">
            <div class="feature-box">
              <div class="feature-items">
                <div class="feature-item">
                  <svg
                    class="feature-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>
                  <span>Digesto IA disponible 24/7</span>
                </div>
                <div class="feature-item">
                  <svg
                    class="feature-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    />
                  </svg>
                  <span>Base normativa actualizada</span>
                </div>
                <div class="feature-item">
                  <svg
                    class="feature-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>Capacitación continua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Para quién es -->
    <section class="section-audience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            Diseñado para profesionales del sistema registral
          </h2>
          <p class="section-subtitle">
            FucerNet está pensado específicamente para quienes trabajan en el
            ecosistema registral argentino
          </p>
        </div>

        <div class="audience-grid">
          <div class="audience-card">
            <div class="audience-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 class="audience-title">Registradores y Funcionarios</h3>
            <p class="audience-description">
              Accedé rápidamente a normativa técnica registral actualizada y
              consultá el Digesto IA para resolver dudas operativas al instante.
            </p>
          </div>

          <div class="audience-card">
            <div class="audience-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 class="audience-title">Instituciones y Peticionarios</h3>
            <p class="audience-description">
              Consultá requisitos, normativa vigente y accedé a capacitación
              especializada para optimizar tus trámites registrales.
            </p>
          </div>

          <div class="audience-card">
            <div class="audience-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 class="audience-title">Abogados y Escribanos</h3>
            <p class="audience-description">
              Mantente actualizado con jurisprudencia relevante, circulares y
              disposiciones. Todo organizado y fácil de consultar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Funcionalidades Principales -->
    <section class="section-features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Todo lo que necesitás en un solo lugar</h2>
          <p class="section-subtitle">
            Herramientas profesionales para trabajar más eficientemente
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Digesto IA</h3>
              <p class="feature-description">
                Chateá con nuestro asistente de inteligencia artificial
                especializado en normativa registral. Obtené respuestas precisas
                basadas en el Digesto de Normas Técnico Registrales.
              </p>
            </div>
          </div>

          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Base Normativa Completa</h3>
              <p class="feature-description">
                Buscá y consultá normas técnico registrales actualizadas. Accedé
                a circulares, disposiciones y jurisprudencia con resúmenes
                ejecutivos de cada publicación.
              </p>
            </div>
          </div>

          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Biblioteca Personal</h3>
              <p class="feature-description">
                Guardá circulares, disposiciones y contenido relevante en tu
                biblioteca personal. Organizá tu material de consulta frecuente
                para acceder rápidamente.
              </p>
            </div>
          </div>

          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Consultas Normativas</h3>
              <p class="feature-description">
                Enviá consultas técnicas directamente a nuestro equipo
                especializado. Recibí respuestas profesionales de expertos en
                registración.
              </p>
            </div>
          </div>

          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Café Virtual Mensual</h3>
              <p class="feature-description">
                Participá de encuentros mensuales donde se analizan en forma
                académica y pedagógica las normas técnico registrales dictadas
                en el último mes.
              </p>
            </div>
          </div>

          <div class="feature-block">
            <div class="feature-icon-wrapper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Capacitación Continua</h3>
              <p class="feature-description">
                Accedé a descuentos en Diplomaturas y Cursos de Capacitación
                Continua. Inscribite sin costo a jornadas de capacitación para
                el uso de la plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section-pricing">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Precio de lanzamiento especial</h2>
          <p class="section-subtitle">
            Aprovechá nuestra oferta de relanzamiento con 30 días de prueba
            gratuita
          </p>
        </div>

        <div class="pricing-container">
          <div class="pricing-card">
            <div class="pricing-content">
              <div class="pricing-header">
                <div class="pricing-badge">
                  <span role="img" aria-label="Cañon de confeti">🎉</span>
                  OFERTA DE LANZAMIENTO
                </div>
                <div class="pricing-amount">
                  <span class="price">$18,000</span>
                  <span class="period">/mes</span>
                </div>
                <p class="pricing-note">
                  Precio inicial por los primeros 3 meses
                </p>
              </div>

              <div class="pricing-features">
                <div
                  v-for="(feature, index) in pricingFeatures"
                  :key="index"
                  class="pricing-feature"
                >
                  <svg
                    class="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{{ feature }}</span>
                </div>
              </div>

              <nuxt-link
                :to="{ name: 'seleccione-su-plan' }"
                tag="button"
                class="btn-pricing"
              >
                Comenzar 30 Días Gratis
              </nuxt-link>

              <p class="pricing-footer">Cancela cuando quieras</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="section-social-proof">
      <div class="container">
        <div class="social-proof-content">
          <p class="social-proof-label">Desarrollada por</p>
          <h3 class="social-proof-title">
            Fundación Centro de Estudios Registrales
          </h3>
          <p class="social-proof-description">
            Respaldado por la experiencia y el conocimiento de la institución
            líder en estudios registrales de Argentina
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-final-cta">
      <div class="container-narrow">
        <h2 class="final-cta-title">Empezá hoy mismo con tu prueba gratuita</h2>
        <p class="final-cta-subtitle">
          Experimentá todas las funcionalidades de FucerNet durante 30 días sin
          costo.
        </p>
        <nuxt-link
          :to="{ name: 'seleccione-su-plan' }"
          tag="button"
          class="btn-final-cta"
        >
          Comenzar Ahora
          <svg
            class="icon-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <div class="logo-circle-small">
              <span class="logo-text-small">F</span>
            </div>
            <span class="brand-name">FucerNet</span>
          </div>
          <p class="footer-description">
            La plataforma profesional para el sistema registral argentino
          </p>
          <p class="footer-copyright">
            © 2025 FucerNet · Fundación Centro de Estudios Registrales
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: "signup",
  auth: false,
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (!process.client) return;
      vm.$announcer.set(
        `${vm.title} ${vm.$announcer.options.complementRoute}`,
        vm.$announcer.options.politeness
      );
      vm.$utils.moveFocus(vm.$refs.pageFocusTarget);
    });
  },
  data() {
    return {
      pricingFeatures: [
        "Acceso completo al Digesto IA",
        "Base normativa actualizada permanentemente",
        "Biblioteca personal ilimitada",
        "Consultas normativas al equipo",
        "Café Virtual mensual incluido",
        "Descuentos en capacitaciones",
        "Soporte prioritario",
      ],
    };
  },
  mounted() {
    // Load Bitter font from Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  },
};
</script>

<style lang="sass">
// Viejo CSS
// @import 'sass/pages/index.sass'
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  min-height: 100vh;
  background: white;
  font-family: "Bitter", serif;
}

/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.container-narrow {
  max-width: 896px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #34766a 0%, #2a5f56 100%);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #34766a;
}

.brand-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.btn-login {
  background: white;
  color: #34766a;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-login:hover {
  background: #f3f4f6;
}

.hero-content {
  padding: 5rem 2rem 8rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-text {
  color: white;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .hero-subtitle {
    font-size: 1.5rem;
  }
}

.btn-cta-primary {
  background: white;
  color: #34766a;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1.25rem 3rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
}

.btn-cta-primary:hover {
  background: #f3f4f6;
}

.icon-arrow {
  width: 1.5rem;
  height: 1.5rem;
}

.trial-info {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
}

.hero-feature-box {
  display: none;
}

@media (min-width: 1024px) {
  .hero-feature-box {
    display: block;
    position: relative;
  }
}

.feature-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-size: 1.125rem;
}

.feature-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

/* Sections */
.section-audience {
  padding: 5rem 0;
  background: #f9fafb;
}

.section-features {
  padding: 5rem 0;
  background: white;
}

.section-pricing {
  padding: 5rem 0;
  background: #f9fafb;
}

.section-social-proof {
  padding: 5rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #34766a;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 768px;
  margin: 0 auto;
}

/* Audience Grid */
.audience-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .audience-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.audience-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s;
}

.audience-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: rgba(52, 118, 106, 0.1);
}

.audience-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(52, 118, 106, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.audience-icon svg {
  width: 32px;
  height: 32px;
  stroke: #34766a;
}

.audience-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #34766a;
  margin-bottom: 1rem;
}

.audience-description {
  color: #6b7280;
  line-height: 1.5;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-block {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s;
}

.feature-block:hover {
  background: #f9fafb;
}

.feature-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 0.75rem;
  background: #34766a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.feature-block:hover .feature-icon-wrapper {
  transform: scale(1.1);
}

.feature-icon-wrapper svg {
  width: 28px;
  height: 28px;
  stroke: white;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #34766a;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #6b7280;
  line-height: 1.5;
}

/* Pricing */
.pricing-container {
  max-width: 672px;
  margin: 0 auto;
}

.pricing-card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 4px solid #34766a;
}

.pricing-content {
  padding: 3rem;
}

@media (min-width: 1024px) {
  .pricing-content {
    padding: 3rem;
  }
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-badge {
  display: inline-block;
  background: rgba(52, 118, 106, 0.1);
  color: #34766a;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.pricing-amount {
  margin-bottom: 1.5rem;
}

.price {
  font-size: 4rem;
  font-weight: 800;
  color: #34766a;
}

@media (min-width: 1024px) {
  .price {
    font-size: 4.5rem;
  }
}

.period {
  font-size: 1.5rem;
  color: #6b7280;
}

.pricing-note {
  font-size: 1.125rem;
  color: #6b7280;
}

.pricing-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.pricing-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.check-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  stroke: #34766a;
}

.pricing-feature span {
  color: #374151;
  font-size: 1.125rem;
}

.btn-pricing {
  width: 100%;
  background: #34766a;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 1.25rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-pricing:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.pricing-footer {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1.5rem;
}

/* Social Proof */
.social-proof-content {
  text-align: center;
}

.social-proof-label {
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.social-proof-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #34766a;
  margin-bottom: 1rem;
}

.social-proof-description {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 768px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Final CTA */
.section-final-cta {
  padding: 5rem 1rem;
  background: #34766a;
}

.final-cta-title {
  font-size: 2.25rem;
  line-height: 1.1;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {
  .final-cta-title {
    font-size: 3rem;
  }
}

.final-cta-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.btn-final-cta {
  background: white;
  color: #34766a;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 1.25rem 3rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.btn-final-cta:hover {
  background: #f3f4f6;
  transform: scale(1.05);
}

/* Footer */
.footer {
  background: #111827;
  color: white;
  padding: 3rem 0;
}

.footer-content {
  text-align: center;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo-circle-small {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text-small {
  font-size: 1.25rem;
  font-weight: 800;
  color: #34766a;
}

.footer-description {
  color: #9ca3af;
  margin-bottom: 1rem;
}

.footer-copyright {
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
