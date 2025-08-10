import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaClock } from 'react-icons/fa';
import { statsApi } from '../../services/api';

const GlobalStats = () => {
  const [stats, setStats] = useState({
    messagesProcessed: 0,
    timeSaved: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await statsApi.getGlobalStats();
        
        // Check the actual data structure
        const messagesProcessed = response.data?.data?.total_messages_processed || response.data?.total_messages_processed || 0;
        const timeSaved = response.data?.data?.total_time_saved_hours || response.data?.total_time_saved_hours || 0;
        
        setStats({
          messagesProcessed,
          timeSaved,
        });
        setLoading(false);
      } catch (error) {
        console.error('❌ DEBUG: Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const newCount = Math.floor(progress * value);
        setCount(newCount);
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }, [value, duration]);

    return <span>{formatNumber(count)}</span>;
  };

  const StatCard = ({ icon, title, value, unit, color }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="card dark:shadow-xl dark:shadow-blue-900/20 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg ${color} bg-opacity-10 flex items-center justify-center`}>
            <div className={color}>
              {icon}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zakbot-dark dark:text-white">
              {loading ? (
                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div>
              ) : (
                <>
                  <AnimatedCounter value={value} />
                  {unit && <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">{unit}</span>}
                </>
              )}
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white">{title}</h3>
      </motion.div>
    );
  };

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Zakbot <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time metrics showing how Zakbot is making a difference.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StatCard
            icon={<FaComments className="text-2xl" />}
            title="Messages Processed"
            value={stats.messagesProcessed}
            color="text-zakbot-blue"
          />
          <StatCard
            icon={<FaClock className="text-2xl" />}
            title="Hours Saved"
            value={stats.timeSaved}
            color="text-zakbot-teal"
          />
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-blue-50 dark:bg-gray-700/50 border border-blue-200 dark:border-blue-900/50 rounded-lg p-6 max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h4 className="font-bold text-zakbot-blue dark:text-blue-400 mb-2">Real-time Data</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            These statistics are fetched in real-time from our database, showing the actual
            impact Zakbot has made in processing messages and saving valuable time for our users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalStats;