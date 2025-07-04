import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Engineering",
      college: "Devang Patel Institute of Advance Technology and Research",
      year: "2023-2026  ",
      description: "Specialized in Software Engineering and Web Development"
    },
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
    <section id="about" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-hot-pink to-purple bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer with a love for creating beautiful, functional web applications. 
              My journey in tech started with curiosity and has evolved into a career focused on building 
              exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-hot-pink" size={28} />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I've had the privilege of working 
                  on diverse projects ranging from e-commerce platforms to creative portfolio sites. 
                  My passion lies in the intersection of design and development, where creativity meets functionality.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date with the latest 
                  technologies and best practices. When I'm not coding, you can find me exploring new 
                  design trends, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark-bg/50 p-6 rounded-lg border border-gray-800 hover:border-hot-pink/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <Calendar className="text-hot-pink mt-1" size={20} />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-hot-pink font-medium mb-2">{edu.college}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;