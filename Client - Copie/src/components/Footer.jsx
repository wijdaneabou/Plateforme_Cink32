
import '../styles/Footer.css'; // Assure-toi que le fichier CSS est bien importé
import facebook from '../assets/facebook.png'
import ex from '../assets/ex.png'
import youtube from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import cink from '../assets/cink.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        <img src={cink} className='cink' alt='cink icon'></img><br />
          <p style={{color:"#064576" , fontWeight:"bold"}}>Join our newsletter to stay up to date on the latest features and releases.</p>
          <div className="email-subscribe">
  <input type="email" className="email-input" placeholder="Enter your email" />
  <button className="subscribe-button">Subscribe</button>
</div>

          <p style={{color:"#064576" , fontWeight:"bold"}}>
            By subscribing, you agree to our <a href="/privacy" style={{color:"#064576" , fontWeight:"bold"}}>Privacy Policy</a> and consent to
            receive updates from our company.
          </p>
        </div>

        <div className="footer-section ">
         
          <ul style={{color:"black"}}>
            <li style={{color:"black"}}><a href="/courses">Explore Courses</a></li><br />
            <li><a href="/events">Join Events</a></li><br />
            <li><a href="/events">Connect Community</a></li><br />
            <li><a href="/events">Advance Career</a></li><br />
            <li><a href="/events">Shape Future</a></li>
            {/* ... other list items ... */}
          </ul>
        </div>

        <div className="footer-section-icons">
          <h3>Follow us</h3>
          <a href="https://www.facebook.com/CINK.Morocco?mibextid=ZbWKwL" target="_blank">
          <img src={facebook} className='facebook' alt='facebook icon'></img>
          </a><br />

          <img src={ex} className='facebook'  alt='ex icon'></img><br />
          <img src={youtube} className='facebook'  alt='youtube icon'></img><br />
          
          <a href="https://www.linkedin.com/showcase/cinkmorocco/?originalSubdomain=ma" target="_blank">
          <img src={linkedin} className='facebook' alt='instagram icon'></img>
          </a><br />


          <a href="https://www.instagram.com/cink.morocco?igsh=MTN1M3d3eHR5Ym5hMQ==" target="_blank">
          <img src={instagram} className='facebook' alt='instagram icon'></img>
          </a>
        </div>
      </div>
      
<hr />
<footer className="footer ">
  <div className="footer-bottom">
    <div className="footer-left">
      <p style={{color:"#0563AC" , fontWeight:"bold"}}>© 2024 CINK. All rights reserved.</p>
    </div>
    <div className="footer-right">
      <a href="/terms">Terms and Conditions</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/cookies">Cookie Settings</a>
    </div>
  </div>
</footer>
</footer>
  );
}


export default Footer;
