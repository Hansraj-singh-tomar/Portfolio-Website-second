import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Website',
    description: [
      'Built using React with styled-components for styling',
      'State management implemented using Redux Toolkit',
      'Features include product filtering, cart management, and checkout',
      'Email management using Formspree.io'
    ],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Redux Toolkit', 'Styled Components', 'Formspree'],
    liveUrl: 'https://brand-e-commercee.netlify.app',
    githubUrl: 'https://github.com/yourusername/e-commerce'
  },
  {
    title: 'YouTube Clone',
    description: [
      'Built with React, Redux Toolkit, and Tailwind CSS',
      'Implemented AutoComplete search with caching and debouncing',
      'Live chat feature with short polling and Redux integration',
      'Nested comments with accordion functionality',
      'Dark/Light mode and infinite scrolling'
    ],
    image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'WebSocket'],
    liveUrl: 'https://we-tube-sigma.vercel.app'
  },
  {
    title: 'Blogging Platform',
    description: [
      'React frontend with Appwrite backend integration',
      'Rich text editing using TinyMCE',
      'Full user authentication system',
      'CRUD operations for blog posts',
      'Image upload and preview functionality'
    ],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Appwrite', 'Redux Toolkit', 'TinyMCE', 'Tailwind CSS'],
    liveUrl: 'https://blog-app-appwrite-ten.vercel.app'
  },
  {
    title: 'File Sharing Application',
    description: [
      'Full MERN stack implementation',
      'Drag and drop file upload functionality',
      'Share files via link or email',
      'Cloudinary integration for file storage',
      'Deployed on Vercel serverless architecture'
    ],
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['MERN Stack', 'Cloudinary', 'Vercel', 'Drag & Drop'],
    liveUrl: 'https://file-sharing-app-zeta-tawny.vercel.app'
  },
  {
    title: 'Collaborative Sketchbook',
    description: [
      'MERN stack application with real-time collaboration',
      'WebSocket integration for multi-user support',
      'Interactive drawing canvas',
      'Real-time cursor tracking and drawing sync'
    ],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['MERN Stack', 'Socket.io', 'Canvas API', 'Real-time'],
    liveUrl: 'https://sketchbook-orpin.vercel.app'
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications built with modern technologies.
            Each project demonstrates different aspects of my technical expertise and problem-solving abilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}