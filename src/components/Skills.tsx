import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Wrench, TestTube, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={32} />,
    skills: ['Javascript', 'C', 'C++']
  },
  {
    category: 'Frontend Technologies',
    icon: <BookOpen size={32} />,
    skills: ['React', 'Redux-Toolkit', 'TypeScript', 'Next.js', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend & Database',
    icon: <Database size={32} />,
    skills: ['Node', 'Express', 'MongoDB', 'Mongoose', 'GraphQL']
  },
  {
    category: 'Development Tools',
    icon: <Wrench size={32} />,
    skills: ['Git/Github', 'JIRA', 'Docker']
  },
  {
    category: 'Testing',
    icon: <TestTube size={32} />,
    skills: ['Jest', 'React Testing Library']
  },
  {
    category: 'Full Stack',
    icon: <Server size={32} />,
    skills: ['MERN Stack']
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-500">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}