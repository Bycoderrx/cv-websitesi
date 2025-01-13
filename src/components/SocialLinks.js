// src/components/SocialLinks.js
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/alaattinozansahin/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
