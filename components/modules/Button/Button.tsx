import { MouseEventHandler } from 'react';
import { buttonStyles, ButtonVariants } from './Button.css';

type ButtonProps = {
  onClick: MouseEventHandler<Element>;
  children: string;
};

type AllProps = ButtonProps & ButtonVariants;

const Button = (props: AllProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
      ${buttonStyles({
        color: props?.color,
        size: props?.size,
        rounded: props?.rounded,
      })}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
