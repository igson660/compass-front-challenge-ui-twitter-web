import "../styles/main.css";

export const createSearch = () => {
  return `
  <input
    type="search"
    placeholder="Search Twitter"
    class="input-seach-right__aside"
  />
  <i class="fa-solid fa-magnifying-glass icon-search"></i>`;
};
