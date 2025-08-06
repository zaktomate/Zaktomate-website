import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.5 },
  ...props 
}) => {
  const cardClasses = `card dark:shadow-xl dark:shadow-blue-900/20 border border-gray-100 dark:border-gray-700 ${className}`;

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={hover ? { y: -5 } : {}}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;