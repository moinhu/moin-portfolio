// src/components/Layout.jsx
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
<ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>

export default function Layout({ children }) {
  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        style={{
          position: 'sticky',
          top: 0,
          background: 'var(--deep-blue)',
          padding: '1rem 2rem',
          zIndex: 1000,
          display: 'flex',
          gap: '1.5rem'
        }}
      >
        {['Projects','Contact'].map(link => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: 'var(--accent-orange)' }}
            style={{ color: '#fff', fontWeight: 600 }}
          >
            {link}
          </motion.a>
        ))}
      </motion.nav>
      <main>{children}</main>
      <footer style={{ textAlign:'center', padding:'1rem', fontSize:12 }}>
        © {new Date().getFullYear()} Mo Moin — Built with MERN
      </footer>
    </>
  );
}
