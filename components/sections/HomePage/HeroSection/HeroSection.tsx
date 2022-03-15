import { Button, Container } from '../../../modules';

const HeroSection = () => {
  return (
    <div>
      <Container size="medium">
        <Button onClick={() => alert(true)} color="secondary">
          Hola
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
