import Link from "next/link";

const Header = () => (
  <div id="header">
    <Link href="/">
      <a>Simple Page</a>
    </Link>
    {/* Other Menu */}
    {/* <Link href="/">
      <a>Simple Page</a>
    </Link> */}
    <style jsx>{`
      #header {
        padding: 20px;
        border: 1px solid #ddd;
      }
      a {
        color: black;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Header;
