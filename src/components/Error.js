import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Error.css';


export default function Error() {
  return (
    <>
      <Header />
      <div className='error'>
        <div>
          <h1>
            404
          </h1>
          <p>
            NOT FOUND
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
