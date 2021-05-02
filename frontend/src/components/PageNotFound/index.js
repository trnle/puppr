import React from 'react';
import Footer from '../Footer';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import './PageNotFound.css';

function PageNotFound() {
  return(
    <div>
      <p>Sorry, the page you are looking for does not exist!</p>
      <Footer />
    </div>
  )
}

export default PageNotFound;