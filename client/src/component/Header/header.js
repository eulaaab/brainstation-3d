import React, { Component } from "react";
import "./styles.scss";
import Logo from "../../c9b8d7bc-f2d2-4e76-a7be-a9a182013953_200x200.png";
import undergrad from "../../woman-sharing-her-presentation-with-her-colleagues-3153198.jpg";
import { Link } from 'react-router-dom';
import donut from "../../Oval2.png";
import money from "../../Money Icon@3x.png"

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
            <h2 className="hero__title">KICKSTART YOUR NEW CAREER</h2>
            <p className="hero__slogan">
              Find the right tech for you
            </p>
            <button class="hero-container__button" onclick="window.location.href = 'pages/registration.html'; "  >LEARN MORE</button>
          </div>
          <div className="hero__right hero__image">
            <img src={undergrad} className="undergrad" />
          </div>
        </section>


        <section className="flex__container">
          <div className="container">
            <div className="card card--hover">
              <div className="parent">
                <img className="navbar__img donut" src={donut} alt="icon of user" />
                <h2 className="posi">55%</h2>

              </div>
              <h3 className="text">OF BUSINESSES PROVIDE TRAINING IN TECH</h3>
            </div>
            <div className="card card--hover">
              <img className="navbar__img money" src={money} alt="money" />
              <ul>

                <h2>$11,700</h2>
                <h3 className="middle-text">AVERAGE AMOUNT OF BUSINESSES SPEND ON DIGITAL TRAINING PER EMPLOYEE</h3>

              </ul>
            </div>


            <div className="card card--hover">
              <div className="parent">

                <img className="navbar__img donut" src={donut} alt="icon of user" />
                <h2 className="posi">86%</h2>

                <h4></h4>
              </div>
              <h3 className="text">OF BUSINESSES PROVIDE YOU WITH FREE DEVICES</h3>
            </div>
          </div>
        </section>
        <section className="hero-table">

          <iframe
            src="https://public.tableau.com/views/Visualizations_15835228523930/Sheet1?:display_count=y&:origin=viz_share_link?:showVizHome=n:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link"
            width="1000px"
            height="461px" className="table"
          ></iframe>

        </section>
      </>
    );
  }
}
export default Header;
