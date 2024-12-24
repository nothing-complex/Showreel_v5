import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Film, Palette, Video } from 'lucide-react';
import BlurredText from './effects/BlurredText';
import Flicker from './effects/Flicker';
import LogoCarousel from './ui/LogoCarousel';

const About = () => {
  const achievements = [
    {
      icon: Camera,
      title: 'VISUAL STORYTELLING',
      description: 'Certified colourist and video editor with extensive experience in editorial imagery, portraiture, and news photography.',
    },
    {
      icon: Film,
      title: 'CONTENT CREATION',
      description: 'Currently producing and editing video content for leading companies while creating still assets for major foundations and Getty Images.',
    },
    {
      icon: Video,
      title: 'TECHNICAL EXPERTISE',
      description: 'Proficient in Arri, Blackmagic, professional camera systems, lighting, rigging, and industry-standard software including DaVinci Resolve.',
    },
  ];

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-8">
        <Flicker>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {/* Bio Section */}
            <div className="relative">
              <BlurredText>
                <h2 className="font-archivo-narrow font-bold text-4xl text-cream mb-8 tracking-wider">
                  VISUAL STORYTELLER
                </h2>
              </BlurredText>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                className="h-px bg-coral mb-8"
                transition={{ duration: 1 }}
              />

              <BlurredText>
                <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                  A versatile Director of Photography and certified colourist with a rich background in visual storytelling. 
                  Currently based in Copenhagen, working with VML Studios while maintaining collaborations with global clients 
                  including the Bill and Melinda Gates Foundation and Getty Images special assignments team.
                </p>
              </BlurredText>

              <BlurredText>
                <p className="text-cream/80 text-lg leading-relaxed">
                  Passionate about health, sciences, and charitable work, with demonstrated ability to handle complex assignments 
                  requiring high degrees of management and client service. Bringing stories to life through a unique blend of 
                  technical expertise and creative vision.
                </p>
              </BlurredText>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-6">
              {achievements.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <BlurredText>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-cream/10
                        hover:border-cream/20 transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <Icon size={24} className="text-coral mt-1" />
                        <div>
                          <h3 className="font-archivo-narrow font-bold text-xl text-cream mb-2 tracking-wider">
                            {title}
                          </h3>
                          <p className="text-cream/70 leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </BlurredText>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logo Carousel */}
          <div className="mt-12">
            <LogoCarousel />
          </div>
        </Flicker>
      </div>
    </section>
  );
};

export default About;
