import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

export const buttonStyles = recipe({
  base: {
    borderRadius: '12px',
  },

  variants: {
    color: {
      primary: { backgroundColor: vars.colors.primary },
      secondary: { backgroundColor: vars.colors.secondary },
      accent: { backgroundColor: vars.colors.accent },
    },
    size: {
      small: { padding: '12px' },
      medium: { padding: '12px' },
      large: { padding: '12px' },
    },
    rounded: {
      true: { borderRadius: '12px' },
    },
  },

  defaultVariants: {
    color: 'accent',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonStyles>;
