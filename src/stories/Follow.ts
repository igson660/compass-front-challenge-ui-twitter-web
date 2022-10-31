import "../styles/main.css";

export interface HeaderProps {
  label: string;
}

export const createFollow = () => {
  return `
  <section class="section-right__aside">
    <div class="div-right__main">
      <h5 class="title-right__aside">Who to follow</h5>
      <hr />
      <div class="card-right__aside">
        <picture
          ><img
            class="img-profile__aside"
            src="../assets/profile.svg"
            alt="image-profile"
        /></picture>
        <div>
          <h6 class="h6-aside__right">Bessie Cooper</h6>
          <span class="span-aside__right">@alessandroveronezi</span>
        </div>
        <button class="button-follow__aside">Follow</button>
      </div>
      <hr />
      <div class="card-right__aside">
        <picture
          ><img
            class="img-profile__aside"
            src="../assets/profile.svg"
            alt="image-profile"
          />
        </picture>
        <div>
          <h6 class="h6-aside__right">Bessie Cooper</h6>
          <span class="span-aside__right">@alessandroveronezi</span>
        </div>
        <button class="button-follow__aside">Follow</button>
      </div>
      <hr />
      <a href="#" target="_blank" class="a-smore__aside">Show more</a>
    </div>
  </section>`;
};
