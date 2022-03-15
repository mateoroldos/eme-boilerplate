import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/theme.css';

export const containerStyles = recipe({
  base: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: vars.space.gutterX,
    paddingRight: vars.space.gutterX,
    paddingTop: vars.space.gutterY,
    paddingBottom: vars.space.gutterY,
    background: 'red',
  },

  variants: {
    size: {
      fullWidth: { maxWidth: vars.containerWidth.fullWidth },
      large: { maxWidth: vars.containerWidth.large },
      medium: { maxWidth: vars.containerWidth.medium },
      small: { maxWidth: vars.containerWidth.small },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

export type ContainerVariants = RecipeVariants<typeof containerStyles>;
