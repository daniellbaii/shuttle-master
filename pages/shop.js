import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Shop() {
  return (
    <Layout>
      <Head>
        <title>Shuttle Master | Shop</title>
        <meta name="description" content="Purchase training programs and courses." />
      </Head>
      <section className="section-padding">
        <div className="container">
          <div className="services-header">
            <div className="section-badge">Online Store</div>
            <h2>Training Programs & Courses</h2>
            <p className="services-subtitle">Purchase downloadable resources, training guides, and exclusive course access to take your badminton to the next level.</p>
          </div>
          <div className="coming-soon">Shop feature coming soon.</div>
        </div>
      </section>
    </Layout>
  )
}
