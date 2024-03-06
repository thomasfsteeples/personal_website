import MainContainer from "./MainContainer";
import abate2021 from "./papers/abate2021.pdf";
import dPhilThesis from "./papers/dPhilThesis.pdf";
import gutierrez2018 from "./papers/gutierrez2018.pdf";
import gutierrez2021 from "./papers/gutierrez2021.pdf";
import gutierrez2022a from "./papers/gutierrez2022a.pdf";
import gutierrez2022b from "./papers/gutierrez2022b.pdf";
import gutierrez2024 from "./papers/gutierrez2024.pdf";
import steeples2021 from "./papers/steeples2021.pdf";

export default function CV() {
  return (
    <>
      <MainContainer>
        <h1>Curriculum vitae</h1>
        <h2>Higher Education</h2>
        <table className="cv-section">
          <colgroup>
            <col className="cv-table-year" />
            <col className="cv-table-details" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <p>2018-2022</p>
              </td>
              <td>
                <h3>
                  DPhil in Autonomous Intelligent Machines and Systems,
                  University of Oxford
                </h3>
                <p>
                  Thesis:{" "}
                  <a className="paper-links" href={dPhilThesis}>
                    <strong>Quantitative rational verification</strong>
                  </a>
                </p>
                <p>Supervised by Michael Wooldridge and Julian Gutierrez</p>
                <p>
                  Funded by the EPSRC Centre for Doctoral Training in Autonomous
                  Intelligent Machines and Systems, as well as Keble
                  College&apos;s Ian Palmer Scholarship.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2016-2017</p>
              </td>
              <td>
                <h3>
                  MSc in Computer Science, University of Oxford, Distinction
                </h3>
                <p>Dissertation: Local equilibria in iterated Boolean games</p>
                <p>Supervised by Michael Wooldridge and Julian Gutierrez</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2012-2016</p>
              </td>
              <td>
                <h3>
                  MSci in Mathematics, University College London, First Class
                  Honours
                </h3>
                <p>Dissertation: The hyperbolic lattice counting problem</p>
                <p>Supervised by Yiannis Petridis</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Publications</h2>
        <table className="cv-section">
          <colgroup>
            <col className="cv-table-year" />
            <col className="cv-table-details" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <p>2024</p>
              </td>
              <td>
                <p>
                  Julian Gutierrez et al.{" "}
                  <a className="paper-links" href={gutierrez2024}>
                    <strong>
                      ‘Characterising and verifying the core in concurrent
                      multi-player mean-payoff games’
                    </strong>
                    .
                  </a>{" "}
                  In: 32nd EACSL Annual Conference on Computer Science Logic,
                  CSL 2
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2023</p>
              </td>
              <td>
                <p>
                  Julian Gutierrez et al.{" "}
                  <a className="paper-links" href={gutierrez2022b}>
                    <strong>‘Cooperative concurrent games’</strong>
                  </a>
                  . In: Artif. Intell. 314 (2023), p. 103806
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2022</p>
              </td>
              <td>
                <p>
                  Julian Gutierrez, Thomas Steeples and Michael J. Wooldridge.{" "}
                  <a className="paper-links" href={gutierrez2022a}>
                    <strong>
                      ‘Mean-payoff games with 𝜔-regular specifications’
                    </strong>
                  </a>
                  . In: Games 13.1 (2022), p. 19
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2021</p>
              </td>
              <td>
                <p>
                  Julian Gutierrez et al.{" "}
                  <a className="paper-links" href={gutierrez2021}>
                    <strong>
                      ‘Equilibria for games with combined qualitative and
                      quantitative objectives’
                    </strong>
                  </a>
                  . In: Acta Informatica 58.6 (2021), pp. 585–610
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2021</p>
              </td>
              <td>
                <p>
                  Alessandro Abate et al.{" "}
                  <a className="paper-links" href={abate2021}>
                    <strong>
                      ‘Rational verification: game-theoretic verification of
                      multi-agent systems’
                    </strong>
                  </a>
                  . In: Appl. Intell. 51.9 (2021), pp. 6569–6584
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2021</p>
              </td>
              <td>
                <p>
                  Thomas Steeples, Julian Gutierrez and Michael J. Wooldridge.{" "}
                  <a className="paper-links" href={steeples2021}>
                    <strong>
                      ‘Mean-payoff games with 𝜔-regular specifications’
                    </strong>
                  </a>
                  . In: AAMAS &apos;21: 20th International Conference on
                  Autonomous Agents and Multiagent Systems, Virtual Event,
                  United Kingdom, May 3-7, 2021. 2021, pp. 1272–1280
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2018</p>
              </td>
              <td>
                <p>
                  Julian Gutierrez et al.{" "}
                  <a className="paper-links" href={gutierrez2018}>
                    <strong>
                      ‘Local equilibria in logic-based multi-player games’
                    </strong>
                  </a>
                  . In: Proceedings of the 17th International Conference on
                  Autonomous Agents and MultiAgent Systems, AAMAS 2018,
                  Stockholm, Sweden, July 10-15, 2018. 2018, pp. 399–406
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Work Experience</h2>
        <table className="cv-section">
          <colgroup>
            <col className="cv-table-year" />
            <col className="cv-table-details" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <p>2024-Present</p>
                <p>2022-2024</p>
              </td>
              <td>
                <p>
                  <strong>TWS Partners, Senior Consultant</strong>
                </p>
                <p>
                  <strong>TWS Partners, Consultant</strong>
                </p>
                <p>
                  I work in the pharma team, solving the business problems of
                  global pharmaceutical companies with game-theoretic reasoning.
                  Concretely, this includes quantitative modelling, scenario
                  planning, and competitive wargaming, along with other relevant
                  strategic analysis activities. In addition to performing
                  theses analyses and presenting the resulting findings to the
                  client, I&apos;m involved with project management, bid preparation,
                  and internal tool development.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2020-2021</p>
              </td>
              <td>
                <p>
                  <strong>University of Oxford, Class Tutor</strong>
                </p>
                <p>
                  I was part of the teaching team for the Computational Game
                  Theory course at the University. This is a course for
                  third-year undergraduates, master&apos;s and DPhil students in the
                  Computer Science and Engineering departments. I marked the
                  students&apos; work, provided model solutions and ran classes where
                  we discussed the course material, along with any problems they
                  might have had.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2018-2021</p>
              </td>
              <td>
                <p>
                  <strong>Freelance Editing</strong>
                </p>
                <p>
                  During the course of my DPhil, I took on editing work
                  (structural and copy editing) for a number of clients. Notable
                  projects have included a popular AI book, as well as a report
                  for the European Parliament.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2017-2018</p>
              </td>
              <td>
                <p>
                  <strong>IBM, Technology Consultant</strong>
                </p>
                <p>
                  I worked within the Cognitive Process Automation practice as
                  part of the Consulting by Degrees graduate scheme. As part of
                  a new team, I helped deliver process automation to a global
                  automotive firm, a national bank and a broadcasting
                  corporation. I had a number of other roles on top of this,
                  which included project management, as well as working on bids
                  and proposals for potential new projects for global firms.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </MainContainer>
    </>
  );
}
