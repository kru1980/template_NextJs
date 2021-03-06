import React, { Component } from "react";
import Link from "next/link";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a title="Our API">Home</a>
          </Link>
          <Link href="/about">
            <a title="About">About</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
