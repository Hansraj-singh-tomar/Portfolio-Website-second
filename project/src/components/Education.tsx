import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const educationData: Education[] = [
  {
    degree: 'MCA',
    institution: 'Dr. A.P.J Abdul Kalam University, Indore(MP)',
    year: '2022'
  },
  {
    degree: 'BSC',
    institution: 'Shri Gujarati Samaj Institute of Professional Studies, Indore(MP)',
    year: '2020'
  }
];

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
        </motion.div>

        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-8 flex items-start gap-4"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-blue-400">Graduated {edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}