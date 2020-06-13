import React from 'react';

export default function Content() {
  return (
    <div className="start">
      <img alt="firstDog" src="/bullterrier.jpg" />
      <img alt="secondDog" src="/englischedogge.jpg" />

      <style jsx>
        {`
          .start {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          img {
            width: 5em;
            height: 5em;
            border-radius: 50%;
            box-shadow: 3px 11px 18px #1b1a1aed;
          }
        `}
      </style>
    </div>
  );
}
