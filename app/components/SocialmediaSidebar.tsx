import React from "react";

const SocialmediaSidebar = () => {
  return (
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
  );
};

export default SocialmediaSidebar;
