// import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header />
      <main className="flex-grow overflow-hidden">
        <main className="content">
          <section className="main-content">
            <nav className="main-content__nav container">
              <ul className="main-content__icons">
                <li>
                  <img
                    src="assets/content-icons/fav-icon.png"
                    alt="Favorite icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/fav-icon-active.png"
                    alt="Active favorite icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Favourites</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/football-icon.png"
                    alt="Ball icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/football-icon-active.png"
                    alt="Active ball icon"
                    loading="lazy"
                    className="main-content__activeball"
                  />
                  <p>Soccer</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/tennis-icon.png"
                    alt="Tennis ball icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/tennis-icon-active.png"
                    alt="Active Tennis ball icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Tennis</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/badminton-icon.png"
                    alt="Badminton icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/badminton-icon-active.png"
                    alt="Active badminton icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Badminton</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/basketball-icon.png"
                    alt="Basketball icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/basketball-icon-active.png"
                    alt="Active basketball icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Basketball</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/volleyball-icon.png"
                    alt="Beach volleyball icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/volleyball-icon-active.png"
                    alt="Active beach volleyball"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Volleyball</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/cricket-icon.png"
                    alt="Cricket icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/cricket-icon-active.png"
                    alt="Active cricket icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Cricket</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/darts-icon.png"
                    alt="Darten icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/darts-icon-active.png"
                    alt="Active Darten icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Darts</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/trotting-icon.png"
                    alt="Draf sport icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/trotting-icon-active.png"
                    alt="Active draf sport icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Trotting</p>
                </li>
                <li>
                  <img
                    src="assets/content-icons/golf-icon.png"
                    alt="Golf icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/content-icons/golf-icon-active.png"
                    alt="Active golf icon"
                    loading="lazy"
                    className="main-content__active"
                  />
                  <p>Golf</p>
                </li>
              </ul>
            </nav>
            <header className="main-content__head container flex-between-center">
              <div className="main-content__left-head flex-between-center">
                <h2>Soccer</h2>
                <img
                  src="assets/content-icons/statistics-icon.png"
                  alt="Statistics bar"
                  loading="lazy"
                  className="main-content__statistics"
                />
                <img
                  src="assets/content-icons/statistics-icon-active.png"
                  alt="Active statistics bar"
                  loading="lazy"
                  className="main-content__active-statistics"
                />
              </div>
              <div className="main-content__right-head flex-between-center">
                <p>Fulltime Result</p>
                <i className="fa-solid fa-chevron-down"></i>
                <input type="checkbox" />
                <div className="fulltime-menu">
                  <ul>
                    <li>Fulltime Result</li>
                    <li>Match Goals</li>
                    <li>Asian Handicap In-Play</li>
                    <li>Goal Line In-Play</li>
                  </ul>
                </div>
              </div>
            </header>
            <section className="main-content__body">
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Netherlands - Premier League
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        49:34
                      </div>
                      <div className="main-content__championship__body__data">
                        73 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Sparta Rotterdam</p>
                      <p>FC Utrecht</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">7.00</div>
                  <div className="main-content__championship__body__num">2.40</div>
                  <div className="main-content__championship__body__num">1.95</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Argentina Nacional B
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        31:22
                      </div>
                      <div className="main-content__championship__body__data">
                        57 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Temperley</p>
                      <p>Nueva Chicago</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>1</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.44</div>
                  <div className="main-content__championship__body__num">3.75</div>
                  <div className="main-content__championship__body__num">9.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Mexico - Liga TDP
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        00:00
                      </div>
                      <div className="main-content__championship__body__data">
                        87 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>CEFOR Chiapas</p>
                      <p>Antequera FC</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.60</div>
                  <div className="main-content__championship__body__num">3.75</div>
                  <div className="main-content__championship__body__num">4.50</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        45:00
                      </div>
                      <div className="main-content__championship__body__data">
                        42 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Celaya FC II</p>
                      <p>Inter de Querétaro II</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>2</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.045</div>
                  <div className="main-content__championship__body__num">11.00</div>
                  <div className="main-content__championship__body__num">26.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        90:00
                      </div>
                      <div className="main-content__championship__body__data">
                        13 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Chetumal</p>
                      <p>Inter Playa del Carmen II</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>2</span>
                      <br />
                      <span>2</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.22</div>
                  <div className="main-content__championship__body__num">3.25</div>
                  <div className="main-content__championship__body__num">4.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        45:00
                      </div>
                      <div className="main-content__championship__body__data">
                        43 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Club Deportivo CDH</p>
                      <p>CS Atletico Tulancingo</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>1</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">8.50</div>
                  <div className="main-content__championship__body__num">4.00</div>
                  <div className="main-content__championship__body__num">1.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Colombia - Primera B
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        34:15
                      </div>
                      <div className="main-content__championship__body__data">
                        95 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Tigres FC</p>
                      <p>Cortulua</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>2</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.045</div>
                  <div className="main-content__championship__body__num">11.00</div>
                  <div className="main-content__championship__body__num">23.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Brazilië - State Championship
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        45:00
                      </div>
                      <div className="main-content__championship__body__data">
                        12 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Desportiva Ferroviaria</p>
                      <p>Serra</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>2</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">13.00</div>
                  <div className="main-content__championship__body__num">8.00</div>
                  <div className="main-content__championship__body__num">1.11</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        49:47
                      </div>
                      <div className="main-content__championship__body__data">
                        63 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Brasil de Pelotas</p>
                      <p>Avenida</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>1</span>
                      <br />
                      <span>1</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">2.25</div>
                  <div className="main-content__championship__body__num">2.25</div>
                  <div className="main-content__championship__body__num">5.50</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        57:31
                      </div>
                      <div className="main-content__championship__body__data">
                        60 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Gremio</p>
                      <p>Novo Hamburgo</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>5</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.28</div>
                  <div className="main-content__championship__body__num">6.00</div>
                  <div className="main-content__championship__body__num">7.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Venezuela - Primera Division
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        45:00
                      </div>
                      <div className="main-content__championship__body__data">
                        23 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Monagas</p>
                      <p>Angostura FC</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">2.20</div>
                  <div className="main-content__championship__body__num">2.37</div>
                  <div className="main-content__championship__body__num">4.75</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Australia Friendlies
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        08:01
                      </div>
                      <div className="main-content__championship__body__data">
                        18 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Clarence Zebras FC</p>
                      <p>Kingborough Lions</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">4.75</div>
                  <div className="main-content__championship__body__num">4.50</div>
                  <div className="main-content__championship__body__num">1.53</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Chili - Segunda
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        78:03
                      </div>
                      <div className="main-content__championship__body__data">
                        32 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Lautaro de Buin</p>
                      <p>Deportes Rengo</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>3</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.005</div>
                  <div className="main-content__championship__body__num">34.00</div>
                  <div className="main-content__championship__body__num">51.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Bolivia - Apertura
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        43:35
                      </div>
                      <div className="main-content__championship__body__data">
                        93 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Real Tomayapo</p>
                      <p>Royal Pari FC</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>0</span>
                      <br />
                      <span>2</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">13.00</div>
                  <div className="main-content__championship__body__num">6.50</div>
                  <div className="main-content__championship__body__num">1.20</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/video-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/video-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
              <article className="main-content__championship">
                <div className="main-content__championship__head grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <p className="main-content__championship__head__text">
                    Paraguay - Division Profesional
                  </p>
                  <div className="main-content__championship__head__num1">1</div>
                  <div className="main-content__championship__head__num2">X</div>
                  <div className="main-content__championship__head__num3">2</div>
                  <div className="main-content__championship__head__symbol"></div>
                </div>
                <div className="main-content__championship__body grid container">
                  <div className="main-content__fav">
                    <img
                      src="assets/content-icons/fav-icon-star.png"
                      alt="Favorite icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/fav-icon-star-active.png"
                      alt="Active Favorite icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                  <div
                    className="main-content__championship__body__text flex-between-center"
                  >
                    <div className="main-content__championship__body__data-item">
                      <div className="main-content__championship__body__time">
                        60:22
                      </div>
                      <div className="main-content__championship__body__data">
                        60 <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="main-content__championship__body__name">
                      <p>Cerro Porteno</p>
                      <p>Resistencia FC</p>
                    </div>
                    <div className="main-content__fav">
                      <img
                        src="assets/content-icons/data-statistics.png"
                        alt="Statistics icon"
                        loading="lazy"
                      />
                      <img
                        src="assets/content-icons/data-statistics-active.png"
                        alt="Active statistics icon"
                        loading="lazy"
                        className="main-content__fav__active"
                      />
                    </div>
                    <div className="main-content__championship__body__insights">
                      <span>1</span>
                      <br />
                      <span>0</span>
                    </div>
                  </div>
                  <div className="main-content__championship__body__num">1.12</div>
                  <div className="main-content__championship__body__num">7.00</div>
                  <div className="main-content__championship__body__num">29.00</div>
                  <div className="main-content__fav fav-symbol">
                    <img
                      src="assets/content-icons/soccer-feild-icon.png"
                      alt="Play icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/content-icons/soccer-feild-icon-active.png"
                      alt="Active play icon"
                      loading="lazy"
                      className="main-content__fav__active"
                    />
                  </div>
                </div>
              </article>
            </section>
            <section className="text container">
              <div className="extra">
                <div className="text__title">
                  <div className="text__title__icon">
                    <img
                      src="assets/text-icons/extra-icon.png"
                      alt="Star icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/text-icons/extra-icon-active.png"
                      alt="Active star icon"
                      loading="lazy"
                      className="active"
                    />
                  </div>
                  <h2>Extra</h2>
                </div>
                <dl className="text__body">
                  <div className="text__body__item">
                    <dt>2 Goals Ahead Early Payout</dt>
                    <dd>Selections settled if your team goes 2 goals ahead.</dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                  <div className="text__body__item">
                    <dt>Soccer Accumulators</dt>
                    <dd>
                      Accumulators settled with an additional 2.5-70% added to your
                      winnings.
                    </dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                  <div className="text__body__item">
                    <dt>Tennis Accumulators</dt>
                    <dd>
                      Accumulators settled with an additional 5 - 70% added to your
                      winnings.
                    </dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                </dl>
              </div>
              <div className="features">
                <div className="text__title">
                  <div className="text__title__icon">
                    <img
                      src="assets/text-icons/features.png"
                      alt="Features icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/text-icons/features-active.png"
                      alt="Active features icon"
                      loading="lazy"
                      className="active"
                    />
                  </div>
                  <h2>Features</h2>
                </div>
                <dl className="text__body">
                  <div className="text__body__item">
                    <div>
                      <dt>Soccer Bet Builder</dt>
                      <dd>
                        Now available on up to 12 selections. Create your own
                        personalised bet on any Soccer game. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Features_BetBuilderV2.png"
                        alt="Bet builder feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Live Streaming Highlights</dt>
                      <dd>
                        A selection of the top Soccer matches you can watch at
                        bet365 over the next few days. Eligible customers only.
                      </dd>
                      <dd>Live Streaming rules apply.</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Feature_StreamingV2.png"
                        alt="Streaming feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Cash Out</dt>
                      <dd>
                        Giving you the opportunity to take a return before an event
                        has finished. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Features_AutoCashoutV2.png"
                        alt="Auto cash out feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Edit Bet</dt>
                      <dd>
                        Giving you the ability to add, swap or remove selections
                        from your bet. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Feature_EditBetV2.png"
                        alt="Edit bet feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </dl>
              </div>
            </section>
            <section className="games">
              <div className="games__wrapper container">
                <h2>Instant Games</h2>
                <ul className="games__posters">
                  <li className="games__item">
                    <div className="games__background one"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay one"></div>
                    <p className="games__title">Blackjack</p>
                  </li>
                  <li className="games__item">
                    <div className="games__background two"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay two"></div>
                    <p className="games__title">Super Mega Ultra Wheel</p>
                  </li>
                  <li className="games__item">
                    <div className="games__background three"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay three"></div>
                    <p className="games__title">Book of Horus</p>
                  </li>
                  <li className="games__item">
                    <div className="games__background four"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay four"></div>
                    <p className="games__title">European Roulette</p>
                  </li>
                  <li className="games__item">
                    <div className="games__background five"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay five"></div>
                    <p className="games__title">8 Immortals</p>
                  </li>
                  <li className="games__item">
                    <div className="games__background six"></div>
                    <div className="games__gradiant"></div>
                    <div className="games__overlay six"></div>
                    <p className="games__title">Atomic 7s</p>
                  </li>
                </ul>
              </div>
            </section>
            <footer className="main-content__footer">
              <div className="container">
                <div className="footer__help">
                  <h2>Help</h2>
                  <ul>
                    <li>Deposits</li>
                    <li>Withdrawals</li>
                    <li>Contact Us</li>
                    <li>bet365 FAQ</li>
                    <li>Terms and Conditions</li>
                    <li>Responsible Gambling</li>
                    <li>Technical Issues</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>Fair Payouts</li>
                    <li>Complaints Procedure</li>
                    <li>Rules</li>
                    <li>Gaming Guide</li>
                  </ul>
                </div>
                <div className="footer__forms">
                  <h2>Forms & Stats</h2>
                  <ul>
                    <li>Sports & Betting News</li>
                    <li>Soccer Stats</li>
                    <li>Sports Stats</li>
                    <li>Horse Form</li>
                    <li>Horse Search</li>
                    <li>UK & Irish Racing Archive</li>
                    <li>Australian Horse Form</li>
                    <li>US Horse Form</li>
                    <li>UK & Irish Greyhound Form</li>
                  </ul>
                </div>
                <div className="footer__settings">
                  <div className="settings">
                    <h2>Settings</h2>
                    <ul>
                      <li>Language <i className="fa-solid fa-chevron-down"></i></li>
                      <li>Odds Display <i className="fa-solid fa-chevron-down"></i></li>
                    </ul>
                  </div>
                  <div className="results">
                    <h2>Scores & Results</h2>
                    <ul>
                      <li>Live Scores</li>
                      <li>Results</li>
                    </ul>
                  </div>
                  <div className="promotions">
                    <h2>Promotions</h2>
                    <ul>
                      <li>Open Account Offer</li>
                    </ul>
                  </div>
                  <div className="audio">
                    <h2>Audio</h2>
                    <ul>
                      <li>Horse Racing</li>
                      <li>Greyhounds</li>
                      <li>Soccer</li>
                      <li>Cricket</li>
                      <li>Six Nations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info container">
                <div className="info__sponsers">
                  <img
                    src="assets/footer/internationalBettingIntegrity.png"
                    alt="International Betting Integrity icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/footer/eCogra.png"
                    alt="eCogra icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/footer/agog.png"
                    alt="AGOG icon"
                    loading="lazy"
                  />
                  <img
                    src="assets/footer/loketkansspel_v2.png"
                    alt="LOKETKANSSPEL"
                    loading="lazy"
                  />
                  <img
                    src="assets/footer/18.png"
                    alt="Plus 18 icon"
                    loading="lazy"
                  />
                </div>
                <div className="info__text">
                  <div className="info__text__left">
                    <p>What does gambling cost you? Stop on time. 18+</p>
                    <div className="logo-poster">
                      <img
                        src="assets/footer/bet365-logo.png"
                        alt="bet365 logo"
                        loading="lazy"
                      />
                    </div>
                    <p>
                      Registered Office: Hillside (New Media Malta) Plc, Office
                      1/2373, Level G, Quantum House, 75 Abate Rigord Street, Ta’
                      Xbiex, XBX 1120 Malta
                    </p>
                    <p>© 2001-2023 bet365. All rights reserved.</p>
                    <p>Server Time 08:02:55 CET</p>
                  </div>
                  <ul className="info__text__right">
                    <li>Casino</li>
                    <li>Live Casino</li>
                    <li>Games</li>
                    <li>Poker</li>
                  </ul>
                </div>
                <div className="info__policy">
                  <p>
                    By accessing, continuing to use or navigating throughout this
                    site you accept that we will use certain browser cookies to
                    improve your customer experience with us. bet365 only uses
                    cookies which will improve your experience with us and will not
                    interfere with your privacy. Please refer to our
                    <span className="cookies">Cookies Policy</span> for further
                    information on our use of cookies and how you can disable or
                    manage their use should you wish.
                  </p>
                  <p>
                    This site is protected by reCAPTCHA and the Google
                    <span className="privacy">Privacy Policy</span> and
                    <span className="privacy">Terms of Service</span> apply.
                  </p>
                </div>
              </div>
            </footer>
          </section>
          <aside className="side-bar">
            <section className="side-bar__drow container">
              <div className="side-bar__result flex-center">
                <h2>Bournemouth</h2>
                <div className="result__num">
                  1
                  <div className="first"></div>
                </div>
                <div className="result__num">
                  4
                  <div className="second"></div>
                </div>
                <h2>Man City</h2>
              </div>
              <div className="side-bar__feild">
                <div className="side-bar__time">87.21</div>
                <img
                  src="assets/soccer-feild.png"
                  alt="Soccer feild"
                  loading="lazy"
                />
              </div>
              <div className="side-bar__details flex-between-center">
                <p>Show Goalscorers</p>
                <p>Show Match Info</p>
              </div>
            </section>
            <section className="side-bar__data">
              <ul className="side-bar__data__nav">
                <li>Stats</li>
                <li>Player Stats</li>
                <li>Timeline</li>
                <li>Lineups</li>
                <li>Table</li>
              </ul>
              <div className="side-bar__data__nums flex-center">
                <div className="s-one"></div>
                <div className="num">0.59</div>
                <div className="sperator">xG</div>
                <div className="num">0.72</div>
                <div className="s-two"></div>
              </div>
              <div className="side-bar__data__analysis container">
                <div className="data-item">
                  <h3>Attacks</h3>
                  <div className="data-item__data">
                    <p className="num">60</p>
                    <div className="circle">
                      <div className="left"></div>
                      <div className="right"></div>
                      <div className="circle-icon flex-center">
                        <img
                          src="assets/side-bar-data/attack.png"
                          alt="Arrow to right icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="num">40</p>
                  </div>
                </div>
                <div className="data-item">
                  <h3>Dangerous Attacks</h3>
                  <div className="data-item__data">
                    <p className="num">65</p>
                    <div className="circle">
                      <div className="left"></div>
                      <div className="right"></div>
                      <div className="circle-icon flex-center">
                        <img
                          src="assets/side-bar-data/dangerous_attack.png"
                          alt="Three arrows to right icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="num">35</p>
                  </div>
                </div>
                <div className="data-item">
                  <h3>Possession %</h3>
                  <div className="data-item__data">
                    <p className="num">52</p>
                    <div className="circle">
                      <div className="left"></div>
                      <div className="right"></div>
                      <div className="circle-icon flex-center">
                        <img
                          src="assets/side-bar-data/possession.png"
                          alt="Percentage icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="num">48</p>
                  </div>
                </div>
              </div>
              <div className="side-bar__data__results container flex-between-center">
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/red-flag-icon.png"
                      alt="flag"
                      loading="lazy"
                    />
                  </div>
                  <p>1</p>
                </div>
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/rectangle-icon.png"
                      alt="Rectangle"
                      loading="lazy"
                    />
                  </div>
                  <p>0</p>
                </div>
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/yellow-rectangle-icon.png"
                      alt="Rectangle"
                      loading="lazy"
                    />
                  </div>
                  <p>1</p>
                </div>
                <div className="target flex-center">
                  <div className="shots-num">4/3</div>
                  <div className="shots-progress">
                    <p>Shots/On Target</p>
                    <div className="progress flex-center">
                      <div className="one"></div>
                      <div className="two"></div>
                    </div>
                    <div className="s-progress flex-center">
                      <div className="one"></div>
                      <div className="two"></div>
                    </div>
                  </div>
                  <div className="shots-num">4/1</div>
                </div>
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/yellow-rectangle-icon.png"
                      alt="Rectangle"
                      loading="lazy"
                    />
                  </div>
                  <p>1</p>
                </div>
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/rectangle-icon.png"
                      alt="Rectangle"
                      loading="lazy"
                    />
                  </div>
                  <p>0</p>
                </div>
                <div className="results__item">
                  <div className="poster">
                    <img
                      src="assets/side-bar-data/red-flag-icon.png"
                      alt="flag"
                      loading="lazy"
                    />
                  </div>
                  <p>1</p>
                </div>
              </div>
              <div className="side-bar__data__more">
                <button>
                  Show more
                  <img
                    src="assets/side-bar-data/arrow-to-bottom.png"
                    alt="Arrow to bottom"
                    loading="lazy"
                  />
                </button>
              </div>
            </section>
            <section className="text container">
              <div className="extra">
                <div className="text__title">
                  <div className="text__title__icon">
                    <img
                      src="assets/text-icons/extra-icon.png"
                      alt="Star icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/text-icons/extra-icon-active.png"
                      alt="Active star icon"
                      loading="lazy"
                      className="active"
                    />
                  </div>
                  <h2>Extra</h2>
                </div>
                <dl className="text__body">
                  <div className="text__body__item">
                    <dt>2 Goals Ahead Early Payout</dt>
                    <dd>Selections settled if your team goes 2 goals ahead.</dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                  <div className="text__body__item">
                    <dt>Soccer Accumulators</dt>
                    <dd>
                      Accumulators settled with an additional 2.5-70% added to your
                      winnings.
                    </dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                  <div className="text__body__item">
                    <dt>Tennis Accumulators</dt>
                    <dd>
                      Accumulators settled with an additional 5 - 70% added to your
                      winnings.
                    </dd>
                    <dd>New & eligible customers only. T&Cs apply.</dd>
                  </div>
                </dl>
              </div>
              <div className="features">
                <div className="text__title">
                  <div className="text__title__icon">
                    <img
                      src="assets/text-icons/features.png"
                      alt="Features icon"
                      loading="lazy"
                    />
                    <img
                      src="assets/text-icons/features-active.png"
                      alt="Active features icon"
                      loading="lazy"
                      className="active"
                    />
                  </div>
                  <h2>Features</h2>
                </div>
                <dl className="text__body">
                  <div className="text__body__item">
                    <div>
                      <dt>Soccer Bet Builder</dt>
                      <dd>
                        Now available on up to 12 selections. Create your own
                        personalised bet on any Soccer game. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Features_BetBuilderV2.png"
                        alt="Bet builder feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Live Streaming Highlights</dt>
                      <dd>
                        A selection of the top Soccer matches you can watch at
                        bet365 over the next few days. Eligible customers only.
                      </dd>
                      <dd>Live Streaming rules apply.</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Feature_StreamingV2.png"
                        alt="Streaming feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Cash Out</dt>
                      <dd>
                        Giving you the opportunity to take a return before an event
                        has finished. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Features_AutoCashoutV2.png"
                        alt="Auto cash out feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="text__body__item">
                    <div>
                      <dt>Edit Bet</dt>
                      <dd>
                        Giving you the ability to add, swap or remove selections
                        from your bet. T&Cs apply.
                      </dd>
                      <dd>More Details</dd>
                    </div>
                    <div className="text__body__poster">
                      <img
                        src="assets/text-icons/exv8_Feature_EditBetV2.png"
                        alt="Edit bet feature icon"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </dl>
              </div>
            </section>
          </aside>
        </main>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
