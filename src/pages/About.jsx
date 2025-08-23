import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaHeart, FaCheck, FaUserTie, FaCogs, FaChartLine, FaHandshake } from 'react-icons/fa';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';
import TeamBehindZaktomate from '../components/sections/TeamBehindZaktomate';


const About = () => {
  const team = [
    {
      name: "AI Specialists",
      icon: <FaLightbulb className="text-3xl" />,
      description: "Experts in machine learning and natural language processing"
    },
    {
      name: "Software Engineers",
      icon: <FaRocket className="text-3xl" />,
      description: "Skilled developers building robust and scalable solutions"
    },
    {
      name: "Customer Success",
      icon: <FaUsers className="text-3xl" />,
      description: "Dedicated team ensuring your success with our products"
    },
    {
      name: "Support Team",
      icon: <FaHeart className="text-3xl" />,
      description: "Always ready to help you with any questions or issues"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of AI technology to bring you the best solutions."
    },
    {
      title: "Simplicity",
      description: "Complex technology made simple and accessible for everyone."
    },
    {
      title: "Reliability",
      description: "Building dependable solutions you can count on 24/7."
    },
    {
      title: "Customer-Centric",
      description: "Your success is our success. We're here to support your growth."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded in Dhaka",
      description: "Zaktomate was established with a vision to bring AI automation to Bangladeshi businesses."
    },
    {
      year: "2024",
      title: "Launch of Zakbot",
      description: "Released our flagship AI chatbot product, helping businesses automate customer support."
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Growing our team and expanding our product suite to serve more industries."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <SEO />
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-padding text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            About <span className="gradient-text">Zaktomate</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're an AI automation agency based in Dhaka, working with local startups, ed-techs, and SMEs.
            Our mission: Make AI useful, simple, and affordable for growing Bangladeshi teams.
          </p>
        </motion.div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Zaktomate, we believe that AI technology should be accessible to every business, 
                regardless of size or technical expertise. We're committed to democratizing AI by 
                creating solutions that are:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Easy to implement and use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Affordable for Bangladeshi businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Tailored to local needs and contexts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Reliable and secure</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zakbot-blue to-zakbot-teal rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="mb-4">
                Whether you need to answer 1,000+ queries daily or create slides in a rush — 
                we build tools that do the work for you.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Local expertise with global technology</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>24/7 support in Bangla and English</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Affordable pricing for local market</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Custom solutions for unique needs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Zaktomate.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center h-full"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the passionate individuals working together to transform businesses with AI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center h-full"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-zakbot-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zakbot-blue">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to bring AI to Bangladeshi businesses.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zakbot-blue bg-opacity-20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8">
                    <Card transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <div className="text-sm font-semibold text-zakbot-blue mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zakbot-blue rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="w-1/2 pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Behind Zaktomate Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              The <span className="gradient-text">Team Behind Zaktomate</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the passionate individuals driving our mission to transform businesses with AI.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-zakbot-blue/5 to-zakbot-teal/5 rounded-3xl blur-3xl -z-10"></div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Team members with enhanced styling */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-zakbot-blue/5 to-transparent rounded-xl border border-zakbot-blue/10 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-zakbot-blue rounded-full flex items-center justify-center">
                      <FaUserTie className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white">Abid Bin Yusuf</h3>
                      <p className="text-zakbot-blue font-medium mb-2">CEO & Co-Founder</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Leads Zaktomate with a clear vision: making AI practical and transformative for businesses of all sizes. Focus: Strategic leadership, vision-setting, client relationships, and scaling operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-zakbot-teal/5 to-transparent rounded-xl border border-zakbot-teal/10 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-zakbot-teal rounded-full flex items-center justify-center">
                      <FaCogs className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white">Shahriar Hossain Fahim</h3>
                      <p className="text-zakbot-teal font-medium mb-2">CTO & Co-Founder</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        The technical brain behind Zaktomate with deep expertise in automation workflows, full-stack development, and AI implementation. Focus: Product architecture, R&D, technical delivery, and platform scalability.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl border border-purple-500/10 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <FaChartLine className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white">Shoyeb Morshed</h3>
                      <p className="text-purple-500 font-medium mb-2">COO & Co-Founder</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Brings structure and operational rigor to Zaktomate. Ensures projects run smoothly and optimizes resource allocation. Focus: Operations, project management, and delivery excellence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl border border-green-500/10 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FaHandshake className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white">Abdullah Ahsan</h3>
                      <p className="text-green-500 font-medium mb-2">CFO & Co-Founder</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Ensures Zaktomate remains financially disciplined while investing in bold innovation. Manages budgeting, investor relations, and financial forecasting. Focus: Finance, sustainability, and long-term investment strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team motto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 text-center p-6 bg-gradient-to-r from-zakbot-blue/10 to-zakbot-teal/10 rounded-xl border border-zakbot-blue/20"
              >
                <p className="text-lg font-medium text-zakbot-dark dark:text-white italic">
                  "Together, we're building AI solutions that transform businesses and empower people."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of Bangladeshi businesses using Zaktomate's AI solutions 
            to automate their workflows and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
