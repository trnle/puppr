import './Footer.css';

function Footer() {
  return (
    <footer className='footer-container'>
      <div id='by-line'>
        Developed by Tran Le
        <span role='img' aria-label='bee'> &#128029;</span>
      </div>
      <div className='links'>
        <a href='https://github.com/trnle/'>
          <i className="fab fa-github"></i>
        </a>
        <a href='https://www.linkedin.com/in/trnle/'>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;