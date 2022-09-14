import React from 'react';
import styled from 'styled-components';
const Main = styled.section``;
const SliderNavbar = () => (
  <Main>
      <div className='cover'>
    <div className="menu">
      <i class="bx bx-menu"></i>
    </div>
    <aside className="slidebar">
      <nav className="nav">
        <div>
          <a
            class="navbar-item"
            href="https://bulma.io/documentation/form/general/"
          >
            Form<i class="bx bx-brightness"></i>
          </a>
        </div>
        <div>
          <a
            class="navbar-item"
            href="https://bulma.io/documentation/form/general/"
          >
            Form<i class="bx bx-brightness"></i>
          </a>
        </div>
        <div>
          <a
            class="navbar-item"
            href="https://bulma.io/documentation/form/general/"
          >
            Form<i class="bx bx-brightness"></i>
          </a>
        </div>
      </nav>
    </aside>
  </Main>
);
export default SliderNavbar;
