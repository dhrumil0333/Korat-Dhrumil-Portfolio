import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, Palette, Zap } from 'lucide-react';
import React from 'react';
import img from '../img/profile.jpg'; // Ensure you have a profile image in this path

const Hero = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 90 },
    { name: 'Backend Development', icon: Code, level: 98 },
    { name: 'UI/UX Design', icon: Palette, level: 85 },
    { name: 'React & JavaScript', icon: Zap, level: 95 },
    { name: 'Node.js & Express', icon: Code, level: 97 },
    { name: 'Database Management', icon: Code, level: 95 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <div>
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-hot-pink to-purple bg-clip-text text-transparent">
                  Korat Dhrumil
                </span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              A passionate <span className="text-hot-pink">Full Stack Developer</span> & 
              <span className="text-purple"> UI/UX Designer</span> creating beautiful, 
              functional web experiences that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-hot-pink to-purple px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-hot-pink/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.button
                className="border border-gray-600 px-8 py-3 rounded-full text-gray-300 hover:border-hot-pink hover:text-hot-pink transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                window.open('/Korat Dhrumil -- Resume.pdf', '_blank');
              }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6">
              {[
                { Icon: Github, href: 'https://github.com/dhrumil0333', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/korat-dhrumil-740817320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:koratdhrumil0333@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-hot-pink transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile & Skills */}
          <div>
            <motion.div
              variants={itemVariants}
              className="relative mb-8"
            >
              <motion.div
                className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-hot-pink/20 to-purple/20 flex items-center justify-center"
                
              >
                <div className="w-72 h-72 rounded-full bg-dark-card flex items-center justify-center">
                  <img
                    src={img} 
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="text-hot-pink" size={20} />
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-hot-pink to-purple h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;