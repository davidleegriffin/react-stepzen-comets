import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer__grid-container">
        <div className="footer__grid-1">
            <a href="https://icons8.com/icon/Ybuo24ayiV2p/comet" className="footer__image--label">
            Comet icon by Icons8
            </a>
        </div>
        <div className="footer__grid-2">
          <a className='github__links__creator' href='https://daletsakamoto.github.io/'>
            <span className="footer__span__names">
              Dale Sakamoto<img alt="github" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' width="30" height="30" />
            </span>
          </a>
        </div>
        <div className="footer__grid-4">
          <a className='github__links__creator' href='https://davidleegriffin.github.io/'>
            <span className="footer__span__names">
              David Griffin<img alt="github" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' width="30" height="30" />
            </span>
          </a>
        </div>
        <div className="footer__grid-5">
          <a className='github__links' href='https://github.com/davidleegriffin/react-stepzen-comets'>
            <span className="footer__span__repo">
              <img className="footer__img__repo" alt="github" src='https://miro.medium.com/max/1620/1*FsqitFvksKYy8Lu3jCQR9w.png' width="150" height="50"/>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
