import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Download } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 5,
      title: "Odoo Hackathon 2025",
      issuer: "Odoo",
      date: "2025",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Design thinking, user research, prototyping, and usability testing for Odoo applications.",
      skills: ["Design Thinking", "User Research", "Prototyping", "Usability Testing"],
      credentialUrl: "#",
      path: "./odoo.pdf"
    },
    {
      id: 1,
      title: "Full-Stack Development 101",
      issuer: "Simpli Learn",
      date: "2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and patterns.",
      skills: ["React", "JSX", "Hooks", "State Management", "Component Patterns"],
      credentialUrl: "#",
      path: "./Full stack development.pdf"
    },
    {
      id: 6,
      title: "Introduction to Web Designing",
      issuer: "Great Learning",
      date: "2024",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Fundamentals of web design, HTML, CSS, and responsive design principles.",
      skills: ["HTML", "CSS", "Responsive Design", "Web Accessibility"],
      credentialUrl: "#",
      path: "./GreatLearning.pdf"
    },
    {
      id: 3,
      title: "HackerRank Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "2025",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive study of algorithms, data structures, and problem-solving techniques in Python.",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Python"],
      credentialUrl: "#",
      path: "./problem_solving_basic certificate.pdf"
    },
    {
      id: 2,
      title: "HackerRank Java ",
      issuer: "HackerRank",
      date: "2024",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Java programming fundamentals, object-oriented programming, and data structures.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      credentialUrl: "#",
      path: "./hacker rank (java).pdf"
    },
    {
      id: 4,
      title: "Infosys Java Certification",
      issuer: "Infosys",
      date: "2024",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Java programming fundamentals, object-oriented programming concepts, and data structures.",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      credentialUrl: "#",
      path: "./Infosys (java).pdf"
    },
    {
      id: 4,
      title: "Foundation C# with Microsoft",
      issuer: "Microsoft",
      date: "2025",
      image: "https://www.pragimtech.com/wp-content/uploads/2019/04/csharp-net.png",
      description: "C# programming fundamentals, object-oriented programming, and data structures.",
      skills: ["C#", "OOP", "Data Structures", "Algorithms"],
      credentialUrl: "#",
      path: "./FreeDom .net.png"
    }, 
  ];

  return (
    <section id="certificates" className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-hot-pink to-purple bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to 
              continuous learning and expertise in various technologies.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8 }}
                className="group bg-dark-bg rounded-lg overflow-hidden border border-gray-800 hover:border-hot-pink/50 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-hot-pink p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="text-white" size={16} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-hot-pink transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-purple font-medium mb-2">{certificate.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{certificate.date}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-hot-pink/20 text-hot-pink text-xs rounded border border-hot-pink/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {certificate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        +{certificate.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-3">
                    {certificate.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for selected certificate */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 bg-dark-bg/80 p-2 rounded-full text-white hover:bg-hot-pink transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-purple font-medium text-lg mb-1">
                      {selectedCertificate.issuer}
                    </p>
                    <p className="text-gray-400">{selectedCertificate.date}</p>
                  </div>
                  <Award className="text-hot-pink" size={32} />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-hot-pink/20 to-purple/20 text-hot-pink rounded-full border border-hot-pink/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="border border-gray-600 px-6 py-3 rounded-full text-gray-300 hover:border-hot-pink hover:text-hot-pink transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedCertificate.path, '_blank')}
                  >
                    <Download size={16} />
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
