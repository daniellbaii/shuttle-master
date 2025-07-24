import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Articles() {
  return (
    <Layout>
      <Head>
        <title>Shuttle Master | Articles</title>
        <meta name="description" content="Badminton insights and tips." />
      </Head>
      <section className="section-padding" style={{background:'var(--bg-secondary)'}}>
        <div className="container">
          <div className="services-header">
            <div className="section-badge">Learn & Improve</div>
            <h2>Badminton Insights & Tips</h2>
            <p className="services-subtitle">Read expert advice, training articles, and strategy breakdowns to stay sharp on and off the court.</p>
          </div>
          <div className="coming-soon">Articles will be published here soon.</div>
        </div>
      </section>
    </Layout>
  )
}
