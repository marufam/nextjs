import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <p>Footer</p>
        <style jsx>{`
          #footer {
            padding: 20px;
            border: 1px solid #ddd;
            text-align: center;
            width: 100%;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}</style>
      </div>
    );
  }
}
