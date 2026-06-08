import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaInstagram, FaGit } from 'react-icons/fa';
import { loginIcon } from '../../utils/Icons';
const About = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const isDashboard = location.pathname === '/';

  return (
    <section className="bg-blue-100 py-16 ">
      <div className="container mx-auto">
       
        
      </div>
    </section>
  );
};

export default About;
