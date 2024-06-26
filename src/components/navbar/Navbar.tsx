import "./navbar.scss";
const Navbar = ({
  handleTheme,
  isDark,
}: {
  handleTheme: any;
  isDark: boolean;
}) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        {isDark ? (
          <img
            src="/dark.svg"
            alt=""
            className="icon"
            onClick={() => handleTheme()}
          />
        ) : (
          <img
            src="/light.svg"
            alt=""
            className="icon"
            onClick={() => handleTheme()}
          />
        )}
        <div className="user">
          <img src="/profile.jpeg" alt="profile" />
          <span>JANE</span>
        </div>
        <img src="/settings" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
