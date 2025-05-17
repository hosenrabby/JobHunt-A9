// Footer.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-base-100 py-10 border-t border-base-300">
      <div className=" px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className='w-1/3'>
                <img src="../../public/assets/logosm.png" alt="" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            JobHunt is the heart of the Job Search community and the best resource to discover and connect with Recruiters and jobs worldwide.
          </p>
          <div className="flex gap-3 text-blue-600 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-2">Community</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/credit">Credit</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* More & Download App */}
        <div>
          <h3 className="font-semibold mb-2">More</h3>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
