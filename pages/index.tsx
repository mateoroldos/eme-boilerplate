import type { NextPage } from 'next';
import Button from '../components/modules/Button/Button';

const Home: NextPage = () => {
  return (
    <div>
      <Button onClick={() => alert(true)} color="secondary">
        Hola
      </Button>
    </div>
  );
};

export default Home;
