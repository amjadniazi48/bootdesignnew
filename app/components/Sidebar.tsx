import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-md-4 end-sidebar-lg">
      <div className="sticky">
        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Social network</span>
            </h4>
          </div>

          <ul className="list-unstyled social-two">
            <li className="facebook">
              <a
                className="bg-facebook text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                Facebook
              </a>
            </li>
            <li className="twitter">
              <a
                className="bg-twitter text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                Twitter
              </a>
            </li>
            <li className="instagram">
              <a
                className="bg-instagram text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                Instagram
              </a>
            </li>
            <li className="youtube">
              <a
                className="bg-youtube text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube"
              >
                Youtube
              </a>
            </li>
            <li className="linkedin">
              <a
                className="bg-linkedin text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                Linkedin
              </a>
            </li>
            <li className="vimeo">
              <a
                className="bg-vimeo text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vimeo"
              >
                Vimeo
              </a>
            </li>
            <li className="pinterest">
              <a
                className="bg-pinterest text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </li>
            <li className="telegram">
              <a
                className="bg-telegram text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </li>
          </ul>

          <div className="gap-15"></div>
        </aside>

        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Popular Post</span>
            </h4>
          </div>

          <ul className="post-number list-unstyled border-bottom-last-0 rounded mb-3">
            <li className="hover-a">
              <a className="h5 h6-md h5-lg" href="#">
                Why the world would end without political polls
              </a>
            </li>
            <li className="hover-a">
              <a className="h5 h6-md h5-lg" href="#">
                Meet The Man Who Designed The Ducati Monster
              </a>
            </li>
            <li className="hover-a">
              <a className="h5 h6-md h5-lg" href="#">
                2020 Audi R8 Spyder spy shots release
              </a>
            </li>
            <li className="hover-a">
              <a className="h5 h6-md h5-lg" href="#">
                Lamborghini makes Huracán GT3 racer faster for 2019
              </a>
            </li>
            <li className="hover-a">
              <a className="h5 h6-md h5-lg" href="#">
                ZF plans $14 billion autonomous vehicle push, concept van
              </a>
            </li>
          </ul>

          <div className="gap-0"></div>
        </aside>

        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Most read</span>
            </h4>
          </div>

          <div className="small-post">
            <article className="card card-full hover-a mb-4">
              <div className="row">
                <div className="col-3 col-md-4 pe-2 pe-md-0">
                  <div className="ratio_110-77 image-wrapper">
                    <a href="#">
                      <img
                        className="img-fluid lazy"
                        src="./assets/img/assets/lazy-empty.png"
                        data-src="./assets/img/110x77/img1.jpg"
                        alt="Image description"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-9 col-md-8">
                  <div className="card-body pt-0">
                    <h3 className="card-title h6 h5-sm h6-md">
                      <a href="#">
                        Apple stock rout starts and ends with the iPhone
                      </a>
                    </h3>
                    <div className="card-text small text-muted">
                      <time dateTime="2019-10-16">Oct 16, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card card-full hover-a mb-4">
              <div className="row">
                <div className="col-3 col-md-4 pe-2 pe-md-0">
                  <div className="ratio_110-77 image-wrapper">
                    <a href="#">
                      <img
                        className="img-fluid lazy"
                        src="./assets/img/assets/lazy-empty.png"
                        data-src="./assets/img/110x77/img2.jpg"
                        alt="Image description"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-9 col-md-8">
                  <div className="card-body pt-0">
                    <h3 className="card-title h6 h5-sm h6-md">
                      <a href="#">
                        94 Easy Chicken Recipes for Fuss-Free Family Dinners
                      </a>
                    </h3>
                    <div className="card-text small text-muted">
                      <time dateTime="2019-10-15">Oct 15, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="card card-full hover-a mb-4">
              <div className="row">
                <div className="col-3 col-md-4 pe-2 pe-md-0">
                  <div className="ratio_110-77 image-wrapper">
                    <a href="#">
                      <img
                        className="img-fluid lazy"
                        src="./assets/img/assets/lazy-empty.png"
                        data-src="./assets/img/110x77/img3.jpg"
                        alt="Image description"
                      />
                    </a>
                  </div>
                </div>

                <div className="col-9 col-md-8">
                  <div className="card-body pt-0">
                    <h3 className="card-title h6 h4-sm h6-md">
                      <a href="#">
                        Ford reveals autonomous vehicle philosophies, priorities
                      </a>
                    </h3>
                    <div className="card-text small text-muted">
                      <time dateTime="2019-10-14">Oct 14, 2019</time>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="gap-0"></div>
        </aside>

        <aside className="widget">
          <div className="p-4 border bg-light-dark text-center mb-4">
            <h4>Get Updates</h4>
            <p className="text-dark-light">
              Subscribe our newsletter to get the last update into your inbox!
            </p>

            <div className="mx-auto">
              <form id="subscribe" className="needs-validation" action="#">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                  <div className="invalid-feedback">
                    Please insert email address.
                  </div>
                </div>
              </form>
            </div>

            <p className="small text-center text-dark-light mt-3">
              hate spammers, and never spam
            </p>
          </div>

          <div className="gap-0"></div>
        </aside>
        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Travelling</span>
            </h4>
          </div>

          <div className="small-post">
            <article className="card card-full hover-a mb-2">
              <div className="card-body pt-0">
                <h3 className="card-title h5">
                  <a href="#">
                    Fans celebrate in Paris after side reaches World Cup final
                  </a>
                </h3>

                <div className="card-text small text-muted">
                  <time dateTime="2019-06-16">Jun 16, 2019</time>
                </div>
              </div>
            </article>

            <article className="card card-full hover-a mb-2">
              <div className="card-body pt-0">
                <h3 className="card-title h5">
                  <a href="#">
                    5 Tips to Save Money Booking Your Next Hotel Room
                  </a>
                </h3>

                <div className="card-text small text-muted">
                  <time dateTime="2019-06-16">Jun 16, 2019</time>
                </div>
              </div>
            </article>

            <article className="card card-full hover-a mb-2">
              <div className="card-body pt-0">
                <h3 className="card-title h5">
                  <a href="#">
                    The 52 Places Traveler: Summer in France, in Two Very
                    Different Ways
                  </a>
                </h3>

                <div className="card-text small text-muted">
                  <time dateTime="2019-06-16">Jun 16, 2019</time>
                </div>
              </div>
            </article>

            <article className="card card-full hover-a mb-2">
              <div className="card-body pt-0">
                <h3 className="card-title h5">
                  <a href="#">
                    6 Simple Tips to Help Vegetarian or Vegan Travelers Eat
                    Well, Anywhere
                  </a>
                </h3>
                <div className="card-text small text-muted">
                  <time dateTime="2019-06-16">Jun 16, 2019</time>
                </div>
              </div>
            </article>
          </div>
          <div className="gap-0"></div>
        </aside>
      </div>
    </aside>
  );
};

export default Sidebar;
