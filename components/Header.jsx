import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div id="logo">
          <img
            src="https://sg.tepcdn.com/web4/public/img/new-logo.png"
            alt=""
          />
        </div>
        <div id="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Dropdown
              </a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
          </ul>
        </div>

        <style jsx>{`
          #logo {
            float: left;
            width: 20%;
            margin-left: 10px;
            margin-top: 5px;
          }
          #menu {
            float: right;
          }

          nav {
            margin: auto;
            text-align: left;
            font-family: arial;
            background: #275075;
            overflow: hidden;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #275075;
          }

          li {
            float: left;
          }

          li a,
          .dropbtn {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }

          li a:hover,
          .dropdown:hover .dropbtn {
            background-color: #12395c;
          }

          li.dropdown {
            display: inline-block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
          }

          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
          }

          .dropdown-content a:hover {
            background-color: #CCC;
            color:white;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }
        `}</style>
      </nav>
    );
  }
}
