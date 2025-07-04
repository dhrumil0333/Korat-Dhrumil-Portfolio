import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "People's Pulse",
      description: "A full-stack civic engagement platform that connects citizens with local government, allowing them to voice their opinions, report issues, and participate in community discussions.",
      image: "https://cdn.educba.com/academy/wp-content/uploads/2024/03/Civic-Engagement-.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://drive.google.com/file/d/1oUO4fF_AufZNz0hU5NWvWHP_F1vOvedZ/view?usp=drive_link",
      githubUrl: "https://github.com/dhrumil0333/People-s-Pulse",
      featured: true
    },
    {
      id: 2,
      title: "KD's Fashion",
      description: "An e-commerce platform for fashion enthusiasts , featurs include product listings, user authentication, shopping cart functionality, and real-time 3d customization of clothing items.  ",
      image: 'https://cdn.dribbble.com/userupload/34159111/file/original-42ae8443a96e7ea61956de84a2fa8bd2.jpg?format=webp&resize=400x300&vertical=center ',
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/dhrumil0333/KD-s-Fashion",
      featured: true
    },
    {
      id: 3,
      title: "Protfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experiences as a full-stack developer. It includes sections for my resume, contact information, and links to my GitHub and LinkedIn profiles.",
      image: 'https://thumbs.dreamstime.com/b/portfolio-banner-colorful-confetti-portfolio-banner-colorful-paper-confetti-vector-background-125413772.jpg',
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/dhrumil0333/KD-s-Fashion",
      featured: true
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20">
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
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, 
              UI/UX design, and problem-solving.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-dark-card rounded-xl overflow-hidden border border-gray-800 hover:border-hot-pink/50 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        className="bg-hot-pink p-2 rounded-full text-white hover:bg-hot-pink/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="bg-purple p-2 rounded-full text-white hover:bg-purple/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-hot-pink/20 to-purple/20 text-hot-pink text-sm rounded-full border border-hot-pink/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-hot-pink hover:text-hot-pink/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Eye size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-purple hover:text-purple/80 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          {/* <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  className="group bg-dark-card rounded-lg overflow-hidden border border-gray-800 hover:border-hot-pink/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-hot-pink/20 text-hot-pink text-xs rounded border border-hot-pink/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="text-hot-pink hover:text-hot-pink/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="text-purple hover:text-purple/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;