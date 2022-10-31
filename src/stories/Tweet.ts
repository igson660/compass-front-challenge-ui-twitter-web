import "../styles/main.css";

export const createTweet = () => {
  return `<div class="div-post__main">
  <picture>
    <img
      class="img-post__main"
      src="../assets/avatar-1.svg"
      alt="img"
    />
  </picture>
  <div>
    <div>
      <div class="div-data-post__main">
        <h2 class="h2-post__main">Devon Lane</h2>
        <span class="data-post">@johndue</span>
        <time class="data-post">23s</time>
      </div>
      <p class="p-post__main">Tom is in a big hurry.</p>
      <picture>
        <img src="../assets/img-post-1.jpg" alt="img" />
      </picture>
    </div>
    <div class="div-post-actions__main">
      <div class="actions__main">
        <picture>
          <img
            src="../assets/light-theme/comments.svg"
            alt="icon"
          />
        </picture>
        <span class="quantity">61</span>
      </div>
      <div class="actions__main">
        <picture>
          <img
            src="../assets/light-theme/retweet.svg"
            alt="icon"
          />
        </picture>
        <span class="quantity">12</span>
      </div>
      <div class="actions__main">
        <picture>
          <img src="../assets/light-theme/like.svg" alt="icon" />
        </picture>
        <span class="quantity selected">6.2k</span>
      </div>
      <div class="actions__main">
        <picture>
          <img src="../assets/light-theme/share.svg" alt="icon" />
        </picture>
        <span class="quantity">61</span>
      </div>
    </div>
  </div>
</div>
<a href="#" class="show-more"> Show this thread</a>`;
};
