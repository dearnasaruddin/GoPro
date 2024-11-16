import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Banner_bottom from './Banner_bottom.jsx';
import SectionTwo from './SectionTwo.jsx';
import Section_Three from './Section_Three.jsx';
import TopLeading from './TopLeading.jsx';
import FooterLink from './FooterLink.jsx';
import Footer from './Footer.jsx';

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Banner_bottom />
    <SectionTwo />
    <Section_Three />
    <TopLeading />
    <FooterLink />
    <Footer/>
  </StrictMode>,
)
