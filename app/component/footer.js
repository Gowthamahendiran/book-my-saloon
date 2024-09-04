import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="border-t border-black shadow-lg bg-black text-white">
      {/* Main container with flexbox */}
      <div className="container flex flex-wrap justify-between px-8 py-6 mt-10 mb-10">
        {/* Travel Website Info */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="font-bold text-2xl mb-2 mt-4 text-yellow-300">Book My Saloon</h2>
          <p className="w-60"> Book your salon appointment online, skip the wait, and step into a world of beauty at your convenience.</p>
        </div>

        {/* Discover Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="font-bold text-2xl mb-2 mt-4 text-yellow-300">Discover</h2>
          <div className="flex flex-col space-y-1">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Tours</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="font-bold text-2xl mb-2 mt-4 text-yellow-300">Quick Links</h2>
          <div className="flex flex-col space-y-1">
            <Link href="/">Gallery</Link>
            <Link href="/">Login</Link>
            <Link href="/">Register</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="font-bold text-2xl mb-2 mt-4 text-yellow-300">Contact</h2>
          <p>gowthamahendiran@gmail.com</p>
          <p>+91-6382728456</p>
          <p>
            <a href="https://www.linkedin.com/in/gowtham-mahendiran" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="bg-gray-900 flex justify-center md:justify-end items-center py-4">
        <div className="flex space-x-4 mr-4">
          <a
            href="https://www.linkedin.com/in/gowtham-mahendiran"
            className="flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Gowthamahendiran"
            className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          </a>
          <a
            href="mailto:gowthamahendiran@gmail.com"
            className="flex items-center justify-center w-8 h-8 bg-white text-red-600 rounded-full"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
