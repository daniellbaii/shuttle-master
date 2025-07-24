import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Shuttle Master | Home</title>
        <meta name="description" content="Programs, articles, and resources built to help you play smarter, not just harder." />
      </Head>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content-left">
            <h1>Welcome to<br/>Shuttle Master.</h1>
            <p>Programs, articles, and resources built to help you play smarter, not just harder.</p>
            <div className="hero-buttons">
              <a href="#shop" className="btn-primary">Browse Programs</a>
              <a href="#articles" className="btn-secondary">Read Articles</a>
            </div>
          </div>
        </div>
      </section>
      <section id="shop" className="section-padding">
        <div className="container">
          <div className="services-header">
            <div className="section-badge">Online Store</div>
            <h2>Training Programs & Courses</h2>
            <p className="services-subtitle">Purchase downloadable resources, training guides, and exclusive course access to take your badminton to the next level.</p>
          </div>
          <div className="coming-soon">Shop feature coming soon.</div>
        </div>
      </section>
      <section id="articles" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
        <div className="container">
          <div className="services-header">
            <div className="section-badge">Learn & Improve</div>
            <h2>Badminton Insights & Tips</h2>
            <p className="services-subtitle">Read expert advice, training articles, and strategy breakdowns to stay sharp on and off the court.</p>
          </div>
          <div className="coming-soon">Articles will be published here soon.</div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="services-header">
            <div className="section-badge">Get In Touch</div>
            <h2>Contact Information</h2>
            <p className="services-subtitle">Have questions? Ready to start your badminton journey? We're here to help.</p>
          </div>
          <div className="grid-auto-fit" style={{marginTop: '4rem'}}>
            <div className="card">
              <div className="card-icon">📧</div>
              <h3 className="card-title">Email</h3>
              <p className="card-subtitle">Get in touch for bookings and questions</p>
              <p className="card-link">coach@shuttlemaster.com</p>
            </div>
            <a href="https://wa.me/61403429308" className="card card-link-wrapper" target="_blank" rel="noreferrer">
              <div className="card-icon">📱</div>
              <h3 className="card-title">Phone</h3>
              <p className="card-subtitle">Call or text us on WhatsApp for quick responses</p>
              <p className="card-link">+61 403 429 308</p>
            </a>
            <a href="https://www.google.com/maps?q=Perth+Badminton+Arena" className="card card-link-wrapper" target="_blank" rel="noreferrer">
              <div className="card-icon">📍</div>
              <h3 className="card-title">Location</h3>
              <p className="card-subtitle">Training sessions held at</p>
              <p className="card-link">Perth Badminton Arena</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
