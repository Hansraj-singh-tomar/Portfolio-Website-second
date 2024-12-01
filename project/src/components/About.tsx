import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate MERN Stack Developer with expertise in building robust web applications. 
              My journey in software development began with a deep curiosity for creating impactful digital solutions, 
              and has evolved into a career focused on building scalable, user-centric applications.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" />
                <span>Indore(MP)</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-500" />
                <span>Reactjs Developer at Soft Spectrum Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-500" />
                <span>MCA from Dr. A.P.J Abdul Kalam University</span>
              </div>
            </div>

            <p className="text-gray-300">
              I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. 
              My focus is on creating performant, scalable solutions while maintaining clean, maintainable code. 
              I'm passionate about user experience and always strive to create intuitive interfaces that users love.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}