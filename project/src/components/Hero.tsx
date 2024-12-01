import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Hansraj Singh Tomar</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              MERN Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Building robust web applications with modern technologies
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/Hansraj-singh-tomar", title: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hansraj-singh-tomar/", title: "LinkedIn" },
              { icon: Mail, href: "mailto:tomarhansraj033@gmail.com", title: "Email" },
              { icon: Phone, href: "tel:+918085649497", title: "Phone" }
            ].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target={item.icon !== Phone && item.icon !== Mail ? "_blank" : undefined}
                rel={item.icon !== Phone && item.icon !== Mail ? "noopener noreferrer" : undefined}
                className="p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
                title={item.title}
              >
                <item.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold text-lg relative group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white px-8 py-3 rounded-full inline-block">
              Learn More About Me
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8"
        >
          <ChevronDown 
            className="w-8 h-8 text-white animate-bounce cursor-pointer" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </motion.div>
      </div>
    </section>
  );
}