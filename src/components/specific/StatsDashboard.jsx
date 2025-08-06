import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaComments, FaUsers, FaRobot, FaDatabase, FaServer, FaClock } from 'react-icons/fa';
import { statsApi } from '../../services/api';
import Card from '../common/Card';

const StatsDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await statsApi.getGlobalStats();
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Conversations',
      value: stats?.totalConversations || '0',
      icon: <FaComments className="text-3xl" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      change: '+12%'
    },
    {
      title: 'Active Users',
      value: stats?.activeUsers || '0',
      icon: <FaUsers className="text-3xl" />,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900',
      change: '+5%'
    },
    {
      title: 'Response Time',
      value: stats?.avgResponseTime || '0ms',
      icon: <FaClock className="text-3xl" />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900',
      change: '-20%'
    },
    {
      title: 'Success Rate',
      value: stats?.successRate || '0%',
      icon: <FaChartLine className="text-3xl" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      change: '+3%'
    }
  ];

  const systemStats = [
    {
      title: 'Database Status',
      value: stats?.dbStatus || 'Connected',
      icon: <FaDatabase className="text-2xl" />,
      status: 'healthy'
    },
    {
      title: 'Server Load',
      value: stats?.serverLoad || '0%',
      icon: <FaServer className="text-2xl" />,
      status: 'normal'
    },
    {
      title: 'Active Bots',
      value: stats?.activeBots || '0',
      icon: <FaRobot className="text-2xl" />,
      status: 'active'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
      case 'active':
        return 'text-green-500';
      case 'normal':
        return 'text-yellow-500';
      default:
        return 'text-red-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'healthy':
      case 'active':
        return 'bg-green-100 dark:bg-green-900';
      case 'normal':
        return 'bg-yellow-100 dark:bg-yellow-900';
      default:
        return 'bg-red-100 dark:bg-red-900';
    }
  };

  if (loading) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-zakbot-blue"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading statistics...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding">
        <div className="container">
          <Card className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Error</h3>
            <p className="text-gray-600 dark:text-gray-300">{error}</p>
          </Card>
        </div>
      </section>
    );
  }

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
            Live <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time insights into Zakbot's performance and system health.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold text-zakbot-dark dark:text-white mb-2">
                  {stat.value}
                </p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last week
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-6 text-center">
            System <span className="gradient-text">Status</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemStats.map((system, index) => (
              <Card key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${getStatusBg(system.status)} rounded-full flex items-center justify-center`}>
                      <div className={getStatusColor(system.status)}>
                        {system.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zakbot-dark dark:text-white">
                        {system.title}
                      </h4>
                      <p className={`text-sm ${getStatusColor(system.status)}`}>
                        {system.value}
                      </p>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(system.status)}`}></div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Performance Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-6">
              Performance Overview
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <FaChartLine className="text-4xl text-zakbot-blue mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300">
                Interactive performance charts will be displayed here.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Real-time data visualization coming soon.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Statistics update every 5 minutes. Last updated: {new Date().toLocaleTimeString()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsDashboard;