import MainContainer from "./MainContainer";

export default function About() {
  return (
    <>
      <MainContainer homeButtonPresent={true}>
        <h1>About me</h1>
        <p>
          My name is Thomas, but I also go by Tom. I&apos;m originally from
          Leighton Buzzard, a medium-sized market town in Bedfordshire in the
          United Kingdom, and now live in Oxford (also in the United Kingdom).
        </p>

        <p>
          I&apos;m currently working as a senior consultant at TWS Partners, an
          economics strategy consultancy. Before TWS, I was in higher education,
          with a short stint at IBM as a technology consultant; I hold:
          <ul>
            <li>
              A DPhil in Autonomous Intelligent Machines and Systems from the
              University of Oxford;
            </li>
            <li>
              An MSc in Computer Science from the University of Oxford; and
            </li>
            <li>An MSci in Mathematics from University College London.</li>
          </ul>
          Academically, I started out as an analytic number theorist, before
          jumping ship and becoming a game theorist/computational complexity
          theorist. I&apos;d broadly describe my academic interests as lying in
          the intersection of logic, games and complexity theory.
        </p>

        <p>
          More broadly, I have at least passing interests in the following
          areas:
          <ul>
            <li>SAT solvers;</li>
            <li>Parsing;</li>
            <li>Program synthesis;</li>
            <li>Linux systems administration;</li>
            <li>Artificial intelligence; and</li>
            <li>Games of all forms.</li>
          </ul>
        </p>

        <p>
          In my spare time, I enjoy powerlifting, playing chess (poorly), trying
          to be a film buff, hacking away on code that will never be released,
          and cooking.
        </p>
      </MainContainer>
    </>
  );
}
