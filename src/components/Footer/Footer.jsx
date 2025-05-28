import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Container } from "../index";

function Footer() {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <Logo width="120px" />
              </Link>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Share your stories with the world. Join our community of writers and readers to discover amazing content from around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/rayy_inx" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
              
              <a href="https://github.com/ansarirayyan01" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white pb-3 border-b border-secondary-700">Site Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Home</Link>
              <Link to="/all-posts" className="text-secondary-300 hover:text-primary-400 transition-colors">All Posts</Link>
              <Link to="/add-post" className="text-secondary-300 hover:text-primary-400 transition-colors">Create Post</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white pb-3 border-b border-secondary-700">Support</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Help Center</Link>
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact Us</Link>
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">FAQs</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white pb-3 border-b border-secondary-700">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Cookie Policy</Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BlogSphere. All rights reserved by Rayyan Ansari.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Terms</Link>
            <Link to="/" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Privacy</Link>
            <Link to="/" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
