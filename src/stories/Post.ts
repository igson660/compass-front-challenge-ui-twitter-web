import "../styles/main.css";

export const createPost = () => {
  return `
  <div class="container-post__main">
          <div class="div-avatar__main">
            <picture>
              <img src="../assets/avatar.svg" alt="Avatar" />
            </picture>
          </div>
          <textarea
            type="text"
            maxlength="300"
            rows="2"
            cols="50"
            style="resize: none"
            placeholder="What’s happening?"
          ></textarea>
        </div>
        <div class="div-actions__main">
          <div>
            <img
              src="../assets/light-theme/icon-input-imgage.svg"
              alt="icon"
            />
            <img src="../assets/light-theme/icon-input-gif.svg" alt="icon" />
            <img
              src="../assets/light-theme/icon-input-grafic.svg"
              alt="icon"
            />
            <img
              src="../assets/light-theme/icon-input-emoji.svg"
              alt="icon"
            />
            <img
              src="../assets/light-theme/icon-input-date.svg"
              alt="icon"
            />
          </div>
          <button type="button" class="button-submit__main">tweet</button>
        </div>`;
};
