/*import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.scss'; // Ensure this path is correct

 const Footer=()=> {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">UMAR AKHTAR</h5>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
            <p><Link to="/">Product 1</Link></p>
            <p><Link to="/">Product 2</Link></p>
            
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
            <p><Link to="/">Your Account</Link></p>
            <p><Link to="/">Become an Affiliate</Link></p>
           
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>

          </div>
        </div>

     
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-8 col-lg-8">
            <div className="text-center">
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </Link>
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>

        
        <div className="row mt-4">
          <div className="col-md-12 text-center copyright">
            <p>© {year} Copyright:
              <Link to="/"> UmarAkhtar.com </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
*/ /*
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.scss'; // Ensure this path is correct



const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container text-center text-md-start">
      <div className="row text-center text-md-start">
       
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">UMAR AKHTAR</h5>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
          <p><Link to="https://www.facebook.com/">Product 1</Link></p>
          <p><Link to="https://www.facebook.com/">Product 2</Link></p>
          
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
          <p><Link to="https://www.google.com/">Your Account</Link></p>
          <p><Link to="https://www.youtube.com/">Become an Affiliate</Link></p>
         
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
          <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>

        </div>
      </div>

   
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-md-8 col-lg-8">
          <div className="text-center">
            <Link to="https://www.facebook.com/" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="https://www.twitter.com/" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="https://www.google.com/" className="social-icon">
              <FontAwesomeIcon icon={faGoogle} />
            </Link>
            <Link to="https://www.instagram.com/" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://www.linkedin.com/" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="https://www.github.com/" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </div>
      </div>

      
      <div className="row mt-4">
        <div className="col-md-12 text-center copyright">
          <p>© {year} Copyright:
            <Link to="/"> UmarAkhtar.com </Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Footer;

*/
/*import { useEffect, useState } from "react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../App.scss"; // Ensure this path is correct

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              UMAR AKHTAR
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <a href="/">Product 1</a>
            </p>
            <p>
              <a href="/">Product 2</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <a href="/">Your Account</a>
            </p>
            <p>
              <a href="/">Become an Affiliate</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-8 col-lg-8">
            <div className="text-center">
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center copyright">
            <p>
              © {year} Copyright:
              <a href="/"> UmarAkhtar.com </a>
              <button
                className={`scroll-to-top ${showScroll ? "show" : ""}`}
                onClick={scrollToTop}
              >
                <FaArrowUp />
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
*/

import { useEffect, useState, useCallback } from "react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../App.scss"; // Ensure this path is correct

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Use useCallback to ensure checkScrollTop is stable
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]); // Include checkScrollTop in the dependency array

  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              UMAR AKHTAR
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <a href="/">Product 1</a>
            </p>
            <p>
              <a href="/">Product 2</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </h5>
            <p>
              <a href="/">Your Account</a>
            </p>
            <p>
              <a href="/">Become an Affiliate</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-8 col-lg-8">
            <div className="text-center">
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center copyright">
            <p>
              © {year} Copyright:
              <a href="/"> UmarAkhtar.com </a>
              <button
                className={`scroll-to-top ${showScroll ? "show" : ""}`}
                onClick={scrollToTop}
              >
                <FaArrowUp />
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
