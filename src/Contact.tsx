import { Link } from "wouter";
import MainContainer from "./MainContainer";

export default function Contact() {
  return (
    <>
      <MainContainer>
        <h1>Contact</h1>
        <p>I can be contacted via any of the following:</p>
        <ul>
          <li>
            <Link href="mailto:thomas.f.steeples@posteo.net">Email</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/thomas-steeples/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </MainContainer>
    </>
  );
}
