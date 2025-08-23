import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaStore, FaRocket, FaUsers } from 'react-icons/fa';
import Card from '../common/Card';
import { getTextColor } from '../../utils/colorUtils';

const WhoIsItFor = ({ targetMarket }) => {
  const targetAudience = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Educational platforms",
      description: "that handle lots of student queries",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    },
    {
      icon: <FaStore className="text-3xl" />,
      title: targetMarket === "SMEs" ? "SMEs" : "Small businesses",
      description: "with limited customer support teams",
      color: "text-zakbot-teal",
      bgColor: "bg-zakbot-teal",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Startups",
      description: "that want to scale faster without hiring more staff",
      color: "text-zakbot-purple",
      bgColor: "bg-zakbot-purple",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Teams",
      description: "spending too much time on slides, reporting, or admin",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    }
  ];

  return (
    <section id="who-is-it-for" className="h-auto py-20 bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${getTextColor('default')}`}
        >
          Who Is It For?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl mx-auto text-lg mb-8 ${getTextColor('secondary')}`}
        >
          Zaktomate is built for:
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {targetAudience.map((item, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 rounded-lg ${item.bgColor} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={item.color}>
                  {item.icon}
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${getTextColor('default')}`}>
                {item.title}
              </h3>
              <p className={getTextColor('secondary')}>
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;