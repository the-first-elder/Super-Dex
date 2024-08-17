const Header = () => {
  return (
    <nav className="w-full">
      <div className="w-full mx-auto">
        <nav className="top-nav container flex-between-center">
          <ul className="top-nav__menu">
            <li>Sports</li>
            <li>Fantasy</li>
            <li>Casino</li>
            <li>Live Casino</li>
            <li>Games</li>
            <li>Poker</li>
            <li>Bingo</li>
            <li>Extra</li>
          </ul>
          <ul className="top-nav__settings">
            <li>Responsible Gambling</li>
            <li>Help</li>
          </ul>
        </nav>
        <nav className="main-nav container flex-between-center">
          <div className="main-nav__burger">
            <i className="fa-solid fa-bars"></i>
            <span>A-Z</span>
          </div>
          <div className="main-nav__logo">
            <img src="assets/logo/main-logo.png" alt="logo" loading="lazy" />
            <img
              src="assets/logo/small-logo.png"
              alt="logo"
              loading="lazy"
              className="main-nav__alt-logo"
            />
          </div>
          <ul className="main-nav__content">
            <li>Sports</li>
            <li>In-Play</li>
          </ul>
          <div className="main-nav__settings">
            <div className="main-nav__search">
              <i className="fa fa-magnifying-glass fa-2x"></i>
            </div>
            <div className="main-nav__join">
              <button>Join</button>
            </div>
            <div className="main-nav__login">
              <button>Log in</button>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};
export default Header;
