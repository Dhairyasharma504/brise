import React from 'react';
import styled from 'styled-components';
import DashboardCard from './DashboardCard';
import Text_Hero from './Text_Hero';

const Wrapper = styled.div`
  .card {
    background-color: #193670;
    height: 117px;
  }

  .title {
  }
  .subtitle {
    padding-top: 45px;

    padding-right: 9px;
  }
  .container {
    margin: 6px;
  }
`;

const text = [
  {
    title: '5041',
    subtitle: 'New user',
  },
  {
    title: '3456',
    subtitle: 'Total user',
  },
  {
    title: '4554',
    subtitle: 'Pending withdrawal requests',
  },
  {
    title: '6789',
    subtitle: 'Total Listed coins',
  },
  {
    title: '4893',
    subtitle: '24hr Trading volume',
  },
  {
    title: '9886',
    subtitle: ' Total Trading volume',
  },
];

const Hero = () => (
  <Wrapper>
    <div className="container is-fullhd">
      <Text_Hero title="Dashboard" />
      <div className="columns">
        {text.map(p => (
          <div className="column ">
            <DashboardCard title={p.title} subtitle={p.subtitle} />
          </div>
        ))}
      </div>
    </div>
  </Wrapper>
);

export default Hero;
