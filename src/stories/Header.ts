import "../styles/main.css";

export interface HeaderProps {
  label: string;
}

export const createHeader = ({ label }: HeaderProps) => {
  return `
  <header class="container-header__main">
    <h1>${label}</h1>
    <img src="../assets/light-theme/icon-star.svg" alt="star" />
  </header>`;
};
