import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((navlink) => {
    return <a key={navlink} href={`#${navlink}`}>{navlink}</a>;
  });

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {navLinks}
    </nav>
  );
}

export default NavBar;
