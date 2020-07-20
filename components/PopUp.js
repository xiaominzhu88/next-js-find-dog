import React from 'react';

export default function PopUp(props) {
  const handleClick = () => {
    props.close();
  };

  return (
    <div className="modal">
      <div className="content">
        <span
          className="close"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          &times;{' '}
        </span>
        <h3>{props.msg}</h3>
        <h2>{props.warning}</h2>
      </div>

      <style jsx>{`
        .content {
          text-align: center;
          font-family: 'Fira Mono', monospace;
          color: rgb(221, 23, 90);
          background-color: #dddadb;
          width: 50%;
          margin: 5em auto;
          padding: 2em;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
