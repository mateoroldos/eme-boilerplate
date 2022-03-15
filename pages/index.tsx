import type { NextPage } from 'next';
import Button from '../components/modules/Button/Button';
import Container from '../components/modules/Container/Container';

const Home: NextPage = () => {
  return (
    <div>
      <Container as="section" size="medium">
        <Button onClick={() => alert(true)} color="secondary">
          Hola
        </Button>
      </Container>
    </div>
  );
};

export default Home;
