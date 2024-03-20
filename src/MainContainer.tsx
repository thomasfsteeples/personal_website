import HomeIconPath from "iconoir/icons/home-alt.svg";
import { ReactNode } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "wouter";

function MainContainer({
  children,
  homeButtonPresent,
}: {
  children: ReactNode;
  homeButtonPresent: boolean;
}) {
  return (
    <div id="main-container">
      {homeButtonPresent && (
        <Link href="/">
          {" "}
          <ReactSVG wrapper="span" className="icon" src={HomeIconPath} />
        </Link>
      )}
      {children}
    </div>
  );
}

export default MainContainer;
