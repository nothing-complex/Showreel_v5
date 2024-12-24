import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import BlurredText from './effects/BlurredText';
import Flicker from './effects/Flicker';

const Contact = () => {
  return (
    <section className="relative py-12 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <Flicker>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <BlurredText>
              <h2 className="font-archivo-narrow font-bold text-4xl text-cream mb-8 tracking-wider">
                GET IN TOUCH
              </h2>
            </BlurredText>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              className="h-px bg-coral mb-8 mx-auto max-w-md"
              transition={{ duration: 1 }}
            />

            <BlurredText>
              <p className="text-cream/80 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
                Looking to collaborate on a project or interested in discussing potential opportunities? 
                I'd love to hear from you.
              </p>
            </BlurredText>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.a
                href="mailto:luka@lukakauzlaric.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg 
                  border border-cream/10 hover:border-cream/20 transition-colors duration-300"
              >
                <Mail size={20} className="text-coral" />
                <span className="text-cream tracking-wider">luka@lukakauzlaric.com</span>
              </motion.a>

              <motion.a
                href="tel:+4550138337"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm px-6 py-4 rounded-lg 
                  border border-cream/10 hover:border-cream/20 transition-colors duration-300"
              >
                <Phone size={20} className="text-coral" />
                <span className="text-cream tracking-wider">+45 50 13 83 37</span>
              </motion.a>
            </div>
          </motion.div>
        </Flicker>
      </div>
    </section>
  );
};

export default Contact;
