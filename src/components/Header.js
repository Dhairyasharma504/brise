/* eslint-disable prettier/prettier */
/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  padding: 12px;
  font-family: ${props => props.theme.primaryFontFamily};
  background: #ffffff;
  box-shadow: 0px 8px 6px rgba(50, 50, 71, 0.05);
  .navbar {
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 700;
    font-size: 1.2rem;
    :hover {
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
  .field {
    margin-top: 10px;
  }
  .bx {
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Wrapper className="wrapper">
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/images/Bitgert .png" alt="site logo" />
            </Link>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-small is-rounded "
                  type="email"
                  placeholder="Search"
                />
                <span className="icon is-small is-right">
                  <i class="bx bx-search-alt-2"></i>
                </span>
              </div>
            </div>
            <a
              href="#"
              role="button"
              className={
                isActive
                  ? 'navbar-burger burger mobile is-active'
                  : 'navbar-burger burger mobile'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.handleMobileMenu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <Link to="/news" className="navbar-item">
                News <i class="bx bx-brightness"></i>
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact <i class="bx bx-bell"></i>
              </Link>
            </div>
          </div>
        </nav>
      </Wrapper>
    );
  }
}
