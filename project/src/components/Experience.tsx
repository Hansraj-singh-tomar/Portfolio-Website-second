import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 rounded-lg p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Briefcase className="text-blue-500" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Reactjs Developer</h3>
              <p className="text-gray-400 mb-2">Soft Spectrum Technology, Indore(MP)</p>
              <p className="text-blue-400 mb-4">2023 - Present</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Work closely with the design team to translate UI/UX wireframes and designs into clean, efficient, and maintainable code using React.js and related libraries.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Participate in code reviews and provide constructive feedback to peers.</span>
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'React', 'Javascript', 'Redux-Toolkit'].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}