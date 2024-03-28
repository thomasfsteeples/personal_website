import MainContainer from "./MainContainer";

export default function ErrorPage() {
  return (
    <MainContainer homeButtonPresent={true}>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </MainContainer>
  );
}
