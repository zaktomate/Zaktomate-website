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