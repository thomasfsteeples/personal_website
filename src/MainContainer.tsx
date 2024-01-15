import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

function MainContainer({ children }: MainContainerProps) {
  return <div id="main-container">{children}</div>;
}

export default MainContainer;
