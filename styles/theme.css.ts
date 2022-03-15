import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  space: {
    gutterX: '30px',
    gutterY: '20px',
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
  colors: {
    primary: 'red',
    secondary: 'blue',
    accent: 'pink',
    text: {
      normal: '#1F2937',
      dimmed: '#6B7280',
    },
  },
  containerWidth: {
    fullWidth: '100%',
    large: '1200px',
    medium: '900px',
    small: '600px',
  },
});
