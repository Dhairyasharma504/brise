import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SideNavbar from '../components/SideNavbar';
import Hero from '../components/Hero';

const Wrapper = styled.div`
  background: #eff3f9;
  .main {
    padding-left: 90px;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SideNavbar />
        <Seo title="Home" description="Welcome to GatsbyJs v1" />

        <Wrapper className="Wrapper ">
          <div className="main">
            <section className="section">
              <Hero />
            </section>
          </div>
        </Wrapper>
      </Layout>
    );
  }
}
