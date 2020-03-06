import React, { Component } from "react";
import "./styles.scss";
import Logo from "../../c9b8d7bc-f2d2-4e76-a7be-a9a182013953_200x200.png";
import undergrad from "../../woman-sharing-her-presentation-with-her-colleagues-3153198.jpg";
import { Link } from 'react-router-dom';
//import donut from "";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true,
      isSecondActive: false,
      isAnotherActive: false
    };
  }

  handleToggle = event => {
    event.preventDefault();
    console.log(window.location);
    if (window.location.pathname === "/tab1") {
      this.setState({
        isActive: true,
        isSecondActive: false,
        isAnotherActive: false
      });
    } else if (window.location.pathname === "/tab2") {
      this.setState({
        isSecondActive: true,
        isActive: false,
        isAnotherActive: false
      });
    } else if (window.location.pathname === "/tab3") {
      this.setState({
        isAnotherActive: true,
        isActive: false,
        isSecondActive: false
      });
    } else {
      this.setState({
        isActive: true
      });
    }
  };

  render() {
    const { isActive } = this.state;
    const { isAnotherActive } = this.state;
    const { isSecondActive } = this.state;
    return (
      <>
        <header className="navbar" onClick={this.handleToggle}>
          <Link
            style={{ textDecoration: "none" }}
            className="navbar__img"
            to="/"
          >
            <img className="navbar__img" src={Logo} alt="icon of user" />
          </Link>
          <div className="navbar__links">
            <Link
              style={{ textDecoration: "none" }}
              className={`navbar__logo navbar__links--hover ${
                isActive ? "navbar__list__item--active" : " "
                }`}
              to="/tab1">
              FIND JOBS
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className={`navbar__logo navbar__links--hover ${
                isSecondActive ? "navbar__list__item--active" : " "
                }`}
              // onClick={this.handleToggle}
              to="/tab2"
            >
              CONTACT US
            </Link>
          </div>
        </header>
        <section className="hero">
          <div className="hero__left">
            <h2 className="hero__title">IS ICT FOR YOU</h2>
            <p className="hero__slogan">
              x% of businesses are hiring ICT professionals. Take the quiz to see if IT is for you.
            </p>
            <button class="hero-container__button" onclick="window.location.href = 'pages/registration.html'; "  >TAKE THE QUIZ NOW</button>
          </div>
          <div className="hero__right hero__image">
            <img src={undergrad} className="undergrad" />
          </div>
        </section>
        <section className="hero-table">

          <iframe
            src="https://public.tableau.com/views/Visualizations_15835228523930/Sheet1?:display_count=y&:origin=viz_share_link?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"
            width="1000px"
            height="461px" className="table"
          ></iframe>

        </section>
        {

          /*
    
            <section className="flex__container">
              <div className="container">
                <div className="card card--hover">
                  <h2>$11,700</h2>
                  <h3>Average amount businesses spend on digital training per employee</h3>
                </div>
                <div className="card card--hover">
                  <ul>
                    
                      // <img className="navbar__img donut" src="" alt="icon of user" />
                    }
    
    
                  </ul>
                </div>
                <div className="card card--hover">
                  <h1>75%</h1>
    
                </div>
              </div>
            </section>
            */
        }
      </>
    );
  }
}
export default Header;
