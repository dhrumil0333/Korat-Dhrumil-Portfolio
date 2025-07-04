import { motion } from 'framer-motion';
import { Download, FileText, Star, Calendar } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Lead development of React-based web applications, mentor junior developers, and implement best practices for code quality and performance."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      period: "2022 - 2023",
      description: "Developed and maintained multiple client websites using React, Node.js, and MongoDB. Collaborated with designers to create pixel-perfect user interfaces."
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      period: "2021 - 2022",
      description: "Built responsive websites and web applications using HTML, CSS, JavaScript, and React. Gained experience with modern development tools and workflows."
    }
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
    <section id="resume" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-hot-pink to-purple bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Download my complete resume or explore my professional experience and achievements below.
            </p>

            <motion.button
              className="bg-gradient-to-r from-hot-pink to-purple px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-hot-pink/25 transition-all duration-300 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('/Korat Dhrumil -- Resume.pdf', '_blank');
              }}
            >
              <Download size={20} />
              Download Full Resume (PDF)
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;