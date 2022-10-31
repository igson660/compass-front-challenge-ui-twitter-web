import "../styles/main.css";

const selector = document.querySelector.bind(document);

const textArea = selector("textarea") as HTMLTextAreaElement;
const button = selector(".button-submit__main") as HTMLButtonElement;
const section = selector(".section-post_main") as HTMLDivElement;

button.addEventListener("click", () => {
  const content = `<div class="div-post__main">
      <picture>
        <img
          class="img-post__main"
          src="./src/assets/avatar.svg"
          alt="img"
        />
      </picture>
      <div>
        <div>
          <div class="div-data-post__main">
            <h2 class="h2-post__main">Jorome</h2>
            <span class="data-post">@afonsoinocente</span>
            <time class="data-post">now</time>
          </div>
          <p class="p-post__main">${textArea.value}</p>
          <picture>
            <img src="./src/assets/img-post-2.png" alt="img" />
          </picture>
        </div>
        <div class="div-post-actions__main">
          <div class="actions__main">
            <picture>
              <img
                src="./src/assets/light-theme/comments.svg"
                alt="icon"
              />
            </picture>
            <span class="quantity">0</span>
          </div>
          <div class="actions__main">
            <picture>
              <img
                src="./src/assets/light-theme/retweet.svg"
                alt="icon"
              />
            </picture>
            <span class="quantity">0</span>
          </div>
          <div class="actions__main">
            <picture>
              <img src="./src/assets/light-theme/like-1.svg" alt="icon" />
            </picture>
            <span class="quantity">0</span>
          </div>
          <div class="actions__main">
            <picture>
              <img src="./src/assets/light-theme/share.svg" alt="icon" />
            </picture>
            <span class="quantity">0</span>
          </div>
        </div>
      </div>
      </div>
      <a href="#" class="show-more"> Show this thread</a>
      <hr />`;
  section.innerHTML = content.concat(section.innerHTML);
  textArea.value = "";
});
