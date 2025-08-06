import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaComments, FaRobot, FaCog, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import Card from '../components/common/Card';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New message from support', time: '2 min ago', read: false },
    { id: 2, text: 'Your trial expires in 5 days', time: '1 hour ago', read: false },
    { id: 3, text: 'System maintenance scheduled', time: '3 hours ago', read: true }
  ]);

  const stats = [
    {
      title: 'Total Conversations',
      value: '12,847',
      change: '+12%',
      icon: <FaComments className="text-2xl" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+5%',
      icon: <FaUsers className="text-2xl" />,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900'
    },
    {
      title: 'Response Rate',
      value: '98.5%',
      change: '+2%',
      icon: <FaRobot className="text-2xl" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900'
    },
    {
      title: 'Satisfaction',
      value: '4.8/5',
      change: '+0.3',
      icon: <FaChartLine className="text-2xl" />,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900'
    }
  ];

  const recentActivity = [
    { id: 1, user: 'John Doe', action: 'started a new conversation', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'resolved a ticket', time: '15 min ago' },
    { id: 3, user: 'Bot System', action: 'processed 100 messages', time: '1 hour ago' },
    { id: 4, user: 'Mike Johnson', action: 'updated knowledge base', time: '2 hours ago' }
  ];

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-zakbot-dark dark:text-white">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <FaSearch />
                </button>
              </div>
              
              <div className="relative">
                <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <FaBell />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-zakbot-blue rounded-full flex items-center justify-center">
                  <FaUserCircle className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-zakbot-dark dark:text-white mt-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-500 mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Card>
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8">
                  {['overview', 'analytics', 'settings'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-zakbot-blue text-zakbot-blue'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-4">
                      Overview
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                      <FaChartLine className="text-4xl text-zakbot-blue mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Analytics charts and detailed metrics will be displayed here.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'analytics' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-4">
                      Analytics
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                      <FaChartLine className="text-4xl text-zakbot-blue mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-300">
                        Detailed analytics and reports will be displayed here.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'settings' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-4">
                      Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium text-zakbot-dark dark:text-white">Email Notifications</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Receive email updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zakbot-blue"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium text-zakbot-dark dark:text-white">Dark Mode</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Toggle dark theme</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zakbot-blue"></div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card>
              <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-zakbot-blue bg-opacity-10 rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-zakbot-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-zakbot-dark dark:text-white">
                        {activity.user}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.action}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Notifications */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white">
                  Notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="bg-zakbot-blue text-white text-xs px-2 py-1 rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </div>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      notification.read
                        ? 'bg-gray-50 dark:bg-gray-800'
                        : 'bg-zakbot-blue bg-opacity-10 dark:bg-zakbot-blue dark:bg-opacity-20'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <p className={`text-sm ${
                      notification.read
                        ? 'text-gray-600 dark:text-gray-400'
                        : 'text-zakbot-dark dark:text-white font-medium'
                    }`}>
                      {notification.text}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-3">
                  <FaRobot className="text-zakbot-blue" />
                  <span className="text-sm text-zakbot-dark dark:text-white">Test Chatbot</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-3">
                  <FaCog className="text-zakbot-blue" />
                  <span className="text-sm text-zakbot-dark dark:text-white">Configure Settings</span>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-3">
                  <FaUsers className="text-zakbot-blue" />
                  <span className="text-sm text-zakbot-dark dark:text-white">Manage Users</span>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;