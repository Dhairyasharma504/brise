import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`

    font-family: 'Lato', sans-serif;
  

  .sidebar {
    height: 100%;
    width: 70px;
    position: fixed;
    background: radial-gradient( 8317.54% 86.25% at 50% 13.75%,#18316c 0%,#171959 62.16%,#171959 100% );
    transition-property: width;
  transition-duration: 1s;
    );
    overflow-x: hidden;
    padding-top: 16px;
  }
  .sidebar:hover {
    width: 100px;
  }

  .sidebar a {
height: 75px;
padding-top: 25px;

    font-size: 20px;
    text-align: center;
    color: white;
    display: block;
  }

  .sidebar a:hover {
    color: black;
    background-color: #EFF3F9;
  }

  
`;

const SideNavbar = () => {
  return (
    <Wrapper>
      <div>
        <div class="sidebar">
          <a href="#home">
            <i class="fa fa-fw fa-home"></i>
          </a>

          <a href="#services">
            <i class="fa fa-fw fa-wrench"></i>
          </a>
          <a href="#clients">
            <i class="fa fa-fw fa-user"></i>
          </a>
          <a href="#contact">
            <i class="fa fa-fw fa-envelope"></i>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default SideNavbar;
