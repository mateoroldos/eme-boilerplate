import { containerStyles, ContainerVariants } from './Container.css';

type ContainerProps = {
  children: any;
};

type AllProps = ContainerProps & ContainerVariants;

const Container = (props: AllProps) => {
  return (
    <div
      className={`
      ${containerStyles({
        size: props?.size,
      })}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
