import "./Home.scss";

export const Home = () => {
  const title = "CHADIFY";
  const subtitle = "New dimension of music";
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type";

  return (
    <div className="MainContainer">
      <div className="TitleContainer">{title}</div>
      <div className="SubTitleContainer">{subtitle}</div>
      <div className="ContentContainer">{content}</div>
      <div className="ButtonContainer">
        <button className="HomePageButton">Login</button>
        <button className="HomePageButton">Register</button>
      </div>
    </div>
  );
};
