import React from 'react';
import { motion } from 'framer-motion';
import { Camera, User, Film, Mail } from 'lucide-react';
import BlurredText from '../effects/BlurredText';

const navItems = [
  { icon: Camera, label: 'WORK' },
  { icon: User, label: 'ABOUT' },
  { icon: Film, label: 'SHOWREEL' },
  { icon: Mail, label: 'CONTACT' },
];

const NavItems = () => {
  return (
    <ul className="flex space-x-8">
      {navItems.map(({ icon: Icon, label }) => (
        <li key={label}>
          <BlurredText intensity="low">
            <motion.button
              className="flex items-center space-x-2 text-cream/80 hover:text-cream transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={16} className="opacity-80" />
              <span className="font-archivo-narrow font-bold text-sm tracking-wider">
                {label}
              </span>
            </motion.button>
          </BlurredText>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;