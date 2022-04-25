import Button from "../Button/Button";

function Info({ titleText, counterNumber, counterText }) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{titleText}</h1>
      </header>
      <section className="controls">
        <p className="info">
          {counterNumber} {counterText}
        </p>
        <Button text="Select all" className="button button--select" />
      </section>
    </>
  );
}
export default Info;
