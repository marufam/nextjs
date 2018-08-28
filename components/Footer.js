import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Footer = () => (
  <div id="footer">
    <p>footer</p>
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

export default Footer;
