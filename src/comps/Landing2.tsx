export const Landing = ({ imgUrl, title, subtitle, opacity }) => {
  return (
    <div
      id="home"
      className="landing"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 44, 90, 0.2), rgba(4, 9, 30, ${
          opacity ? opacity : 0.1
        })), url(${imgUrl})`,
      }}
    >
      <div className="content">
        <h1 className="sectionTitle">{title}</h1>
        <p className="smallText">{subtitle}</p>
      </div>
    </div>
  );
};
