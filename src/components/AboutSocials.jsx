import React from 'react';
import {
  
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

const socialLinks = [
 
  {
    link: 'https://github.com/thomsonxavier',
    text: 'Follow on GitHub',
    icon: FaGithub,
  },
  {
    link: 'https://www.linkedin.com/in/thomson-xavier-372090212/',
    text: 'Follow on LinkedIn',
    icon: FaLinkedin,
  },
  {
    link: 'https://www.instagram.com/thomson_tom0/',
    text: 'Follow on Instagram',
    icon: FaInstagram,
  },
  {
    link: 'mailto:thomson0@yahoo.com',
    text: 'thomson0@yahoo.com',
    icon: FaEnvelope,
  },
];

const AboutSocials = ({type}) => {
  return (
    <div className={`w-full lg:w-2/5 ${type === 'contact' ? 'ml-0 lg:ml-6' :''}`}>
      {socialLinks.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.link}
          target="_blank"
          rel="noreferrer"
          className={`flex justify-start gap-5 items-center p-3 ${
            socialLink.text === 'thomson0852@gmail.com' ? 'border-t py-3' : ''
          }`}
        >
          <socialLink.icon />
          {socialLink.text}
        </a>
      ))}
    </div>
  );
};

export default AboutSocials;
