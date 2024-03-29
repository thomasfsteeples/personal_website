import ChatIconPath from "iconoir/icons/chat-lines.svg";
import PageIconPath from "iconoir/icons/page.svg";
import PhoneIconPath from "iconoir/icons/phone.svg";
import UserIconPath from "iconoir/icons/user.svg";
import { ReactNode } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "wouter";

import MainContainer from "./MainContainer.tsx";
import portrait1XJPG from "./assets/self-portrait-1500px.jpg";
import portrait1XWebP from "./assets/self-portrait-1500px.webp";
import portrait1_5XJPG from "./assets/self-portrait-2250px.jpg";
import portrait1_5XWebP from "./assets/self-portrait-2250px.webp";
import portrait2XJPG from "./assets/self-portrait-3000px.jpg";
import portrait2XWebP from "./assets/self-portrait-3000px.webp";
import portrait2_5XJPG from "./assets/self-portrait-3750px.jpg";
import portrait2_5XWebP from "./assets/self-portrait-3750px.webp";
import portrait3XJPG from "./assets/self-portrait-4500px.jpg";
import portrait3XWebP from "./assets/self-portrait-4500px.webp";
import portrait3_5XJPG from "./assets/self-portrait-5250px.jpg";
import portrait3_5XWebP from "./assets/self-portrait-5250px.webp";
import portrait4XJPG from "./assets/self-portrait-6000px.jpg";
import portrait4XWebP from "./assets/self-portrait-6000px.webp";
import portraitOriginalJPG from "./assets/self-portrait.jpg";

function Welcome() {
  return (
    <>
      <MainContainer homeButtonPresent={false}>
        <WelcomeContainer>
          <Hero />
          <Menu />
        </WelcomeContainer>
      </MainContainer>
    </>
  );
}

interface WelcomeContainerProps {
  children: ReactNode;
}

function WelcomeContainer({ children }: WelcomeContainerProps) {
  return <div id="welcome-container">{children}</div>;
}

function Hero() {
  return (
    <div id="hero">
      <a href={portraitOriginalJPG}>
        <picture>
          <source
            srcSet={`${portrait1XWebP} 1x, ${portrait1_5XWebP} 1.5x, ${portrait2XWebP} 2x, ${portrait2_5XWebP} 2.5x, ${portrait3XWebP} 3x, ${portrait3_5XWebP} 3.5x, ${portrait4XWebP} 4x`}
            type="image/webp"
          />
          <source
            srcSet={`${portrait1XJPG} 1x, ${portrait1_5XJPG} 1.5x, ${portrait2XJPG} 2x, ${portrait2_5XJPG} 2.5x, ${portrait3XJPG} 3x, ${portrait3_5XJPG} 3.5x,${portrait4XJPG} 4x`}
            type="image/jpeg"
          />
          <img
            id="self-portrait"
            src={portrait1XJPG}
            width="1500"
            height="1000"
            alt="Portrait of Thomas Steeples"
          />
        </picture>
      </a>
      <h1>Thomas Steeples</h1>
    </div>
  );
}

interface MenuItemProps {
  label: string;
  iconPath: string;
  pageRef: string;
}

function MenuItem({ label, iconPath, pageRef }: MenuItemProps) {
  return (
    <div className="menu-item">
      <Link href={pageRef}>
        <h2>
          <ReactSVG wrapper="span" className="icon" src={iconPath} />
          {label}
        </h2>
      </Link>
    </div>
  );
}

function Menu() {
  return (
    <div id="menu">
      <MenuItem label="About me" iconPath={UserIconPath} pageRef="about" />
      <MenuItem label="CV" iconPath={PageIconPath} pageRef="curriculum-vitae" />
      <MenuItem label="Blog" iconPath={ChatIconPath} pageRef="blog" />
      <MenuItem label="Contact" iconPath={PhoneIconPath} pageRef="contact" />
    </div>
  );
}

export default Welcome;
