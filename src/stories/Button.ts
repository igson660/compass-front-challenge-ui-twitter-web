// import './button.css';
import "../styles/main.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const createButton = ({
  // primary = false,
  // size = "medium",
  // backgroundColor,
  label,
  // onClick,
}: ButtonProps) => {
  // const btn = document.createElement('button');
  // btn.type = 'button';
  // btn.innerText = label;
  // btn.addEventListener('click', onClick);

  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  // btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

  // btn.style.backgroundColor = backgroundColor;

  const btn = `<button class="button__menu">${label}</button>`;

  return btn;
};
