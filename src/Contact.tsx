import MainContainer from "./MainContainer";

export default function Contact() {
  return (
    <>
      <MainContainer homeButtonPresent={true}>
        <h1>Contact</h1>
        <p>I interact with the outside world via the following services:</p>
        <ul>
          <li>
            <a href="mailto:thomas.f.steeples@posteo.net">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/thomas-steeples/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/thomasfsteeples">Github</a>
          </li>
          <li>
            <a href="https://news.ycombinator.com/user?id=steeps">
              Hacker News
            </a>
          </li>
          <li>
            <a href="https://lichess.org/@/tsteeples">Lichess</a>
          </li>
        </ul>
      </MainContainer>
    </>
  );
}
