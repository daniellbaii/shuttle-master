import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerFlex}`}>
        <div>
          <Link href="/" className="logo" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <Image src="/favicon_io/android-chrome-512x512.png" alt="Shuttle Master Logo" width={28} height={28} />
            <span>Shuttle Master</span>
          </Link>
          <p style={{marginTop:'1rem',color:'#4a5568'}}>Copyright &copy; Shuttle Master</p>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank"><Image src="/icons/youtube.png" alt="YouTube" className="social-icon" width={40} height={40} /></a>
            <a href="https://instagram.com" target="_blank"><Image src="/icons/instagram.png" alt="Instagram" className="social-icon" width={40} height={40} /></a>
            <a href="https://wa.me/61403429308" target="_blank"><Image src="/icons/whatsapp.png" alt="WhatsApp" className="social-icon" width={40} height={40} /></a>
            <a href="https://discord.com" target="_blank"><Image src="/icons/discord.png" alt="Discord" className="social-icon" width={40} height={40} /></a>
          </div>
        </div>
        <div>
          <h3 style={{fontWeight:700,marginBottom:'1rem'}}>Quick Links</h3>
          <p><Link className="footer-link" href="/">Home</Link></p>
          <p><Link className="footer-link" href="/shop">Shop</Link></p>
          <p><Link className="footer-link" href="/articles">Articles</Link></p>
        </div>
        <div>
          <h3 style={{fontWeight:700,marginBottom:'1rem'}}>Company</h3>
          <p><Link className="footer-link" href="/about">About Us</Link></p>
          <p><Link className="footer-link" href="/contact">Contact</Link></p>
        </div>
      </div>
    </footer>
  )
}
