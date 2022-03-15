import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '../components/modules/Container/Container';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const ContainerStory: ComponentStory<typeof Container> = ({ ...args }) => <Container {...args}>Hola</Container>;
