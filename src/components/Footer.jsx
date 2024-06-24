import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-start p-8 bottom-0">
      © {new Date().getFullYear()} Vytenis
    </footer>
  );
};

export default Footer;
