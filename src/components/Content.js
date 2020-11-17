import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Content.css';


export default function Content() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>
            Brooklyn
          </h1>
          <p>
            The Brooklyn Nets Since 1967
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}