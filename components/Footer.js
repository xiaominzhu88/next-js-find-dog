import React from 'react';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerText">
          <p>Created by ZHU</p>
        </div>
        <div className="contact">
          <a href="https://github.com/xiaominzhu88">
            <img src="./github.png" alt="github link" />
          </a>

          <a href="https://twitter.com/Zhu23592976">
            <img src="./twitter.png" alt="twitter link" />
          </a>
          <a href="https://www.linkedin.com/in/xiaominzhu/ ">
            <img src="./linkedIn.png" alt="linkedIn link" />
          </a>
        </div>
      </div>
      <style jsx>
        {`
          p {
            text-align: center;
            font-weight: bold;
            font-family: Didot, serif;
            color: #fff;
            font-size: 1em;
          }

          .footer {
            background-color: black;
            padding: 5px;
            margin-top: 1em;
          }
          img {
            width: 1.8em;
            height: 1.5em;
            margin-right: 0.8em;
          }
          .contact {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 1em;
            margin-top: -1em;
          }

          @media (max-width: 450px) {
            .footer {
              display: block;
              text-align: center;
            }
            p {
              font-size: 1em;
            }
            img {
              width: 1.2em;
              height: 0.9em;
            }
            .contact {
              margin: 0 auto;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  );
}

export default Footer;
