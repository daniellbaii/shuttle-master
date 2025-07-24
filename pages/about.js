import Head from 'next/head'
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Shuttle Master | About the Coach</title>
        <meta name="description" content="Learn about Coach Eveshgaran and his philosophy." />
      </Head>
      <section className="about-section section-padding">
        <div className="container">
          <h1 className="text-center" style={{fontSize:'2.5rem',marginBottom:'2rem'}}>About the Coach</h1>
          <div style={{maxWidth:'800px',margin:'0 auto',textAlign:'left'}}>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,marginBottom:'2rem'}}>
              <strong>Eveshgaran “Evesh” Vasigaran</strong> is a former Malaysian national badminton player and one of Western Australia's leading coaches, bringing over 15 years of international playing and coaching experience to the court. Currently based in Perth, he combines elite-level knowledge with a genuine passion for helping players of all levels improve.
            </p>
            <div className="section-badge">Career</div>
            <h3 style={{fontSize:'1.3rem',color:'var(--text-primary)',marginTop:'1rem',marginBottom:'1rem'}}>From National Athlete to International Competitor</h3>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8}}>
              Born and raised in Malaysia, Eveshgaran earned his place on the <strong>Malaysian national senior team</strong>, where he competed professionally in BWF-sanctioned tournaments across Asia and Oceania. During his career, he achieved a <strong>world ranking of No. 227</strong> in Men's Singles and won over <strong>45 international matches</strong>.
            </p>
            <ul style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,margin:'1.5rem 0 2rem 2rem',listStyleType:'disc'}}>
              <li>Semi-finalist at the 2017 Nepal International Series (Mixed Doubles)</li>
              <li>Quarter-finalist at the 2018 Bangladesh International Challenge</li>
              <li>Seeded competitor at events like the 2019 Waikato International</li>
            </ul>
            <div className="section-badge">Leadership</div>
            <h3 style={{fontSize:'1.3rem',color:'var(--text-primary)',marginTop:'1rem',marginBottom:'1rem'}}>Leadership in Western Australia</h3>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,marginBottom:'2rem'}}>
              Now based in Perth, Eveshgaran is currently the <strong>No. 1 ranked Men's Singles player in Western Australia</strong>. He serves as <strong>Senior Pro and Team Captain</strong> of the PBX Badminton Team at Perth Badminton Arena, where he also mentors rising talent and promotes high-performance training.
            </p>
            <div className="section-badge">Philosophy</div>
            <h3 style={{fontSize:'1.3rem',color:'var(--text-primary)',marginTop:'1rem',marginBottom:'1rem'}}>Coaching Philosophy</h3>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8}}>
              As founder of <strong>Shuttle Master</strong>, Eveshgaran's coaching philosophy is centered on helping players <strong>play smarter, not just harder</strong>. His training focuses on:
            </p>
            <ul style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,margin:'1.5rem 0 2rem 2rem',listStyleType:'disc'}}>
              <li>Technical precision and footwork</li>
              <li>Tactical decision-making</li>
              <li>Strength and conditioning</li>
              <li>Mental confidence and discipline</li>
            </ul>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,marginBottom:'2rem'}}>
              He works with players of all levels — from beginners to tournament athletes — always bringing energy, structure, and purpose to every session.
            </p>
            <div className="section-badge">Community</div>
            <h3 style={{fontSize:'1.3rem',color:'var(--text-primary)',marginTop:'1rem',marginBottom:'1rem'}}>Community Engagement & Recognition</h3>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8,marginBottom:'1rem'}}>
              Eveshgaran plays an active role in Western Australia's badminton scene. He regularly coaches at Perth Badminton Arena, leads community programs, mentors junior athletes, and participates in local tournaments. His presence in the badminton community is both inspiring and impactful.
            </p>
            <p style={{fontSize:'1.1rem',color:'var(--text-secondary)',lineHeight:1.8}}>
              Whether you're just starting out or looking to elevate your performance, <strong>Coach Evesh</strong> brings the international experience, coaching expertise, and dedication needed to help you succeed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
