const defaultColor = {
  primary: '#6cca28',
  secondary: '',
  white: '#ffffff',

  success: '#52c41a',
  error: '#ff190c',
  warning: '#faad14',
  disabled: 'hsl(208, 8%, 90%)',
  border: '#ededed',
};

export default {
  ...defaultColor,

  platform: {
    android: {
      primary: '#6cca28',
      secondary: '',
      white: '#ffffff',

      success: '#52c41a',
      error: '#ff190c',
      warning: '#faad14',
      disabled: 'hsl(208, 8%, 90%)',
    },
    default: {
      ...defaultColor,
    },
  },
};
