import "../styles/main.css";

export interface HeaderProps {
  label: string;
}

export const createFooter = () => {
  return `    <footer class="container__footer">
  <section class="container-left__footer">
    <h5 class="title title__foter">Don't miss what's happening</h5>
    <span class="span span__footer">
      People on Twitter are the first to know.
    </span>
  </section>
  <section class="container-right__footer">
    <button class="button__footer button-left__footer">Log in</button>
    <button class="button__footer button-right__footer">Sign up</button>
  </section>
</footer>`;
};
