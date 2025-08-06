/**
 * Utility functions for handling theme colors consistently across components
 */

export const getColorClasses = (color) => {
  const colorMap = {
    'zakbot-blue': {
      bg: 'bg-zakbot-blue bg-opacity-10',
      text: 'text-zakbot-blue',
      border: 'border-zakbot-blue',
      button: 'bg-zakbot-blue',
      buttonHover: 'hover:bg-zakbot-blue-light',
      buttonLight: 'bg-zakbot-blue-light',
      bgLight: 'bg-blue-50 dark:bg-blue-900/20',
      borderLight: 'border-blue-200 dark:border-blue-800'
    },
    'zakbot-teal': {
      bg: 'bg-zakbot-teal bg-opacity-10',
      text: 'text-zakbot-teal',
      border: 'border-zakbot-teal',
      button: 'bg-zakbot-teal',
      buttonHover: 'hover:bg-zakbot-teal-light',
      buttonLight: 'bg-zakbot-teal-light',
      bgLight: 'bg-teal-50 dark:bg-teal-900/20',
      borderLight: 'border-teal-200 dark:border-teal-800'
    },
    'zakbot-purple': {
      bg: 'bg-zakbot-purple bg-opacity-10',
      text: 'text-zakbot-purple',
      border: 'border-zakbot-purple',
      button: 'bg-zakbot-purple',
      buttonHover: 'hover:bg-zakbot-purple-light',
      buttonLight: 'bg-zakbot-purple-light',
      bgLight: 'bg-purple-50 dark:bg-purple-900/20',
      borderLight: 'border-purple-200 dark:border-purple-800'
    },
    'zakbot-yellow': {
      bg: 'bg-yellow-500 bg-opacity-10',
      text: 'text-yellow-500',
      border: 'border-yellow-500',
      button: 'bg-yellow-500',
      buttonHover: 'hover:bg-yellow-400',
      buttonLight: 'bg-yellow-400',
      bgLight: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderLight: 'border-yellow-200 dark:border-yellow-800'
    },
    'zakbot-rose': {
      bg: 'bg-rose-500 bg-opacity-10',
      text: 'text-rose-500',
      border: 'border-rose-500',
      button: 'bg-rose-500',
      buttonHover: 'hover:bg-rose-400',
      buttonLight: 'bg-rose-400',
      bgLight: 'bg-rose-50 dark:bg-rose-900/20',
      borderLight: 'border-rose-200 dark:border-rose-800'
    },
    'zakbot-indigo': {
      bg: 'bg-indigo-500 bg-opacity-10',
      text: 'text-indigo-500',
      border: 'border-indigo-500',
      button: 'bg-indigo-500',
      buttonHover: 'hover:bg-indigo-400',
      buttonLight: 'bg-indigo-400',
      bgLight: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderLight: 'border-indigo-200 dark:border-indigo-800'
    }
  };
  return colorMap[color] || colorMap['zakbot-teal'];
};

export const getSectionBackground = (variant = 'default') => {
  const backgrounds = {
    default: 'bg-gray-900 dark:bg-gray-950',
    light: 'bg-gray-800 dark:bg-gray-900',
    medium: 'bg-gray-700 dark:bg-gray-800',
    pattern: 'bg-pattern dark:bg-pattern'
  };
  return backgrounds[variant] || backgrounds.default;
};

export const getTextColor = (variant = 'default') => {
  const colors = {
    default: 'text-gray-800 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-600 dark:text-gray-400'
  };
  return colors[variant] || colors.default;
};