import MainContainer from "./MainContainer";

export default function CV() {
  return (
    <>
      <MainContainer>
        <h1>Curriculum vitae</h1>
        <h2>Higher Education</h2>
        <table>
          <tbody>
            <tr>
              <td>2018 - 2022</td>
              <td>
                <h3>
                  DPhil in Autonomous Intelligent Machines and Systems,
                  University of Oxford
                </h3>
                <p>Thesis: Quantitative rational verification</p>
                <p>Supervised by Michael Wooldridge and Julian Gutierrez</p>
                <p>
                  Funded by the EPSRC Centre for Doctoral Training in Autonomous
                  Intelligent Machines and Systems, as well as Keble
                  College&apos;s Ian Palmer Scholarship.
                </p>
              </td>
            </tr>
            <tr>
              <td>2016 - 2017</td>
              <td>
                <h3>
                  MSc in Computer Science, University of Oxford, Distinction
                </h3>
                <p>Dissertation: Local equilibria in iterated Boolean games</p>
                <p>Supervised by Michael Wooldridge and Julian Gutierrez</p>
              </td>
            </tr>
            <tr>
              <td>2012-2016</td>
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
        <table>
          <tbody>
            <tr>
              <td>2024</td>
              <td>
                Julian Gutierrez et al. ‘Characterising and verifying the core
                in concurrent multi-player mean-payoff games’. In: 32nd EACSL
                Annual Conference on Computer Science Logic, CSL 2
              </td>
            </tr>
          </tbody>
        </table>
      </MainContainer>
    </>
  );
}
