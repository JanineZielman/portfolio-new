import { PrismicLink, PrismicText } from "@prismicio/react";

export const Header = ({ settings }) => {
  return (
    <div className="menu">
      <PrismicLink href="/" className="logo">
        <img src="/logo.svg"/>
      </PrismicLink>
    </div>
  );
};
