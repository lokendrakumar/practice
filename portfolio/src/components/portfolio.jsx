import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

// Hero component
const Hero = () => {
  return (
    <section id="hero">
      <h1>Welcome to my portfolio</h1>
      <p>I'm a full-stack developer specializing in React and Node.js</p>
    </section>
  );
}

// About component
const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <p>I am a self-taught developer with a passion for building efficient and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly learning and expanding my skillset. When I'm not coding, you can find me hiking, playing music, or reading a good book.</p>
    </section>
  );
}

// Services component
const Services = () => {
  return (
    <section id="services">
      <h2>What I offer</h2>
      <ul>
        <li>Web development</li>
        <li>Mobile app development</li>
        <li>API development</li>
        <li>Consulting</li>
      </ul>
    </section>
  );
}

// Contact form component
const ContactForm = () => {
  return (
    <form id="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

// Main app component
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
