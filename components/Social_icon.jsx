import React from "react";
import Link from "next/link";

export default class social_icon extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="social">
          <h3 id="social_title">Follow Us On</h3>
          {this.props.data.map(social => (
            <Link href={social.link}>
              <a id="social_icon">
                <img src={social.icon} alt={social.name} />
              </a>
            </Link>
          ))}
        </div>
        
        <style jsx>{`
          #social_icon {
            margin-right: 5px;
          }
          #social_title {
            margin-bottom: 0px;
          }
        `}</style>
      </div>
    );
  }
}
